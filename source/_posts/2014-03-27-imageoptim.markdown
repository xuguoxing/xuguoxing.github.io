---
layout: post
title: "ImageOptim"
date: 2014-03-27 09:40:59 +0800
comments: true
published: true
categories:
---

##[ImageOptim](http://imageoptim.com/)

ImageOptim通过寻找最好的压缩参数和移除不必要的`comments`和`color profiles`来减少图片大小，提高加载速度。

ImageOptim可以处理PNG,JPEG和GIF动画。

ImageOptim无缝集成以下优化工具:

* [PNGOUT](http://www.advsys.net/ken/util/pngout.htm)
* [Zopfli](http://googledevelopers.blogspot.co.uk/2013/02/compress-data-more-densely-with-zopfli.html)
* [Pngcrush](http://pmt.sourceforge.net/pngcrush/)
* [AdvPNG](http://advancemame.sourceforge.net/doc-advpng.html)
* [OptiPNG](http://optipng.sourceforge.net/)
* [JpegOptim](http://www.kokkonen.net/tjko/projects.html)
* jpegrescan
* jpegtran
* [Gifsicle](http://www.lcdf.org/gifsicle/)

ImageOptim代码是开源的，其[源代码](https://github.com/pornel/ImageOptim)在GitHub上。

[PNG that works](http://calendar.perfplanet.com/2010/png-that-works/)文章中解释了为什么ImageOptim移除gamma信息，和怎么在
保留透明度的情况下获取更小的png图片。

## Xcode内置的图片优化 [pngcrush](http://pmt.sourceforge.net/pngcrush/index.html)

Xcode默认会将所有的PNG图片转换成一个非标准的iOS特定的PNG格式[CgBI file format](http://iphonedevwiki.net/index.php/CgBI_file_format)。

这种格式使用`premultiplied BGRA`代替了`RGBA`颜色空间，会在`loading`阶段节省一点点转换时间，但完全不影响
图片渲染(Rendering)速度。

Xcode的这种转换有时会使图片增大，会抵消`ImageOptim`的优化。

可以在`Build Settings`中将`Compress PNG Files`设为`NO`来禁止这种转换。

Apple的PNG变体，在iOS外无法使用，也无法使用`Preview`工具查看，可以使用`pngcrush`工具进行逆向转换成正常的png图片。

`pngcrush`在Xcode的安装目录中存在，路径类似为`/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/usr/bin/pngcrush`

```
$ /Applications/Xcode.app/Contents/Developer\/Platforms/iPhoneOS.platform/Developer/usr/bin/pngcrush \-revert-iphone-optimizations -q Local.png Local-standard.png
```

可将Local.png 恢复成正常的Local-standard.png

##[Image Alpha](http://pngmini.com/)

ImageAlpha通过[有损压缩](http://pngmini.com/lossypng.html)和转换为更有效率的`PNG8+alpha`格式，可以有效的减小24-bit
PNG文件(包括alpha透明度)的大小。其生成的图片兼容iOS,所有的浏览器设置IE6。

ImageAlpha通过使用最新的[pngquant](http://pngquant.org/),[pngnq-s9](http://sourceforge.net/projects/pngnqs9/)和`alpha-channel-aware`的[posterizer](https://github.com/pornel/mediancut-posterizer)
能达到比Adobe Fireworks中类似功能更好的图片质量。

ImageAlpha基于[pngquant](http://pngquant.org/),在`ImageAlpha.app/Contents/Resources`目录下会有`pngquant`执行文件，可以用于批量处理。[ImageOptim-CLI](http://jamiemason.github.io/ImageOptim-CLI/)也会使用此文件。

ImageAlpha是开源的，其代码是python的。[source code](https://github.com/pornel/ImageAlpha)在github上。

##[JPEGmini for Mac](http://jpegmini.com/mac)

JPEGmini Mac版本可以对JPEG图片最高进行5倍的压缩，并保持原始的质量和JPEG格式。

JPEGmini是收费软件,在appstore有一个免费版本[JPEGmini Lite下载](http://itunes.apple.com/us/app/jpegmini-lite/id525742250?mt=12)，免费版本每天只能压缩20张图片。


##[ImageOptim-CLI](https://github.com/JamieMason/ImageOptim-CLI)

ImageOptim-CLI命令行工具使用[ImageOptim](http://imageoptim.com/),[ImageAlpha](http://pngmini.com/),[JPEGmini for Mac](http://jpegmini.com/mac)
对图片进行批量优化。

从目前的[benchmarks](http://jamiemason.github.io/ImageOptim-CLI/)可看出ImageOptim,ImageAlpha和JPEGmini的优化效果比其他替代品要好。

下载最新的zip包，解压并将ImageOptim-CLI的路径添加到$PATH中。

```
$ curl --output imageoptim-cli.zip https://codeload.github.com/JamieMason/ImageOptim-CLI/zip/1.7.11
$ unzip imageoptim-cli.zip
$ export PATH=$PATH:imageoptim-cli/bin
```
使用方法

```
  Usage: imageOptim [options]

  Options:

  -d, --directory     directory of images to process
  -a, --image-alpha   pre-process PNGs with ImageAlpha.app *
  -j, --jpeg-mini     pre-process JPGs with JPEGmini.app **
  -q, --quit          quit all apps when complete
  -h, --help          display this usage information
  -e, --examples      display some example commands and uses
  -v, --version       display the version number

*  http://pngmini.com
** https://itunes.apple.com/us/app/jpegmini/id498944723
```

* `-d`指定要优化的图片文件目录;
* `-a`,`-j`指定预先使用`ImageAlpha`优化PNG图片和使用`JPEGmini`优化JPEG图片，因为JPEGmini为收费的，如果没有
安装，不指定`-j`即可;

一些示例命令

```
imageOptim --directory ~/Sites/Awesome # [options]
find ~/Sites/Awesome -name '*.jpg' | imageOptim # [options]
imageOptim --jpeg-mini --image-alpha --quit --directory path/to/images
imageOptim -j -a -q -d path/to/images
```
