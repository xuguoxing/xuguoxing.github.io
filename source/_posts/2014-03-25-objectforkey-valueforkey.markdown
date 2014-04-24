---
layout: post
title: "objectForKey valueForKey"
date: 2014-03-25 10:31:17 +0800
comments: true
published: false
categories:
---

###NSDictionary的objectForKey:与valueForKey:的差异

```
- (id)objectForKey:(id)aKey
```

```
- (id)valueForKey:(NSString *)key
```

{% blockquote %}
If key does not start with “@”, invokes objectForKey:. If key does start with “@”, strips the “@” and invokes [super valueForKey:] with the rest of the key.
{% endblockquote %}

* 如果key不以`@`开头，如@"theKey",则调用objectForKey:
* 如果key以`@`开头，如果@"@theKey",则会调用[super valueForKey:@"theKey"];
这样会根据KVC(NSKeyValueCoding)原则读取NSDictionary的属性，而不是其存储的数据。


###NSMutableDictionary的setObject:forKey:与setValue:forKey:的差异

- (void)setObject:(id)anObject forKey:(id < NSCopying >)aKey

向NSMutableDictionary中增加一项数据

* anObject:会被dictionary强引用，不能为nil,可传NSNull。
* aKey:key会被dictionary拷贝，不能为nil;若key已存在，会使用新值anObject替换。


- (void)setValue:(id)value forKey:(NSString *)key

{% blockquote %}
This method adds value and key to the dictionary using setObject:forKey:, unless value is nil in which case the method instead attempts to remove key using removeObjectForKey:.
{% endblockquote %}

* value不为nil时效果于`setObject:forKey:`相同
* value为nil时效果于 `removeObjectForKey:.`相同


##参考

* [NSDictionary Class Reference](https://developer.apple.com/library/ios/documentation/Cocoa/Reference/Foundation/Classes/NSDictionary_Class/Reference/Reference.html)
* [NSMutableDictionary Class Reference](https://developer.apple.com/library/ios/documentation/Cocoa/Reference/Foundation/Classes/NSMutableDictionary_Class/Reference/Reference.html)
* [Key-Value Coding Programming Guide](https://developer.apple.com/library/ios/documentation/Cocoa/Conceptual/KeyValueCoding/Articles/KeyValueCoding.html)
