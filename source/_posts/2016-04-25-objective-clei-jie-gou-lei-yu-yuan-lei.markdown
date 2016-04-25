---
layout: post
title: "Objective-C类结构- 类与元类"
date: 2016-04-25 17:17:04 +0800
comments: true
published: true
categories: 
---

##一. 对象(Instance)

Objective-C中的每个对象都是某类(Class)的实例(instance)，对象数据结构中的isa字段即指向此类。
如objc_object结构所示。


    typedef struct objc_object {
        Class isa;
    } *id;

类描述了对象的数据与行为，数据包括分配空间的大小，实例变量类型以及布局等，行为包括了对象可响应的selectors和方法实现(IMP)。

类中的方法列表为对象可响应的的实例方法集，当向一个实例对象(instance)发送消息时，[objc_msgSend](http://developer.apple.com/library/ios/documentation/Cocoa/Reference/ObjCRuntimeRef/Reference/reference.html#//apple_ref/c/func/objc_msgSend)会通过对象的isa指针定位到类，在类(以及super_class指向的父类)的方法列表中寻找可响应此消息的方法实现(IMP)。

##二. 类(Class)

类本身也是一种对象，那么类也有isa指针和其他一些数据，也能响应selectors。当调用类方法(如[[NSObject alloc]])时，实际上就是向类对象发送消息。

既然类也是一种对象，那么它一定也是另外一些类的实例，类对象的类称为元类(metaclass),元类是类对象的描述，就是类是普通实例对象的描述一样。元类中的方法类别实际就是类方法，当向一个类发送消息时，[objc_msgSend](http://developer.apple.com/library/ios/documentation/Cocoa/Reference/ObjCRuntimeRef/Reference/reference.html#//apple_ref/c/func/objc_msgSend)会通过类对象的isa指针定位到元类，在元类(以及super_class指向的父类)的方法列表中寻找可响应此消息的方法实现(IMP)。

元类中描述了类可响应的方法，就像类中描述了实例对象可响应的方法一样。

类对象的结构在不同版本的runtime中有不同的实现，但基本结构都是如下所示，首字段为isa指针指向元类，super_class指向其父类。


    typedef struct objc_class *Class;
    struct objc_class {
        Class isa;
        Class super_class;
        /* followed by runtime specific details... */
    };

##三.元类(metaclass)

那么元类也是对象，应该也为其他类的实例，实际上元类是根元类(root class’s metaclass)的实例,而根元类是其自身的实例，即根元类的isa指针指向自身。

类的super_class指向其父类，而元类的super_class则指向父类的元类。元类的super class链与类的super class链平行，所以类方法的继承与实例方法的继承也是并行的。而根元类(root class’s metaclass)的super_class指向根类(root class),所以和其他实例对象一样，类对象也都是根类(或其子类)的实例。

对象，类，元类之间的关系如图所示:

<img src="/images/2016/04/objc_class_structure.png">

##四.相关函数和方法

 * [object_getClass](http://developer.apple.com/library/ios/documentation/Cocoa/Reference/ObjCRuntimeRef/Reference/reference.html#//apple_ref/c/func/object_getClass)跟随实例的isa指针，返回此实例所属的类，对于实例对象(instance)返回的是类(class),对于类(class)则返回的是元类(metaclass),
 
 * [class](http://developer.apple.com/library/ios/documentation/Cocoa/Reference/Foundation/Protocols/NSObject_Protocol/Reference/NSObject.html#//apple_ref/occ/intfm/NSObject/class)方法对于实例对象(instance)会返回类(class),但对于类(class)则不会返回元类(metaclass),而只会返回类本身，即[@"instance" class]返回的是__NSCFConstantString,而[NSString class]返回的是NSString。
 
 * [class_isMetaClass](http://developer.apple.com/library/ios/documentation/Cocoa/Reference/ObjCRuntimeRef/Reference/reference.html#//apple_ref/c/func/class_isMetaClass)可判断某类是否为元类.
 
 * 使用[objc_allocateClassPair](http://developer.apple.com/library/ios/documentation/Cocoa/Reference/ObjCRuntimeRef/Reference/reference.html#//apple_ref/c/func/objc_allocateClassPair)可在运行时创建新的类与元类对，使用[class_addMethod](http://developer.apple.com/library/ios/documentation/Cocoa/Reference/ObjCRuntimeRef/Reference/reference.html#//apple_ref/c/func/class_addMethod)和[class_addIvar](http://developer.apple.com/library/ios/documentation/Cocoa/Reference/ObjCRuntimeRef/Reference/reference.html#//apple_ref/c/func/class_addIvar)可向类中增加方法和实例变量，最后使用[objc_registerClassPair](http://developer.apple.com/library/ios/documentation/Cocoa/Reference/ObjCRuntimeRef/Reference/reference.html#//apple_ref/c/func/objc_registerClassPair)注册后，就可以使用此类了。

##五.演示例子

首先创建一个NSError的子类

    Class newClass = objc_allocateClassPair([NSError class], "RuntimeErrorSubclass", 0); 
    class_addMethod(newClass, @selector(report), (IMP)ReportFunction, "v@:"); 
    objc_registerClassPair(newClass);

向新创建的类中添加了一个report方法，其IMP为ReportFunction函数,如下

    void ReportFunction(id self, SEL _cmd) { 
        NSLog(@"This object is %p.", self); 
        NSLog(@"Class is %@, and super is %@.", [self class], [self superclass]); 
        Class currentClass = [self class]; 
        for (int i = 1; i < 5; i++) { 
            NSLog(@"Following the isa pointer %d times gives %p", i, currentClass); 
            currentClass = object_getClass(currentClass); 
        } 
        NSLog(@"NSObject's class is %p", [NSObject class]); 
        NSLog(@"NSObject's meta class is %p", object_getClass([NSObject class])); 
    }

在ReportFunction函数中打印了对象自身的地址，对象的类以及父类，以及跟随isa指针向上的类地址。
然后创建一个此类的实例，并调用其report方法

    id instanceOfNewClass = [[newClass alloc] initWithDomain:@"someDomain" code:0 userInfo:nil]; 
    [instanceOfNewClass performSelector:@selector(report)]; 


输出结果为:

    This object is 0x87957c0. 
    Class is RuntimeErrorSubclass, and super is NSError. 
    Following the isa pointer 1 times gives 0x87412c0 
    Following the isa pointer 2 times gives 0x8796020 
    Following the isa pointer 3 times gives 0x2900f60 
    Following the isa pointer 4 times gives 0x2900f60 
    NSObject's class is 0x2900f4c 
    NSObject's meta class is 0x2900f60

查看输出地址可得:

* 对象的地址是0x87957c0
* 类的地址是0x87412c0
* 元类的地址是0x8796020
* 元类的类地址为0x2900f60,即NSObject的元类
* NSObject的元类的类地址仍为0x2900f60，即为自身。
    
## 参考:
* [What is a meta-class in Objective-C?](http://cocoawithlove.com/2010/01/what-is-meta-class-in-objective-c.html)
* [Classes and metaclasses](http://www.sealiesoftware.com/blog/archive/2009/04/14/objc_explain_Classes_and_metaclasses.html)
* [Hacking Block Support Into UIMenuItem](http://petersteinberger.com/blog/2012/hacking-block-support-into-uimenuitem/)
* [Objective-C Runtime Reference](http://developer.apple.com/library/ios/#documentation/Cocoa/Reference/ObjCRuntimeRef/Reference/reference.html)
* [NSObject Protocol Reference](http://developer.apple.com/library/ios/#documentation/Cocoa/Reference/Foundation/Protocols/NSObject_Protocol/Reference/NSObject.html)

