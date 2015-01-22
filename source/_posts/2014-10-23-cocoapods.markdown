---
layout: post
title: "CocoaPods"
date: 2014-10-23 10:58:20 +0800
comments: true
categories:
---

CocoaPods是个针对iOS和OS X应用的类库依赖管理工具。在CocoaPods架构中有三种角色: 类库(Pods), 类库描述仓库(Pod Repo),项目。


## 下载cocoapods命令行工具

```
gem install cocoapods //下载最新版
gem install cocoapods —version 0.33.1  //下载指定版本
```

如果ruby官方库下载不下来，可以切换成淘宝的源

```
gem sources --remove https://rubygems.org/
gem sources -a http://ruby.taobao.org/
gem sources -l
```

## Pod Repo库




















##参考

* [CocoaPods Under The Hood](http://www.objc.io/issue-6/cocoapods-under-the-hood.html)
* [Cocoa​Pods](http://nshipster.com/cocoapods/)
