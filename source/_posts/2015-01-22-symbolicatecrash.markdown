---
layout: post
title: "symbolicatecrash"
date: 2015-01-22 10:47:18 +0800
comments: true
published: true
categories:
---

`symbolicatecrash`是Xcode自带的分析工具，使用crash log文件和.dSYM文件划将crash log中的地址替换为代码位置。

##查找`symbolicatecrash`

查找Xcode安装路径

	$ xcode-select -p
	/Applications/Xcode.app/Contents/Developer

搜索`symbolicatecrash`

	$ find /Applications/Xcode.app -name "symbolicatecrash"
	/Applications/Xcode.app/Contents/SharedFrameworks/DTDeviceKitBase.framework/Versions/A/Resources/symbolicatecrash

##解析crash log

将symbolicatecrash、crash log、.dSYM文件拷贝到同一目录，命令行执行

	./Symbolicatecrash aa.crash bb.dSYM > cc.log

将解析后的crash log输出到cc.log文件中

注:若有提示"Error: "DEVELOPER_DIR" is not defined",则设置

	$ export DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer

##检查.app文件、.dSYM文件和crash log是否对应的方法

	$ dwarfdump --uuid MyApp.app/MyApp
	UUID: CC67C4BF-16E7-3512-8E03-10FCFEB5AE5A (armv7) MyApp.app/MyApp
	$ dwarfdump --uuid MyApp.app.dSYM/
	UUID: CC67C4BF-16E7-3512-8E03-10FCFEB5AE5A (armv7) MyApp.app.dSYM/Contents/Resources/DWARF/MyApp

检查上述两个UUID与crash log中的"slice_uuid"字段是否一致。

##参考
* [iphone崩溃日志分析工具symbolicatecrash用法](http://www.cnblogs.com/ydhliphonedev/archive/2012/12/07/2806866.html)
* [iOS系统Crash文件分析方法](http://ios-iphone.diandian.com/post/2012-05-18/19440182)
