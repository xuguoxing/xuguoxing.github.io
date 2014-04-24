---
layout: post
title: "Attributed String"
date: 2014-04-01 17:46:27 +0800
comments: true
published: false
categories:
---

##NSAttributedString

`NSAttributedString`对象中包含字符串、与字符串中单个字符或子串关联的属性(字体、字距等)。

属性名:
其实可以赋值任何的属性，具体属性的解析则由应用程序自己负责了。

CoreText框架的属性:

标准的属性:

NSString *const NSFontAttributeName;

value: `UIFont`对象

NSString *const NSParagraphStyleAttributeName;

value:`NSParagraphStyle`对象，包括多个属性,包装了段落(paragraph) 或者标尺(ruler)属性。


   alignment： `NSTextAlignment` 对齐方式:

       NSTextAlignmentLeft      = 0,  左对齐
       NSTextAlignmentCenter    = 1,  中间对齐
       NSTextAlignmentRight     = 2,  右对齐
       NSTextAlignmentJustified = 3,  //不懂？ 两端对齐
       NSTextAlignmentNatural   = 4,  //不懂？


   firstLineHeadIndent  property  首行缩进


   headIndent  property

   段落缩进（非首行）



   tailIndent  property

   正值：距左边界的距离
   0、负值：


   lineHeightMultiple  property

   行距倍数

   maximumLineHeight  property
   minimumLineHeight  property
   lineSpacing  property

   行边界

   paragraphSpacing  property
   paragraphSpacingBefore  property
Accessing Tab Information
   tabStops  property
   defaultTabInterval  property
Getting Line Breaking Information
   lineBreakMode  property
   hyphenationFactor  property
Writing Direction
+ defaultWritingDirectionForLanguage:
   baseWritingDirection  property

UIKit框架

NSString *const NSForegroundColorAttributeName;
NSString *const NSBackgroundColorAttributeName;
NSString *const NSLigatureAttributeName;
NSString *const NSKernAttributeName;
NSString *const NSStrikethroughStyleAttributeName;
NSString *const NSUnderlineStyleAttributeName;
NSString *const NSStrokeColorAttributeName;
NSString *const NSStrokeWidthAttributeName;
NSString *const NSShadowAttributeName;
NSString *const NSTextEffectAttributeName;
NSString *const NSAttachmentAttributeName;
NSString *const NSLinkAttributeName;
NSString *const NSBaselineOffsetAttributeName;
NSString *const NSUnderlineColorAttributeName;
NSString *const NSStrikethroughColorAttributeName;
NSString *const NSObliquenessAttributeName;
NSString *const NSExpansionAttributeName;
NSString *const NSWritingDirectionAttributeName;
NSString *const NSVerticalGlyphFormAttributeName;

CTParagraphStyle

CoreText框架的

const CFStringRef kCTCharacterShapeAttributeName;
const CFStringRef kCTFontAttributeName;
const CFStringRef kCTKernAttributeName;
const CFStringRef kCTLigatureAttributeName;
const CFStringRef kCTForegroundColorAttributeName;
const CFStringRef kCTForegroundColorFromContextAttributeName;
const CFStringRef kCTParagraphStyleAttributeName;
const CFStringRef kCTStrokeWidthAttributeName;
const CFStringRef kCTStrokeColorAttributeName;
const CFStringRef kCTSuperscriptAttributeName;
const CFStringRef kCTUnderlineColorAttributeName;
const CFStringRef kCTUnderlineStyleAttributeName;
const CFStringRef kCTVerticalFormsAttributeName;
const CFStringRef kCTGlyphInfoAttributeName;
const CFStringRef kCTRunDelegateAttributeName

UILabel

@property(nonatomic) UIBaselineAdjustment baselineAdjustment

基线对齐

typedef enum {
   UIBaselineAdjustmentAlignBaselines,
   UIBaselineAdjustmentAlignCenters,
   UIBaselineAdjustmentNone,
} UIBaselineAdjustment;

adjustsFontSizeToFitWidth property is set to YES ,并且
numberOfLines property is set to 1的时候有效.

默认基底对齐 UIBaselineAdjustmentAlignBaselines

Core Text String Attributes Reference
https://developer.apple.com/library/ios/documentation/Carbon/Reference/CoreText_StringAttributes_Ref/Reference/reference.html

Core Text
Text Kit


##参考

为变动的文字内容做准备http://dclick.fourdesire.com/2013/08/12/visual-design-for-content
iOS 段落文字排版的属性与细节http://dclick.fourdesire.com/2013/08/26/advanced-ios-text-typesetting

字符串渲染 http://objccn.io/issue-9-5/
String Rendering http://www.objc.io/issue-9/string-rendering.html


* [NSAttributedString Class Reference](https://developer.apple.com/library/ios/documentation/Cocoa/Reference/Foundation/Classes/NSAttributedString_Class/Reference/Reference.html)
* [NSAttributedString UIKit Additions Reference](https://developer.apple.com/library/ios/documentation/UIKit/Reference/NSAttributedString_UIKit_Additions/Reference/Reference.html)
* [NSMutableAttributedString Class Reference](https://developer.apple.com/library/ios/documentation/Cocoa/Reference/Foundation/Classes/NSMutableAttributedString_Class/Reference/Reference.html)
* [Attributed String Programming Guide](https://developer.apple.com/library/ios/documentation/Cocoa/Conceptual/AttributedStrings/AttributedStrings.html)
* [NSParagraphStyle Class Reference](https://developer.apple.com/library/ios/documentation/Cocoa/Reference/ApplicationKit/Classes/NSParagraphStyle_Class/Reference/Reference.html)
