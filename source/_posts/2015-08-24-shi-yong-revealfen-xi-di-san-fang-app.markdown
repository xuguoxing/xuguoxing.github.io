---
layout: post
title: "使用Reveal分析第三方App"
date: 2015-08-24 10:28:53 +0800
comments: true
categories: 
---
##一.手机越狱
1. 使用越狱工具，如[盘古](http://www.pangu.io/)将手机越狱
2. 安装Cydia Substrate,OpenSSH,AppSync等工具

##二.下载Reveal

可在[官网](http://revealapp.com/)下载试用版或者直接购买.

##三.拷贝相关内容到越狱手机

保证电脑和手机在同一Wifi下，查看手机IP,检查能够使用ssh进行连接.具体可见手机上`Cybia`应用中的`OpenSSH访问教程`.

     $ ssh root@10.232.136.144
     The authenticity of host '10.232.136.144 (10.232.136.144)' can't be established.
    RSA key fingerprint is 37:3f:9a:32:73:42:f8:49:8e:eb:e8:63:c3:0b:09:d1.
    Are you sure you want to continue connecting (yes/no)? yes
    Warning: Permanently added '10.232.136.144' (RSA) to the list of known hosts.
    root@10.232.136.144's password: 
    xuguoxingmato-iPhone:~ root# 

默认密码为"alpine",进入系统后可用`passwd`命令修改密码。

在本机Reveal应用中找到`Reveal.framework`,`libReveal.dylib`文件，可通过Reveal的`Help->Show Reveal Library in Finder`菜单定位到。

通过scp命令将这两个文件拷贝到越狱手机中,在本机命令行执行以下命令

    $ scp -r /Applications/Reveal.app/Contents/SharedSupport/iOS-Libraries/Reveal.framework root@x.x.x.x:/System/Library/Frameworks
    $ scp /Applications/Reveal.app/Contents/SharedSupport/iOS-Libraries/libReveal.dylib root@x.x.x.x:/Library/MobileSubstrate/DynamicLibraries

在本地创建libReveal.plist文件，将需要分析App的BundleID加入其中，比如需要分享微信和短信应用;

    {
        Filter = {
             Bundles = (
             "com.apple.MobileSMS",
             "com.tencent.xin");
        };
    }

可双击用Xcode打开此文件，检查语法是否正确；

将此文件拷贝到手机中，在本机执行命令

    $ scp libReveal.plist root@x.x.x.x:/Library/MobileSubstrate/DynamicLibraries 

也可以在手机命令上使用编辑工具,如`nano`直接进行编辑。


重启SpringBoard,在手机命令行执行

    $ killall SpringBoard

##四.使用Reveal分析

手机SpringBoard重启后，打开微信应用，在本机上打开Reveal,就可以看到连接并进行分析了。

注:若无法连接，则需要检查wifi的防火墙设置，Reveal使用苹果的`Bonjour`服务进行通信，有可能网络防火墙将此服务屏蔽了。
