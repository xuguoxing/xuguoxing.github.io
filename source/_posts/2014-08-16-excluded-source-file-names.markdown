---
layout: post
title: "EXCLUDED_SOURCE_FILE_NAMES"
date: 2014-08-16 14:03:01 +0800
comments: true
categories:
published: true
---

在Xcode中可以通过名为`EXCLUDED_SOURCE_FILE_NAMES`的用户自定义(User-Defined) build setting来配置在某些Configurations下进行构建
不包含的文件。

比如，在Debug环境下会包含用于测试的桩文件，而在发布版本Release环境中不应该包含。

##设置方法

在Target的`Build Settings`中滑到最下面，可看到`User-Defined`区域。

<img src="/images/2014/08/User_Defined.png">

在`Build Settings`顶部点击`+`号，选择"Add User-Defined Setting"
<img src="/images/2014/08/Add_User_Defined.png">

在"User-Defined"区域添加名为`EXCLUDED_SOURCE_FILE_NAMES`设置项，并在Release配置下，添加需要Exlclude的文件名，支持通配符，以空格分隔。

<img src="/images/2014/08/Add_User_Defined_OK.png">

##参考

* [Re: Conditional include based on configuration](http://lists.apple.com/archives/xcode-users/2009/Jun/msg00153.html)
* [Slim down your iOS app by excluding files from production builds](http://twobitlabs.com/2012/01/excluding-files-from-production-xcode-builds/)
