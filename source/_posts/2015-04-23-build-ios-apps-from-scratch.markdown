---
layout: post
title: "Build iOS Apps From Scratch"
date: 2015-04-23 11:00:21 +0800
comments: true
published: true
categories: 
---

#Design

###Color
1. [BrandColors](http://brandcolors.net/)

	Official color codes for the world's biggest brands.

2. [sketch resources](http://www.sketchappsources.com)


#Service

##Backend

1. [Parse](https://parse.com/)
	
	Focus on creating amazing user experiences and forget complex infrastructure. Instantly add a powerful cloud database, push notification services, and analytics tracking to your app. Choose from over thirteen native SDKs for mobile, desktop, and IoT devices and discover all that Parse has to offer.


2. [LeanCloud](https://leancloud.cn/)

	LeanCloud（aka. AVOS Cloud）是加速应用开发的一站式解决方案，专注于为应用开发者提供一流的工具、平台和服务。
我们提供 数据存储 、实时消息、消息推送 以及 统计分析 服务，全面涵盖应用开发的需求；全面支持 iOS、Android、web 等多个平台。我们努力帮助开发者摆脱繁重的后端开发负担，最大限度地缩短开发周期和加快迭代速度，在激烈的市场竞争中胜出。

##Analytics

1. [Flurry](https://developer.yahoo.com/analytics/)

	Get the most widely used app analytics that’s quick to integrate, easy to use and free. Get a deep understanding of app performance metrics and everything your users are doing. Track your user acquisition campaigns and tie them back to analytics to maximize ROI.


2. [友盟](http://www.umeng.com/)

	友盟是中国最专业、最有数据凝聚力的移动开发者服务平台。友盟以移动应用统计分析为产品起点，发展成为综合性的移动开发者服务平台。推出“一站式“解决方案，为移动开发者提供了从开发到运营的系列服务,包含移动应用统计分析以及细分行业的移动游戏统计分析、社会化分享、消息推送等产品和服务。


3. [Crashlytics](crashlytics.com)



##Project Host

1. [github](https://github.com)

	GitHub is the best place to share code with friends, co-workers, classmates, and complete strangers. Over eight million people use GitHub to build amazing things together.
	

2. [bitbucket](https://bitbucket.org/)

	

#Library

##Network

1. [AFNetworking](https://github.com/AFNetworking/AFNetworking)

	AFNetworking is a delightful networking library for iOS and Mac OS X. It's built on top of the Foundation URL Loading System, extending the powerful high-level networking abstractions built into Cocoa. It has a modular architecture with well-designed, feature-rich APIs that are a joy to use.

	Perhaps the most important feature of all, however, is the amazing community of developers who use and contribute to AFNetworking every day. AFNetworking powers some of the most popular and critically-acclaimed apps on the iPhone, iPad, and Mac.


2. [Alamofire](https://github.com/Alamofire/Alamofire)

	Alamofire is an HTTP networking library written in Swift, from the creator of AFNetworking.

	Features

 	* Chainable Request / Response methods
 	* URL / JSON / plist Parameter Encoding
 	* Upload File / Data / Stream
 	* Download using Request or Resume data
 	* Authentication with NSURLCredential
 	* HTTP Response Validation
 	* Progress Closure & NSProgress
 	* cURL Debug Output
 	* Comprehensive Unit Test Coverage
 	* Complete Documentation
 
 3. [BigBrother](https://github.com/marcelofabri/BigBrother)
 
 	BigBrother is a Swift library made for iOS that automatically watches for any performed request and sets the [network activity indicator](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/Controls.html#//apple_ref/doc/uid/TP40006556-CH15-SW44).
 
##Persistent Storage

1. [MagicalRecord](https://github.com/magicalpanda/MagicalRecord)

	MagicalRecord was inspired by the ease of Ruby on Rails' Active Record fetching. The goals of this code are:

	* Clean up my Core Data related code
	* Allow for clear, simple, one-line fetches
	* Still allow the modification of the NSFetchRequest when request optimizations are needed


2. [FMDB](https://github.com/ccgus/fmdb)

	This is an Objective-C wrapper around SQLite: http://sqlite.org/
	
##Analytics

1. [ARAnalytics](https://github.com/orta/ARAnalytics)

	ARAnalytics is to iOS what [Analytical](https://github.com/jkrall/analytical) is to ruby, or [Analytics.js](http://segmentio.github.com/analytics.js/) is to javascript.

	ARAnalytics is a analytics abstraction library offering a sane API for tracking events and user data. It currently supports on iOS: `TestFlight, Mixpanel, Localytics, Flurry, GoogleAnalytics, KISSmetrics, Crittercism, Crashlytics, Bugsnag, Countly, Helpshift, Tapstream, NewRelic, Amplitude, HockeyApp, ParseAnalytics, HeapAnalytics, Chartbeat, Yandex Mobile Metrica, and Branch`. And for OS X: `KISSmetrics and Mixpanel`. It does this by using CocoaPods subspecs to let you decide which libraries you'd like to use. You are free to also use the official API for any provider too. Also, comes with an amazing DSL to clear up your methods.

	ARAnalytics provides a common API between lots of providers, so it will try to map most of the functionality between providers, but if you're doing complex things, expect to also use your provider's SDK.

##Image Cache

1. [SDWebImage](https://github.com/rs/SDWebImage)

	This library provides a category for UIImageView with support for remote images coming from the web.

	It provides:

	* An UIImageView category adding web image and cache management to the Cocoa Touch framework
	* An asynchronous image downloader
	* An asynchronous memory + disk image caching with automatic cache expiration handling
	* Animated GIF support
	* WebP format support
	* A background image decompression
	* A guarantee that the same URL won't be downloaded several times
	* A guarantee that bogus URLs won't be retried again and again
	* A guarantee that main thread will never be blocked
	* Performances!
	* Use GCD and ARC
	* Arm64 support

2. [Kingfisher](https://github.com/onevcat/Kingfisher?)

	Kingfisher is a lightweight and pure Swift implemented library for downloading and caching image from the web. This project is heavily inspired by the popular SDWebImage. And it provides you a chance to use pure Swift alternation in your next app.

	Features

	* Everything in Kingfisher goes asynchronously, not only downloading, but also caching. That means you will never worry about blocking your UI thread.
	* Multiple-layer cache. Downloaded images will be cached in both memory and disk. So there is no need to download again and this could boost your app dramatically.
	* Cache management. You can set the max duration or size the cache could take. And the cache will also be cleaned automatically to prevent taking too much resource.
	* Modern framework. Kingfisher uses NSURLSession and the latest technology of GCD, which makes it a strong and swift framework. It also provides you easy APIs to use.
	* Cancellable processing task. You can cancel the downloading or image retriving process if it is not needed anymore.
	* Independent components. You can use the downloader or caching system separately. Or even create your own cache based on Kingfisher's code.
	* Options to decompress the image in background before rendering it, which could improve the UI performance.
	* A category over UIImageView for setting image from an URL directly.

3. [FastImageCache](https://github.com/path/FastImageCache)

	Fast Image Cache is an efficient, persistent, and—above all—fast way to store and retrieve images in your iOS application. Part of any good iOS application's user experience is fast, smooth scrolling, and Fast Image Cache helps make this easier.

	A significant burden on performance for graphics-rich applications like Path is image loading. The traditional method of loading individual images from disk is just too slow, especially while scrolling. Fast Image Cache was created specifically to solve this problem.


4. [AsyncImageView](https://github.com/nicklockwood/AsyncImageView)

	AsyncImageView includes both a simple category on UIImageView for loading and displaying images asynchronously on iOS so that they do not lock up the UI, and a UIImageView subclass for more advanced features. AsyncImageView works with URLs so it can be used with either local or remote files.

	Loaded/downloaded images are cached in memory and are automatically cleaned up in the event of a memory warning. The AsyncImageView operates independently of the UIImage cache, but by default any images located in the root of the application bundle will be stored in the UIImage cache instead, avoiding any duplication of cached images.

	The library can also be used to load and cache images independently of a UIImageView as it provides direct access to the underlying loading and caching classes.



##DataParse

1. [KZPropertyMapper](https://github.com/krzysztofzablocki/KZPropertyMapper)

	There are libraries helping with that like Mantle, RESTKit and many more… But I wanted something that's self contained, easy to change / remove and requires minimal amount of code.

	I've created Property Mapper as part of working on [Foldify](http://foldifyapp.com/), a simple self contained solution that allows you to specify mapping between data you receive and data representation you have in your application... with some additional features, like type boxing, validation.

	I don't like passing around JSON so I write parsing on top of native objects like NSDictionary/NSArray. If you get data as JSON just write a simple category that transforms JSON to native objects using NSJSONSerialization.

2. [MJExtensions](https://github.com/CoderMJLee/MJExtension)
	
	The fastest, most convenient and most nonintrusive conversion between JSON and model. Your model class don't need to extend another base class. You don't need to modify any model file. Nonintrusive, convenient.
	Features

	* JSON --> Model、Core Data Model
	* JSONString --> Model、Core Data Model
	* Model、Core Data Model --> JSON
	* JSON Array --> Model Array、Core Data Model Array
	* JSONString --> Model Array、Core Data Model Array
	* Model Array、Core Data Model Array --> JSON Array
	* Coding all properties of model in one line code.

3. [Hpple](https://github.com/topfunky/hpple)

	Hpple: A nice Objective-C wrapper on the XPathQuery library for parsing HTML.
	
	* Easy searching by XPath (CSS selectors are planned)
	* Parses HTML (XML coming soon)
	* Easy access to tag content, name, and attributes.
	
4. [XMLReader](https://github.com/amarcadet/XMLReader)

	Objective-C XML reader based on NSXMLParser
	
	This project comes from a component developed by Troy Brant and published on his website : [http://troybrant.net/blog/2010/09/simple-xml-to-nsdictionary-converter/](http://troybrant.net/blog/2010/09/simple-xml-to-nsdictionary-converter/)

5. [CocoaMarkdown](https://github.com/indragiek/CocoaMarkdown)

	CocoaMarkdown is a cross-platform framework for parsing and rendering Markdown, built on top of the [C reference implementation](https://github.com/jgm/CommonMark) of [CommonMark](http://commonmark.org/).

	This is currently beta-quality code.

	CocoaMarkdown aims to solve two primary problems better than existing libraries:

	* More flexibility. CocoaMarkdown allows you to define custom parsing hooks or even traverse the Markdown AST using the low-level API.
	* Efficient `NSAttributedString` creation for easy rendering on iOS and OS X. Most existing libraries just generate HTML from the Markdown, which is not a convenient representation to work with in native apps.


##DataSync

1. [ensembles](https://github.com/drewmccormack/ensembles)

	Ensembles 2 is now available for purchase at [ensembles.io](http://www.ensembles.io/). It has performance improvements, extra backends (eg CloudKit, Dropbox Sync), and other features. This version of Ensembles continues to be maintained and supported.

	There is a [Google Group](https://groups.google.com/forum/#!forum/ensembles) for discussing best practices with other developers.

	Ensembles extends Apple's Core Data framework to add peer-to-peer synchronization for Mac OS and iOS. Multiple SQLite persistent stores can be coupled together via a file synchronization platform like iCloud or Dropbox. The framework can be readily extended to support any service capable of moving files between devices, including custom servers.

2. [TICoreDataSync](https://github.com/nothirst/TICoreDataSync)

	TICoreDataSync is a collection of classes to enable synchronization via the Cloud (including Dropbox) of Core Data-based applications (including document-based apps) between any number of clients running under Mac OS X or iOS. It's designed to be easy to extend if you need to synchronize via an option that isn't already supported.
	
3. [CloudKitDictionarySyncer](https://github.com/melke/CloudKitDictionarySyncer/)

	CloudKitDictionarySyncer is a utility that you can use in your app to save an NSDictionary to both a local plist file and remotely in the user's CloudKit private database. If CloudKit is not available, because the user is offline, not logged in or whatever , the NSDictionary will be saved to the local plist only. CloudKitDictionarySyncer is written in Swift.

	At app startup, when you load the dictionary, CloudKitDictionarySyncer will return a single dictionary if the plist and iCloud version are identical. If not, a Conflict tuple containing both dictionaries will be returned. Handle the conflict in a way appropriate for your app, for example by merging the data in both dictionaries or by simply choosing the last saved dictionary (last method not recommended). After the conflict is solved, you should save the dictionary immediately. This will resync the local plist dictionary and the iCloud dictionary.	



##Hook

1. [Aspects](https://github.com/steipete/Aspects)

	Delightful, simple library for aspect oriented programming by [@steipete](http://twitter.com/steipete).

	Think of Aspects as method swizzling on steroids. It allows you to add code to existing methods per class or per instance, whilst thinking of the insertion point e.g. before/instead/after. Aspects automatically deals with calling super and is easier to use than regular method swizzling.

	This is stable and used in hundreds of apps since it's part of [PSPDFKit, an iOS PDF framework that ships with apps like Dropbox or Evernote](http://pspdfkit.com/), and now I finally made it open source.

	Adding aspects returns an opaque token of type `AspectToken` which can be used to deregister again. All calls are thread-safe.

	Aspects uses Objective-C message forwarding to hook into messages. This will create some overhead. Don't add aspects to methods that are called a lot. Aspects is meant for view/controller code that is not called 1000 times per second.

	Aspects calls and matches block arguments. Blocks without arguments are supported as well. The first block argument will be of type `id<AspectInfo>`.

##Route

1. [JLRoute](https://github.com/joeldev/JLRoutes)

	JLRoutes is advanced URL parsing with a block-based callback API. It is designed to make it very easy to handle complex URL schemes in your application without having to do any URL or string parsing of any kind.
	
	Features

	* Simple API with minimal impact to existing codebases
	* Parse any number of parameters interleaved throughout the URL
	* Wildcard parameter support
	* Seamlessly parses out query string and fragment parameters and passes them along as part of the parameters dictionary
	* Route prioritization
	* Scheme namespaces to easily segment routes and block handlers for multiple schemes
	* Return NO from a handler block for JLRoutes to look for the next matching route
	* Optional verbose logging
	* Pretty-print the whole routing table
	* No dependencies other than Foundation

##Map

1. [CCHMapClusterController](https://github.com/choefele/CCHMapClusterController)

	High-performance map clustering with MapKit for iOS and OS X. Integrate with 4 lines of code.
	CCHMapClusterController solves the problem of displaying many annotations on an MKMapView and is available under the MIT license.
	
2. [ResizableMKCircleOverlay](https://github.com/OrbJapan/ResizableMKCircleOverlay)

	A resizable map circle overlay.
	
	
3. [CoreLocationUtils](https://github.com/fernandospr/CoreLocationUtils)

	A category with convenient methods for CLLocation, based on [http://www.movable-type.co.uk/scripts/latlong.html](http://www.movable-type.co.uk/scripts/latlong.html)
	
	Features

	* Convenient CLLocation initializers:
		* initialize with latitude and longitude in radians
		* initialize with a pretty string format (e.g. latitude = @"34° 36' 12\" N" longitude = @"35° 12' 24\" W")
	* Obtain coordinates in a pretty format
	* Distance between coordinates using:
		* Haversine formula
		* Spherical Law of cosines formula
		* Pythagoras formula
		* Rhumb line formula
	* Midpoint along a great circle path between coordinates
	* Initial/final bearings to target location from source location
	* Calculate target location with a given distance and bearing from source location
	
4. [CoreLocationUtils](https://github.com/100grams/CoreLocationUtils)

	An Objective-C library with tools and extensions for iOS CoreLocation.

	Features

	* Dispatching CoreLocation updates to multiple listeners.
	* Archive/Unarchive location data (play log file)
	* Calculate Direction and distance between locations and routes.
	* Dead Reckoning

##Photo

1. [MWPhotoBrowser](https://github.com/mwaterfall/MWPhotoBrowser)

	A simple iOS photo browser with optional grid view, captions and selections.
	MWPhotoBrowser can display one or more images by providing either UIImage objects, or URLs to files, web images or library assets. The photo browser handles the downloading and caching of photos from the web seamlessly. Photos can be zoomed and panned, and optional (customisable) captions can be displayed.
	The browser can also be used to allow the user to select one or more photos using either the grid or main image view.

2. [EBPhotoPages](https://github.com/EddyBorja/EBPhotoPages)

	A photo gallery for iOS with a modern feature set. Similar features as the Facebook photo browser.
	
	EBPhotoPages is a photo gallery library for displaying pages of photos and their meta data in a scrollview. Users are able to zoom photos in and out, as well as create, edit or delete comments and tags, share or delete a photo, and report inappropriate photos. All photos and content are loaded asynchronously. User permissions for a photo are controlled through a delegate protocol. No graphic files are required for the gallery as icons are drawn in code.

	The library was designed using a state pattern to control the behavior of the gallery, so that other developers can easily modify or add new states without having to understand too much of the original code.

	Quick Feature list:

	* Photo Tagging: Create/Edit/Delete
	* Photo Commenting: Create/Edit/Delete
	* Photo Sharing:
	* Photo Reporting:
	* Speficy User Permissions per Photo for commenting, tagging, deletion, reporting, etc.
	* Page Based Scrolling
	* Photos give immediate bounce feedback when single tapped, for a juicy interface feel.
	* Toggle Tags On/Off
	* Pinch, Zoom, Pan Photos with gestures.
	* Scrollable captions, variable lengths with auto-dimming background
	* Show/Hide UI elements with a single tap gesture
	* Asynchronous loading of data (through NSOperationQueue)
	* Activity Indicator per Photo.
	* Content Mode AspectFit/Center auto detection (prevent photos smaller than the screen from blowing up)
	* Full landscape/portrait orientation support
	* Resolution independent support (iPad/iPhone)
	* Touch and hold comments to copy or delete
	* Flat UI Design
	* Comments icon shows the number of comments posted (if there are any)
	* Other stuff

3. [MHVideoPhotoGallery](https://github.com/mariohahn/MHVideoPhotoGallery)

	A Photo and Video Gallery designed for iOS 7 and iOS 8
	
4. [DBCamera](https://github.com/danielebogo/DBCamera)

	DBCamera is a simple custom camera with AVFoundation
	
5. [NYTPhotoViewer]	(https://github.com/NYTimes/NYTPhotoViewer)

	NYTPhotoViewer is a slideshow and image viewer that includes double tap to zoom, captions, support for multiple images, interactive flick to dismiss, animated zooming presentation, and more.
	
	NYTPhotoViewer draws feature inspiration from Facebook and Tweetbot's image viewers. If this implementation isn't to your liking, you may want to consider [JTSImageViewController](https://github.com/jaredsinclair/JTSImageViewController) or [IDMPhotoBrowser](https://github.com/ideaismobile/IDMPhotoBrowser).
	
	TODO

	* Animate bounds changes like Tweetbot and Facebook.
	* Publicly expose the data source property.
	* [Carthage](https://github.com/Carthage/Carthage) support.
	* An additional sample project written in Swift (currently in pull request).

6. [JTSImageViewController](https://github.com/jaredsinclair/JTSImageViewController)

	An interactive iOS image viewer that does it all: double tap to zoom, flick to dismiss, et cetera.
	
	JTSImageViewController is like a "light box" for iOS. It's similar to image viewers you may have seen in apps like Twitter, Tweetbot, and others. It presents an image in a full-screen interactive view. Users can pan and zoom, and use Tweetbot-style dynamic gestures to dismiss it with a fun flick.
	
7. [IDMPhotoBrowser](https://github.com/ideaismobile/IDMPhotoBrowser)

	Photo Browser / Viewer inspired by Facebook's and Tweetbot's with ARC support, swipe-to-dismiss, image progress and more
	
	IDMPhotoBrowser is a new implementation based on [MWPhotoBrowser](https://github.com/mwaterfall/MWPhotoBrowser).

	We've added both user experience and technical features inspired by Facebook's and Tweetbot's photo browsers.

	New features:

	* Uses ARC
	* Uses AFNetworking for image loading	
	* Image progress shown
	* Minimalistic Facebook-like interface, swipe up/down to dismiss
	* Ability to add custom actions on the action sheet

	Features

	* Can display one or more images by providing either `UIImage` objects, file paths to images on the device, or URLs to images online
	* Handles the downloading and caching of photos from the web seamlessly
	* Photos can be zoomed and panned, and optional captions can be displayed

##Share

1. [overshare-kit](https://github.com/overshare/overshare-kit)

	Sharing is far too cumbersome to implement on iOS. UIActivityViewController is too limiting, and rolling your own library is too time-consuming. Most devs end up settling for underwhelming sharing options for lack of the time or inclination to make something better.

	OvershareKit makes it trivial to add rich sharing options to your iOS apps. In a word, OvershareKit has everything:

	* Beautiful share sheets with pixel-perfect, full-color icons in a simple layout.
	* Lots of tweakable options, including a gorgeous dark mode.
	* Built-in integration with iOS Twitter and Facebook accounts.
	* Built-in integration with popular third-party services like App.net, Instapaper, and more.
	* Complete multi-account management, including authentication and storing credentials securely in the Keychain.
	* Killer text editing views with as-you-type Twitter syntax highlighting, Riposte-style swipe gesture cursor navigation, and automatic smart quotes.

##Algorithems

1. [EKAlgorithms](https://github.com/EvgenyKarkan/EKAlgorithms)

	EKAlgorithms is a set of computer exercises implemented in Objective-C. Data structures, well known algorithms, CS curiosities, you name it!

	* Arrays and Lists
	* Search Algorithms
	* Sorting Algorithms
	* Selection Algorithms
	* Strings
	* Numeric Algorithms
	* Data Structures
	* Problems
	* Geometry
	* Recursion
	
2. [SwiftStructures](https://github.com/waynewbishop/SwiftStructures)

	This project provides a framework for commonly used data structures and algorithms written in a new iOS development language called Swift. While details of many algorithms exists on Wikipedia, these implementations are often written as pseudocode, or are expressed in C or C++. With Swift now officially released, its general syntax should be familiar enough for most programmers to understand.
	As a developer, you should already be familiar with the basics of programming. Beyond algorithms, this project also aims to provide an alternative for learning the basics of Swift. This includes implementations of many Swift-specific features such as optionals, extensions and generics. Beyond Swift, audiences should be familiar with Singleton and Factory design patterns along with sets, arrays and dictionaries.
	The project features code-level examples for the following items:

	* Linked Lists
	* Binary Search
	* Insertion Sort
	* Bubble Sort
	* Quick Sort
	* Merge Sort
	* Generics
	* Hash Tables
	* Binary Search Trees
	* Tree Balancing (Rotations)
	* Tries
	* Stacks & Queues
	* Graphs
	* Dijkstra's Shortest Path
	* Heaps & Heapsort Operations
	* Depth-First Search
	* Breath-First Search
	

##IAP

1. [RMStore](https://github.com/robotmedia/RMStore#receipt-verification)

	A lightweight iOS library for In-App Purchases.

	RMStore adds `blocks` and `notifications` to StoreKit, plus `receipt verification`, `content downloads` and `transaction persistence`. All in one class without external dependencies. 
	
2. [VerifyStoreReceiptiOS](https://github.com/rmaddy/VerifyStoreReceiptiOS)

	These files are based off of the [roddi/ValidateStoreReceipt](https://github.com/roddi/ValidateStoreReceipt) project.

	For details on iOS receipt validation from Apple, see [Receipt Validation Programming Guide](https://developer.apple.com/library/ios/releasenotes/General/ValidateAppStoreReceipt/Introduction.html) (Developer membership needed).

	Unfortunately this document doesn't tell you how to process this receipt in detail, quote:

		The payload of the PKCS7 container is encoded using ASN.1, as described by ITU-T X.690.
		This validator parses and validates the payload and the PKCS7 container itself.

	Missing from this project:

	* Apple's root certificate. This may be obtained from [http://www.apple.com/certificateauthority/](http://www.apple.com/certificateauthority/)
	* Any measures to make your app cracker proof.

##Debug

1. [FLEX](https://github.com/Flipboard/FLEX)

	FLEX (Flipboard Explorer) is a set of in-app debugging and exploration tools for iOS development. When presented, FLEX shows a toolbar that lives in a window above your application. From this toolbar, you can view and modify nearly every piece of state in your running application.

	* Inspect and modify views in the hierarchy.
	* See the properties and ivars on any object.
	* Dynamically modify many properties and ivars.
	* Dynamically call instance and class methods.
	* Observe detailed network request history with timing, headers, and full responses.
	* View system log messages (e.g. from NSLog).
	* Access any live object via a scan of the heap.
	* View the file system within your app's sandbox.
	* Explore all classes in your app and linked systems frameworks (public and private).
	* Quickly access useful objects such as [UIApplication sharedApplication], the app delegate, the root view controller on the key window, and more.
	* Dynamically view and modify NSUserDefaults values.

	Unlike many other debugging tools, FLEX runs entirely inside your app, so you don't need to be connected to LLDB/Xcode or a different remote debugging server. It works well in the simulator and on physical devices.
	
2. [OHHTTPStubs](https://github.com/AliSoftware/OHHTTPStubs)

	OHHTTPStubs is a library designed to stub your network requests very easily. It can help you:

	* test your apps with fake network data (stubbed from file) and simulate slow networks, to check your application behavior in bad network conditions
	* write Unit Tests that use fake network data from your fixtures.
	
	It works with NSURLConnection, new iOS7/OSX.9's NSURLSession, AFNetworking (both 1.x and 2.x), or any networking framework that use Cocoa's URL Loading System.

3. [Tweaks](https://github.com/facebook/tweaks)

	An easy way to fine-tune, and adjust parameters for iOS apps in development.
	
	The best way to improve an app is to use it every day. Even when ideas can be tested out in advance — for example, with [Origami](http://origami.facebook.com/) — it can still take some time with the app to see how it works in practice.

	Occasionally, it's perfect the first try. Sometimes, the idea doesn't work at all. But often, it just needs a few minor adjustments. That last case is where Tweaks fits in. Tweaks makes those small adjustments easy: with no code changes and no computer, you can try out different options and decide which works best.

	Some of the most useful parameters to adjust are animation timings, velocity thresholds, colors, and physics constants. At Facebook, we also use tweaks to temporarily disable new features during development. That way, the designers and engineers involved can enable it on just their devices, without getting in the way of others testing the app.

	Tweaks was invaluable for building [Paper](http://www.facebook.com/paper). We hope it can be useful for your app too.


##Animation

1. [pop](https://github.com/facebook/pop)

	Pop is an extensible animation engine for iOS and OS X. In addition to basic static animations, it supports spring and decay dynamic animations, making it useful for building realistic, physics-based interactions. The API allows quick integration with existing Objective-C codebases and enables the animation of any property on any object. It's a mature and well-tested framework that drives all the animations and transitions in [Paper](http://www.facebook.com/paper).
	
2. [Shimmer](https://github.com/facebook/Shimmer)

	Shimmer is an easy way to add a shimmering effect to any view in your app. It's useful as an unobtrusive loading indicator.

	Shimmer was originally developed to show loading status in [Paper](http://facebook.com/paper).

3. [EasyAnimation](https://github.com/icanzilb/EasyAnimation/)

	A Swift library to take the power of UIView.animateWithDuration(_:, animations:...) to a whole new level - layers, springs, chain-able animations and mixing view and layer animations together!


##iCloud

1. [icloudaccess](https://github.com/drewmccormack/icloudaccess)

	iCloud Access is a simple class that makes it easier to work with iCloud, hiding details such as file coordination and metadata queries. It is much more like accessing a web service with a Cocoa networking class, which most developers are more used to.

	The class was originally developed as part of the [Ensembles](https://github.com/drewmccormack/ensembles) Core Data Sync framework, and has been extracted for easier integration in projects not using Ensembles.



##Security

1. [Navajo](https://github.com/mattt/Navajo)

	Password Validator & Strength Evaluator
	
	Available Validation Rules

	* Allowed Characters
	* Required Characters (e.g. lowercase, uppercase, decimal, symbol)
	* Non-Dictionary Word
	* Minimum / Maximum Length
	* Predicate Match
	* Regular Expression Match
	* Block Evaluation

2. [validateIt](https://github.com/arpi6/validateIt)

	Validation Library for IOS apps

	Validation for: 
	
	* email address,
	* required text field,
	* minimum length,
	* maximum length,
	* letters and space only.

##KVO

1. [KVOController](https://github.com/facebook/KVOController)

	Key-value observing is a particularly useful technique for communicating between layers in a Model-View-Controller application. KVOController builds on Cocoa's time-tested key-value observing implementation. It offers a simple, modern API, that is also thread safe. Benefits include:

	* Notification using blocks, custom actions, or NSKeyValueObserving callback.
	* No exceptions on observer removal.
	* Implicit observer removal on controller dealloc.
	* Thread-safety with special guards against observer resurrection – [rdar://15985376](http://openradar.appspot.com/radar?id=5305010728468480).
	* For more information on KVO, see [Apple's Introduction to Key-Value Observing](https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html).


##API

1. [YahooFinance](https://github.com/bjornsallarp/YahooFinance)

	iOS API for Yahoo finance. Stock symbol search, stock details and currency conversion. [http://blog.sallarp.com/yahoo-finance-api-for-ios/](http://blog.sallarp.com/yahoo-finance-api-for-ios/)
	
	The YahooFinance framework is an iOS Objective-C framework for Yahoo Finance.

	Features

	* Search for stock symbols from major global stock exchanges list
	* Retrieve stock details such as quotes, volumes etc.
	* Currency conversion for all major world currencies.

2. [DropboxBrowser](https://github.com/danielbierwirth/DropboxBrowser)

	Dropbox Browser provides a simple and effective way to browse, view, and download files using the iOS Dropbox SDK. Follow the simple setup steps and in under ten minutes you'll have a working Dropbox File Browser in your app that lets users browse and download their Dropbox files and folders.

3. [InstagramKit](https://github.com/shyambhat/InstagramKit)

	An extensive Objective C wrapper for the Instagram API.

	This framework is built atop AFNetworking’s blocks-based architecture and additionally parses the JSON response asynchronously so there’s absolutely no parsing on the main thread. It’s neat, fast and works like a charm providing an easy interface to interacting with Instagram’s model objects.

##Font

1. [FontAwesomeKit](https://github.com/PrideChung/FontAwesomeKit)

	Icon font library for iOS. Currently supports Font-Awesome, Foundation icons, Zocial, and ionicons.
	
	Currently FontAwesomeKit supports 4 different icon fonts.

	* [FontAwesome 4.2](http://fortawesome.github.io/Font-Awesome/) Our old friend, contains 479 icons
	* [Foundation icons](http://zurb.com/playground/foundation-icon-fonts-3) Contains 283 icons.
	* [Zocial](http://zocial.smcllns.com/) Contains 99 social icons.
	* [ionicons 2.0.0](http://ionicons.com/) Contains 733 icons, lots of iOS 7 style outlined icons.

##Date

1. [SwiftDate](https://github.com/malcommac/SwiftDate)

	Easy NSDate Management in Swift.
	
	Features
	
	* Math operations with dates (ie. myDate+2.week+1.hour)
 	* Easy compare using <,>,==,<=,>= operators
 	* Easy individual date component set/get
 	* Easy creation with common formats or custom formats
 	* Powerful .toString methods with support for relative dates (ie. "2hours"...)
 	* Many shortcuts to get intervals and common dates (yesterday,tomorrow...)
 	* ... check out documentation below!


##UI

###Container

1. [ECSlidingViewController](https://github.com/ECSlidingViewController/ECSlidingViewController)

	ECSlidingViewController is a view controller container that manages a layered interface. The top layer anchors to the left or right side of the container while revealing the layer underneath it. This is most commonly known as the "Side Menu", "Slide Out", "Hamburger Menu/Drawer/Sidebar", etc...
	
2. [RESideMenu](https://github.com/romaonthego/RESideMenu)

	iOS 7/8 style side menu with parallax effect inspired by Dribbble shots ([first](http://dribbble.com/shots/1116265-Instasave-iPhone-App) and [second](http://dribbble.com/shots/1114754-Social-Feed-iOS7)).

	Since version 4.0 you can add menu view controllers on both left and right sides of your content view controller.

3. [PPRevealSideViewController](https://github.com/ipup/PPRevealSideViewController)

	This is a new controller container, showing views on the side like the Facebook or Path app. It is as easy to use as a navigation controller. Sometimes, you need to push a new controller to show some options, but a small controller would be enough … PPRevealSideViewController is THE controller you need.


###Layout&IB

1. [PureLayout](https://github.com/smileyborg/PureLayout)

	The ultimate API for iOS & OS X Auto Layout — impressively simple, immensely powerful. PureLayout extends UIView/NSView, NSArray, and NSLayoutConstraint with a comprehensive Auto Layout API that is modeled after Apple's own frameworks. PureLayout is an Objective-C library that also works (and looks!) great with Swift using a bridging header.

	Writing Auto Layout code from scratch isn't easy. PureLayout provides a fully capable and developer-friendly interface for Auto Layout. It is designed for clarity and simplicity, and takes inspiration from the AutoLayout UI options available in Interface Builder while delivering far more flexibility. The API is also highly efficient, as it adds only a thin layer of third party code and is engineered for maximum performance.

2. [Masonry](https://github.com/SnapKit/Masonry)

	Masonry is being deprecated into a bugfix only state as more developers will be moving to Swift. Going forward we recommend using [SnapKit](https://github.com/SnapKit/SnapKit) as it supports Swift and provides better type safety with a simpler API.

Masonry is a light-weight layout framework which wraps AutoLayout with a nicer syntax. Masonry has its own layout DSL which provides a chainable way of describing your NSLayoutConstraints which results in layout code that is more concise and readable. Masonry supports iOS and Mac OS X.

3. [SnapKit](https://github.com/SnapKit/SnapKit)

	A Swift Autolayout DSL for iOS & OS X [http://snapkit.io](http://snapkit.io)

4. [Canvas](https://github.com/CanvasPod/Canvas)

	Animate in Xcode without code [http://canvaspod.io](http://canvaspod.io)
	
	Canvas is a project to simplify iOS development for both designers and developers. It had been difficult for designers to get hands on building the product with the lack of objective-c and Xcode experience, and a hard time for developer to use reasonable amount of time and lines of code just to achieve really simple effects.

	With Canvas, creating stunning animations requires zero lines of code, trendy effects like the Parallax headers, Sticky sections, Blurred Backgrounds, will be as simple as few lines of code changes.




###HUD

1. [SVProgressHUD](https://github.com/TransitApp/SVProgressHUD)

	SVProgressHUD is a clean and easy-to-use HUD meant to display the progress of an ongoing task.
	
2. [MBProgressHUD](https://github.com/jdg/MBProgressHUD)

	MBProgressHUD is an iOS drop-in class that displays a translucent HUD with an indicator and/or labels while work is being done in a background thread. The HUD is meant as a replacement for the undocumented, private UIKit UIProgressHUD with some additional features.
	
3. [MRCircularProgressView](https://github.com/martinezdelariva/MRCircularProgressView)

	Custom circular `UIView` that allow set progress similar to AppStore control.
	
	* Custom animation duration.
	* Custom color.
	* Custom progress width.
	
4. [Swift-Prompts](https://github.com/GabrielAlva/Swift-Prompts)

	A Swift library to design custom prompts with a great scope of options to choose from.
	
5. [DACircularProgress](https://github.com/danielamitay/DACircularProgress)

	DACircularProgress is a UIView subclass with circular UIProgressView properties.

	It was originally built to be an imitation of Facebook's photo progress indicator.

###SegmentControl

1. [HMSegmentedControl](https://github.com/HeshamMegid/HMSegmentedControl)

	A drop-in replacement for UISegmentedControl mimicking the style of the segmented control used in Google Currents and various other Google products.

	Features
	
	* Supports both text and images
	* Support horizontal scrolling
	* Supports advanced title styling with text attributes for font, color, kerning, shadow, etc.
	* Supports selection indicator both on top and bottom
	* Supports blocks
	* Works with ARC and iOS >= 7


###Settings

1. [InAppSettingsKit](https://github.com/futuretap/InAppSettingsKit)

	InAppSettingsKit is an open source solution to to easily add in-app settings to your iPhone apps. It uses a hybrid approach by maintaining the Settings.app pane. So the user has the choice where to change the settings. 
	
2. [FXForms](https://github.com/nicklockwood/FXForms)

	FXForms is an Objective-C library for easily creating table-based forms on iOS. It is ideal for settings pages or data-entry tasks.

	Unlike other solutions, FXForms works directly with strongly-typed data models that you supply (instead of dictionaries or complicated dataSource protocols), and infers as much information as possible from your models using introspection, to avoid the need for tedious duplication of type information.
	

###Remind

1. [appirater](https://github.com/arashpayan/appirater)

	Appirater is a class that you can drop into any iPhone app (iOS 4.0 or later) that will help remind your users to review your app on the App Store. 
	
	
2. [iRate](https://github.com/nicklockwood/iRate)

	A handy class that prompts users of your iPhone or Mac App Store app to rate your application after using it for a while. Similar to Appirater, but with a simpler, cleaner interface and automatic support for iOS fast application switching. 
	
	iRate is a library to help you promote your iPhone and Mac App Store apps by prompting users to rate the app after using it for a few days. This approach is one of the best ways to get positive app reviews by targeting only regular users (who presumably like the app or they wouldn't keep using it!).
	
	
3. [Harpy](https://github.com/ArtSabintsev/Harpy)

	Harpy checks a user's currently installed version of your iOS app against the version that is currently available in the App Store. If a new version is available, an alert can be presented to the user informing them of the newer version, and giving them the option to update the application.

	This library is built to work with the [Semantic Versioning](http://semver.org/) system.

4. [Siren](https://github.com/ArtSabintsev/Siren)

	Siren checks a user's currently installed version of your iOS app against the version that is currently available in the App Store.

	If a new version is available, an alert can be presented to the user informing them of the newer version, and giving them the option to update the application. Alternatively, Siren can notify your app programmatically, enabling you to inform the user through alternative means, such as a custom interface.

	* Siren is built to work with the [Semantic Versioning](http://semver.org/) system.
	* Siren is a Swift language port of [Harpy](http://github.com/ArtSabintsev/Harpy), an Objective-C library that achieves the same functionality.
	* Siren is actively maintained by [Arthur Sabintsev](http://github.com/ArtSabintsev) and [Aaron Brager](http://twitter.com/getaaron).

5. [DryDock-iOS](https://github.com/venmo/DryDock-iOS)

	An internal installer app for iOS.
	
	DryDock is an iOS application that we built at Venmo to manage and install all of our internal builds, allow employees to download new experimental apps at any time and to easily share builds designed for a broader audience with their friends.

	DryDock also allows our customer support team to install any version of the App that we've ever released to the store.
	
6. [MultiProductViewer](https://github.com/thoughtbot/MultiProductViewer)

	MultiProductViewer implements a GUI for displaying multiple App Store products in a scrolling list. By tapping on a product, the user is taken to a page where they can see more info about the app and purchase it, using SKStoreProductViewController.
	
	



###PullToRefresh

1. [SVPullToRefresh](https://github.com/samvermette/SVPullToRefresh)

	Give pull-to-refresh & infinite scrolling to any UIScrollView with 1 line of code. [http://samvermette.com/314](http://samvermette.com/314)
	
	These UIScrollView categories makes it super easy to add pull-to-refresh and infinite scrolling fonctionalities to any UIScrollView (or any of its subclass). Instead of relying on delegates and/or subclassing UIViewController, SVPullToRefresh uses the Objective-C runtime to add the following 3 methods to UIScrollView:
	
		- (void)addPullToRefreshWithActionHandler:(void (^)(void))actionHandler;
		- (void)addPullToRefreshWithActionHandler:(void (^)(void))actionHandler position:(SVPullToRefreshPosition)position;
		- (void)addInfiniteScrollingWithActionHandler:(void (^)(void))actionHandler;

2. [MJRefresh](https://github.com/CoderMJLee/MJRefresh)

	* The easiest way to use pull-to-refresh
	* 用法最简单的下拉刷新框架：一行代码搞定
	* 支持 UIScrollView、UITableView、UICollectionView、UIWebView
	
3. [BreakOutToRefresh](https://github.com/dasdom/BreakOutToRefresh)

	Play BreakOut while loading - A playable pull to refresh view using SpriteKit
	

###Lock

1. [PatternLock](https://github.com/freesuraj/PatternLock)

	A simple but fully functional pattern lock sdk for iOS (similar to the android pattern lock)
	
2. [KKGestureLockView](https://github.com/kejinlu/KKGestureLockView)

	KKGestureLockView是一个非常方便使用的Gesture Lock控件，只需要简单的几步便可以在你的app中实现如安卓那样的手势解锁的效果。
	控件的源码在KKGestureLockView/Source目录下,且自带了一个仿支付宝解锁界面的例子（例子的图片资源取自支付宝app解压缩后的资源图片）

3. [PinPad](https://github.com/kosyloa/PinPad)

	View like iOS7 Lock screen

	Dynamic count of input numbers and custom configuration.

4. [SecretSwitch](https://github.com/croath/SecretSwitch)

	cover apps with a blur screenshot to keep secret after double clicking iPhone's home


###UITableViewCellCustom

1. [MSCMoreOptionTableViewCell](https://github.com/scheinem/MSCMoreOptionTableViewCell)

	Drop-in solution to achieve the "More" button in an UITableView's "swipe to delete"-menu (as seen in the Mail.app) by extending Apple's own "swipe to delete"-implementation and not rewriting it, so UITableView's standard behaviour isn't changed.

2. [UITableViewMore](https://gist.github.com/steipete/10541433)

	Using the "More" button. Of course the simple way that Apple uses in Mail/iOS is not public. rdar://16600859
	
3. [tableViewEditActions](https://gist.github.com/scheinem/e36835db07486e9f7e64)

	iOS 8 beta 2: ''tableView:editActionsForRowAtIndexPath:"

4. [UITableViewCell-Swipe-for-Options](https://github.com/TeehanLax/UITableViewCell-Swipe-for-Options)

	A reproduction of the iOS 7 Mail app's swipe-to-reveal options.
	Most compact solution by Ash Furrow, uses a scroll view. Needs a few tweaks in scrollViewWillEndDragging: to better determine if the buttons should be displayed or hidden. Otherwise very simple and effective.

5. [RMSwipeTableViewCell](https://github.com/runmad/RMSwipeTableViewCell)

	RMSwipeTableViewCell is a drop-in UITableViewCell subclass that supports pan gestures as seen in apps such as Clear, Mailbox, Sparrow and many more.

	RMSwipeTableViewCell allows for easy subclassing to customize the cell to match your needs. The class exposes useful class methods and uses delegate callbacks to handle actions in your UITableViewController. RMSwipeTableViewCell is compatible with iOS 5 and higher!

###Blur

1. [FXBlurView](https://github.com/nicklockwood/FXBlurView)

	FXBlurView is a UIView subclass that replicates the iOS 7 realtime background blur effect, but works on iOS 5 and above. It is designed to be as fast and as simple to use as possible. FXBlurView offers two modes of operation: static, where the view is rendered only once when it is added to a superview (though it can be updated by calling setNeedsDisplay or updateAsynchronously:completion:) or dynamic, where it will automatically redraw itself on a background thread as often as possible.
	
2. [ILTranslucentView](https://github.com/ivoleko/ILTranslucentView)

	ILTranslucentView is a little subclass of UIView that provide native iOS 7+ blur (translucent) effect. It can be used on all iOS devices in real time without any performance problems. It also supports smooth UIView animation of color, frame, alpha etc.

3. [TwitterCover](https://github.com/cyndibaby905/TwitterCover)

	TwitterCover is a parallax top view with real time blur effect to any UIScrollView, inspired by Twitter for iOS.

	Completely created using UIKit framework.

	Easy to drop into your project.

	You can add this feature to your own project, TwitterCover is easy-to-use.


###Calendar

1. [objc-TimesSquare](https://github.com/square/objc-TimesSquare)

	TimesSquare is a library to display a calendar in a view in your iPhone or iPad app. We wrote it after searching high and low for a better way and finding none.

2. [CVCalendar](https://github.com/Mozharovsky/CVCalendar)

	A custom visual calendar for iOS 8 written in Swift.
	
3. [NTMonthYearPicker](https://github.com/nairteashop/NTMonthYearPicker)

	NTMonthYearPicker is a simple month / year picker component for use in iOS applications.
	
	I created this component because the standard iOS UIDatePicker component only allows you to specify full dates i.e. day, month and year, but I had a use case in which the user needed to specify only the month and the year, or only the year.

	I found a few other 3rd party iOS month/year picker implementations, but they either did not support many core properties of UIDatePicker such as `minimumDate` and `maximumDate`, or extended UIPickerView instead of UIControl, which meant that they would not emit UIControlEventValueChanged events like a UIDatePicker.

	NTMonthYearPicker extends UIControl, exactly like UIDatePicker does, and re-implements all relevant functionality. I would have liked to simply extend the UIDatePicker class, but I don't know if this is possible. If it is, please let me know so I can rework this component.

###Welcome

1. [DRDynamicSlideShow](https://github.com/Dromaguirre/DRDynamicSlideShow)

	Create beautiful, animated, paging UIScrollViews. Easily animate views as the UIScrollView gets paged. This is perfect for welcome screens and introduction views in iOS apps.
	
2. [Onboard](https://github.com/mamaral/Onboard)

	Onboard provides developers with a quick and easy means to create a beautiful, engaging, and useful onboarding experience with only a few lines of code.
	
	I currently have implementations written in both Objective-C and Swift, although currently due to time constraints the Swift implementation does not have all of the customization features available in the Objective-C version, namely the skipping feature, customizing different fonts for different components on the same page, etc. I will do my best to get the Swift version to match the Objective-C version as soon as possible, and any pull requests are welcomed in the meantime!
	
3. [JazzHands](https://github.com/IFTTT/JazzHands)

	Jazz Hands is a simple keyframe-based animation framework for UIKit. Animations can be controlled via gestures, scroll views, KVO, or ReactiveCocoa.

	Jazz Hands is used extensively in [IFTTT for iPhone and iPad](https://ifttt.com/mobile), most famously in the app intro

4. [GHWalkThrough](https://github.com/GnosisHub/GHWalkThrough)

	This is simple and customizable drop-in solution for showing app walkthroughs or intros.

	* Configurable to walk through in horizontal and vertical directions
	* Support for having custom floating header on all pages
	* Supports fixed background image

5. [EAIntroView](https://github.com/ealeksandrov/EAIntroView)

	This is highly customizable drop-in solution for introduction views. Some features (remember, most features are optional and can be turned off):

	* beautiful demo project to look on some examples
		* customizability is unlimited, one can make complex introView with animations and interactive pages, so do not limit yourself with existing examples
	* for each basic page:
		* background (with cross-dissolve transition between pages)
		* custom iOS7 motion effects (parallax) on background
		* title view (+ Y position)
		* title text (+ font, color and Y position)
		* description text (+ font, color, width and Y position)
		* subviews array (added to page after building default layout)
	* possibility to set your own custom view for page:
		* pageWithCustomView:
		* pageWithCustomViewFromNibNamed:
	* possibility to set block action on page events:
		* pageDidLoad
		* pageDidAppear
		* pageDidDisappear
	* many options to customize parent view:
		* swipe from last page to close
		* switching pages with one simple tap
		* custom background image or color
		* custom page control
		* custom skip button
		* pinned titleView (+ Y position, can be hidden on some pages)
	* delegate protocol to listen:
		* introDidFinish:
		* intro:pageAppeared:withIndex:
	* actions on IntroView:	
		* setPages:
		* showInView:animateDuration:
		* hideWithFadeOutDuration:
		* setCurrentPageIndex:animated:
	* storyboard/IB support

6. [ICETutorial](https://github.com/icepat/ICETutorial)

	This small project is an implementation of the newly tutorial introduced by the Path 3.X app. Very simple and efficient tutorial, composed with N full-screen pictures that you can swipe for switching to the next/previous page.

	Here are the features :

	* Compose your own tutorial with N pictures
	* Fixed incrusted title (can be easily replaced by an UIImageView, or just removed)
	* Scrolling sub-titles for page, with associated descriptions (change the texts, font, color...)
	* Auto-scrolling (enable/disable, loop, setup duration)
	* Cross fade between next/previous background
	* Easy to use block access to button's events.



###QRCode

1. [libqrencode](https://github.com/fukuchi/libqrencode)

	QR Code encoding library [http://fukuchi.org/works/qrencode/](http://fukuchi.org/works/qrencode/)
	
	Libqrencode is a library for encoding data in a QR Code symbol, a 2D symbology that can be scanned by handy terminals such as a mobile phone with CCD. The capacity of QR Code is up to 7000 digits or 4000 characters and has high robustness.

	Libqrencode accepts a string or a list of data chunks then encodes in a QR Code symbol as a bitmap array. While other QR Code applications generate an image file, using libqrencode allows applications to render QR Code symbols from raw bitmap data directly. This library also contains a command-line utility outputs a QR Code symbol as a PNG image.
	
	Libqrencode supports QR Code model 2, described in JIS (Japanese Industrial Standards) X0510:2004 or ISO/IEC 18004. Most of features in the specification are implemented such as:

	* Numeric, alphabet, Japanese kanji (Shift-JIS) or any 8 bit code can be embedded
	* Optimized encoding of a string
	* Structured-append of symbols
	* Micro QR Code (experimental)

	Currently the following features are not supported:

	* ECI and FNC1 mode
	* QR Code model 1 (deprecated)
	
###Chart

1. [RWBarChartView](https://github.com/eternityz/RWBarChartView)

	A scrollable, highly customizable and easy to use charting view for bar graphs. Introduced in [China Air Quality Index](http://air.fresh-ideas.cc/).
	
	Features

	* Bars can be organized into sections. Section titles can be displayed stationarily while scrolling (like plain UITableView).
	* Each bar can have one or more segments with different colors assigned.
	* Each bar can have its description text. Label for description text can be used as scrolling indicator.
	* Appearance tweeks. See RWBarChartView.h for more details.
	* Optional vertical axis beneath the bars.
	* UITableView like data source protocol.
	
2. [PNChart](https://github.com/kevinzhow/PNChart)

	You can also find swift version at here [https://github.com/kevinzhow/PNChart-Swift](https://github.com/kevinzhow/PNChart-Swift)

	A simple and beautiful chart lib with animation used in [Piner](https://itunes.apple.com/us/app/piner/id637706410) and [CoinsMan](https://itunes.apple.com/us/app/coinsman/id772163893) for iOS

3. [PNChart-Swift](https://github.com/kevinzhow/PNChart-Swift)

	A simple and beautiful chart lib used in Piner and CoinsMan for iOS([https://github.com/kevinzhow/PNChart](https://github.com/kevinzhow/PNChart)) Swift Implementation	

4. [BEMSimpleLineGraph](https://github.com/Boris-Em/BEMSimpleLineGraph)

	BEMSimpleLineGraph is a charting library that makes it easy to create beautiful line graphs for iOS. It is easy to set-up and to use in any iOS Project. It's focused on highly customizable and interactive line graphs. Plus, it is lightweight and can be integrated in minutes (maybe even seconds).

	BEMSimpleLineGraph's implementation, data source, and delegate are all modeled off of UITableView and UICollectionView. If you're familiar with using a UITableView, UITableViewController, or UICollectionView, using BEMSimpleLineGraph should be a breeze!
	
5. [XYPieChart](https://github.com/xyfeng/XYPieChart)

	XYPieChart is an simple and easy-to-use pie chart for iOS app. It started from a [Potion](http://www.potiondesign.com/) Project which needs an animated pie graph without interaction. All animation was implemented in the drawRect: method. After played with [BTSPieChart](https://github.com/briancoyner/Core-Animation-Pie-Chart), really like its code structure, it’s clean, has well named functions, structure like a UITableView. XYPieChart rewrote the code, based on CALayers for the animation. Compared to BTSPieChart, XYPieChart is a prettier version, it has a simpler insert/delete slices algorithm, different design of slice selection, more flexible to customize.
	
	Features

	* Customized color for slices (default color supported)
	* animated insert/delete slice(s)
	* slice selection animation
	* text label option of showing percentage or actual value
	* text label auto-hide when slice is too small
	* customizable text label font and relative postion
	* pie opening/closing animation
	* pie starting angle support
	* ARC support
	* interface builder support
	
6. [MagicPie](https://github.com/AlexandrGraschenkov/MagicPie)

	Powerful pie layer for creating your own pie view. PieLayer provide great animation with simple usage.

	The main advantage of that control that there is no worry about displaying of animation. Animation will display correctly even if you will add new elements during execution of another slice deleting animation. That's amazing! And here is no delegates. I like delegates, but in this case I think they are excess.

7. [ios-charts](https://github.com/danielgindi/ios-charts)

	An iOS port of the beautiful MPAndroidChart. - Beautiful charts for iOS apps!
	
	Okay so there's this beautiful library called [MPAndroidChart](https://github.com/PhilJay/MPAndroidChart) by [Philipp Jahoda](https://www.linkedin.com/in/philippjahoda) which has become very popular amongst Android developers, and in the meanwhile there's no decent charting solution for iOS.

	I've chosen to write it in Swift as it can be highly optimized by the compiler, and can be used in both Swift and ObjC project. The demo project is written in ObjC to demonstrate how it works.

	An amazing feature of this library now, both Android and iOS, is the time it saves you when developing for both platforms, as the learning curve is singleton- it happens only once, and the code stays very similar so developers don't have to go around and re-invent the app to produce the same output with a different library. (And that's not even considering the fact that there's not really another good choice out there currently...)

	Core features:

	* 8 different chart types
	* Scaling on both axes (with touch-gesture, axes separately or pinch-zoom)
	* Dragging / Panning (with touch-gesture)
	* Combined-Charts (line-, bar-, scatter-, candle-stick-, bubble-)
	* Dual (separate) Y-Axis
	* Finger drawing (draw values into the chart with touch-gesture)
	* Highlighting values (with customizeable popup-views)
	* Multiple / Separate Axes
	* Save chart to camera-roll / export to PNG/JPEG
	* Predefined color templates
	* Legends (generated automatically, customizeable)
	* Customizeable Axes (both x- and y-axis)
	* Animations (build up animations, on both x- and y-axis)
	* Limit lines (providing additional information, maximums, ...)
	* Fully customizeable (paints, typefaces, legends, colors, background, gestures, dashed lines, ...)

###Keyboard

1. [VENCalculatorInputView](https://github.com/venmo/VENCalculatorInputView)

	VENCalculatorInputView is the calculator keyboard that is used in the [Venmo](https://venmo.com/) iOS app. Available for iOS 6 and beyond. Enjoy.

	You can choose to use just `VENCalculatorInputView` (only the keyboard) and define your own behavior or use `VENCalculatorInputTextField` (keyboard + text field with money calculation built in).
	
2. [Slidden](https://github.com/Brimizer/Slidden)

	Slidden is an open source, customizable, iOS 8 keyboard, written in Swift. iOS 8 brought us the ability to create fully customizable keyboards, but does not provide a strong foundation to start from. Slidden aims to remedy that by providing an easy way to get started making your own iOS keyboards.

	Slidden is in its early stages of life. Code will change dramatically between updates. Please consider contributing your ideas if you think something is missing!
	
3. [AGEmojiKeyboard](https://github.com/ayushgoel/AGEmojiKeyboard)

	An alternate keyboard for iOS that displays all the emojis supported by iOS.

	Additions that need to be done
	
	* stickers
	* custom emojis (different font)


###InputView

1. [SlackTextViewController](https://github.com/slackhq/SlackTextViewController)

	A drop-in UIViewController subclass with a growing text input view and other useful messaging features. Meant to be a replacement for UITableViewController & UICollectionViewController.
	
	This library is used in Slack's iOS app. It was built to fit our needs, but is flexible enough to be reused by others wanting to build great messaging apps for iOS.
	
	Features

	* Core

		* Works out of the box with [UITableView or UICollectionView or UIScrollView](https://github.com/slackhq/SlackTextViewController/tree/swift-example#subclassing) 
		* [Growing Text View](https://github.com/slackhq/SlackTextViewController#growing-text-view), with line count limit support
		* Flexible UI built with Auto Layout
		* Customizable: provides left and right button, and toolbar outlets
		* Tap Gesture for dismissing the keyboard
		* [Panning Gesture](https://github.com/slackhq/SlackTextViewController#panning-gesture) for sliding down the keyboard
		* [External keyboard](https://github.com/slackhq/SlackTextViewController#external-keyboard) commands support
		* Undo/Redo (with keyboard commands and UIMenuController)
		* Text Appending APIs

	* Optional

		* [Autocomplete Mode](https://github.com/slackhq/SlackTextViewController#autocompletion) by registering any prefix key (@, #, /)
		* [Edit Mode](https://github.com/slackhq/SlackTextViewController#edit-mode)
		* [Typing Indicator](https://github.com/slackhq/SlackTextViewController#typing-indicator) display
		* [Shake Gesture](https://github.com/slackhq/SlackTextViewController#shake-gesture) for clearing text view
		* Multimedia Pasting (png, gif, mov, etc.)
		* [Inverted Mode](https://github.com/slackhq/SlackTextViewController#inverted-mode) for displaying cells upside-down (using CATransform) -- a necessary hack for some messaging apps. YES by default, so beware, your entire cells might be flipped!
		* Bouncy Animations

2. [BKMoneyKit](https://github.com/bkook/BKMoneyKit)

	iOS UI controls and formatters for entering money, credit card number and expiry date.
	
	* `BKCardNumberField`	 Subclass of UITextField that supports formatting card number. You can show card logo image by setting `showsCardLogo` to `YES`.
	* `BKCardNumberLabel`	 Subclass of UILabel that displays formatted card number and card brand logo. You can mask card number by configuring `cardNumberFormatter`.
	* `BKCardNumberFormatter`	Subclass of NSFormatter. This class has card number pattern information inside and formats according to patterns. You can customize masking behavior, masking character and group separater character.
	* `BKCardExpiryField`	Subclass of UITextField that supports formatting card number expiry date.
	* `BKCurrencyTextField`	Subclass of UITextField that supports formatting money amount. You can change currency by changing the `currencyCode` property of `numberFormatter`.

3. [ZLMailComposerViewController](https://github.com/zhanleewo/ZLMailComposerViewController)

	A Customized Email Composer for iOS.
	
	
4. [MLPAutoCompleteTextField](https://github.com/EddyBorja/MLPAutoCompleteTextField)

	MLPAutoCompleteTextField is a subclass of UITextField that behaves like a typical UITextField with one notable exception: it manages a drop down table of autocomplete suggestions that update as the user types. Its behavior may remind you of Google's autocomplete search feature. As of version 1.3 there is also support for showing the autocomplete table as an accessory view of the keyboard.
	
5. [TSCurrencyTextField](https://github.com/TomSwift/TSCurrencyTextField)

	TSCurrencyTextField is a UITextField subclass that behaves like an ATM currency-amount entry field: the user can enter decimal digits only and the field formats that input into a currency amount, complete with currency symbol ($), decimal point (.), and group separators (,).

6. [VENTokenField](https://github.com/venmo/VENTokenField)

	`VENTokenField` is the recipients token field that is used in the Venmo compose screen.



###WebView

1. [NJKWebViewProgress](https://github.com/ninjinkun/NJKWebViewProgress)

	NJKWebViewProgress is a progress interface library for UIWebView. Currently, UIWebView doesn't have official progress interface. You can implement progress bar for your in-app browser using this module.
	NJKWebViewProgress doesn't use CocoaTouch's private methods. It's AppStore safe.
	
2. [TOWebViewController](https://github.com/TimOliver/TOWebViewController)

	TOWebViewController is an open-source 	`UIViewController` subclass designed to fulfill one goal: to be able to quickly present a web page to the user, without needing to leave the current app. 
	
	TOWebViewController has been designed from the ground up to be easily integrated into existing projects, and to optionally be backwards compatible with earlier versions of iOS.

	Features

	* Backwards compatible down to iOS 5.
	* Full navigation buttons set, including back, forward, refresh and an optional 'action' button.
	* Detects whether being pushed modally via [UIViewController presentViewController] or being pushed onto a UINavigationController stack and adjusts the UI accordingly.
	* A page load progress bar (using [ninjinkun's amazing algorithm](https://github.com/ninjinkun/NJKWebViewProgress) )
	* Plays a smooth, elegant rotation animation if/when the user rotates the device
	* Icons are procedurally generated by CoreGraphics (ie, no un-necessary iOS 6 icons if you're only targeting iOS 7)
	* (TODO) Implement a confirmation dialog when the web view tries to switch to another app.
	* (TODO) Re-implement the popup that appears when users tap and hold a link for added flexibility.
	* (TODO) An optional text field for which users may manually enter in a URL
	* (TODO) A proper delegate system to allow external classes to interact with this controller.
	* (TODO) A rudimentary bookmark system.


###TableView

1. [STXDynamicTableView](https://github.com/2359media/STXDynamicTableView)

	Rebuilding of Instagram's dynamic table view. [http://engineering.2359media.net/blog/2014/04/16/rebuilding-instagram-feed-table-view/](http://engineering.2359media.net/blog/2014/04/16/rebuilding-instagram-feed-table-view/)
	
	STXDynamicTableView is designed to solve the common use case to display a feed of photos with their corresponding likes, caption, and comments. It's inspired by Instagram feed table view.
	
###ImageView

1. [VVeboImageView](https://github.com/johnil/VVeboImageView)

	A UIImageView to play gif with low memory.
	
2.


###Clock

1. [BEMAnalogClock](https://github.com/Boris-Em/BEMAnalogClock)

	BEMAnalogClock makes it easy to create and customize clocks for iOS.
	
2. 




#Tools


1. [APNS-Pusher](https://github.com/blommegard/APNS-Pusher)

	A simple debug application for Apple Push Notification Service (APNS).
	
	Features

	* Send push notifications to APNS (Apple Push Notification Service) very easily (no configuration needed at all)
	* Grabs the certificate right from your keychain
	* Get the device token automatically via Bonjour; forget about manually retrieving the device token through logging or similar techniques. Useful when not in sandbox mode
	* Support for error response codes
	* Detects Development/Production environment automatically
	* Custom JSON payloads
	* Identity export to PEM format (⌘ + E)
	

2. [GCDWebServer](https://github.com/swisspol/GCDWebServer)

	GCDWebServer is a modern and lightweight GCD based HTTP 1.1 server designed to be embedded in OS X & iOS apps. It was written from scratch with the following goals in mind:

	* Elegant and easy to use architecture with only 4 core classes: server, connection, request and response (see "Understanding GCDWebServer's Architecture" below)
	* Well designed API with fully documented headers for easy integration and customization
	* Entirely built with an event-driven design using Grand Central Dispatch for best performance and concurrency
	* No dependencies on third-party source code
	* Available under a friendly New BSD License

	Extra built-in features:

	* Allow implementation of fully asynchronous handlers of incoming HTTP requests
	* Minimize memory usage with disk streaming of large HTTP request or response bodies
	* Parser for web forms submitted using "application/x-www-form-urlencoded" or "multipart/form-data" encodings (including file uploads)
	* JSON parsing and serialization for request and response HTTP bodies
	* Chunked transfer encoding for request and response HTTP bodies
	* HTTP compression with gzip for request and response HTTP bodies
	* HTTP range support for requests of local files
	* Basic and Digest Access authentications for password protection
	* Automatically handle transitions between foreground, background and suspended modes in iOS apps
	* Full support for both IPv4 and IPv6

	Included extensions:

	* GCDWebUploader: subclass of GCDWebServer that implements an interface for uploading and downloading files using a web browser
	* GCDWebDAVServer: subclass of GCDWebServer that implements a class 1 WebDAV server (with partial class 2 support for OS X Finder)

	What's not supported (but not really required from an embedded HTTP server):

	* Keep-alive connections
	* HTTPS

3. [crafter](https://github.com/krzysztofzablocki/crafter)

	How do you setup your Cocoa projects? Do you always set same warnings, clone configurations and do bunch of other stuff? Or maybe you work in a big company and you are missing some standardised setup?

	Programmers tend to automatise boring and repetitive tasks, yet I often see people spending time and time again configuring their Xcode Projects, even thought they always set it up same way.

	We all know that Xcode templating system is far from perfect, beside we often use different templates, but same level of warnings, scripts etc.

	What if you could define your project setup once (even with optional stuff) then just apply that to all your projects?
	
	That's why I've created crafter, a ruby gem that you can install, setup your configuration once and enjoy hours of time saved.
	
4. [fastlane](https://fastlane.tools)

	fastlane lets you define and run your deployment pipelines for different environments. It helps you unify your app’s release process and automate the whole process. fastlane connects all fastlane tools and third party tools, like CocoaPods and xctool.
	
	Fastlane can do a lot for you to automate tedious and time-consuming parts of your job.

	* Connect all tools, part of the `fastlane` toolchain to work seamlessly together.
	* Define different deployment lanes for App Store deployment, beta builds or testing.
	* Deploy from any computer.
	* [Jenkins Integration](https://github.com/KrauseFx/fastlane/blob/master/docs/Jenkins.md): Show the output directly in the Jenkins test results.
	* Write your [own actions](https://github.com/KrauseFx/fastlane/blob/master/docs#extensions) (extensions) to extend the functionality of fastlane.
	* Store data like the `Bundle Identifier` or your `Apple ID` once and use it across all tools.
	* Never remember any difficult commands, just `fastlane`.
	* Easy setup, which helps you getting up and running very fast.
	* [Shared context](https://github.com/KrauseFx/fastlane/blob/master/docs/Advanced.md#lane-context), which is used to let the different deployment steps communicate with each other.
	* Store everything in git. Never lookup the used build commands in the Jenkins configs.
	* Saves you hours of preparing app submission, uploading screenshots and deploying the app for each update.
	* Very flexible configuration using a fully customizable `Fastfile`.
	* Once up and running, you have a fully working Continuous Deployment process. Just trigger `fastlane` and you're good to go.
	* Over 30 built-in integrations available.
	
5. [Rounded Corners](http://www.quickpicturetools.com/en/rounded_corners/)
	
	 在线生成圆角图片
	 
6. [ImageOptim-CLI](https://github.com/JamieMason/ImageOptim-CLI)

	Automates [ImageOptim](http://imageoptim.com/), [ImageAlpha](http://pngmini.com/), and [JPEGmini for Mac](http://jpegmini.com/mac) to make batch optimisation of images part of your automated build process.
	
	While other image optimization tools are available from the command line, ImageOptim-CLI exists because the current benchmarks suggest that [ImageOptim](http://imageoptim.com/), [ImageAlpha](http://pngmini.com/) and [JPEGmini](http://jpegmini.com/mac) currently outperform those alternatives over lossless and lossy optimizations.
	
7. [icoicon](http://submit.icoicon.com)

	通过 iOS App 的 iTunes url 获得全尺寸的 App icon
	
8. [rollout.io](https://rollout.io)

	React to your production issues in real time. Access your app's functions and patch them using pre-defined solutions with Rollout.io's SDK.
	
	Users can receive in-app alert messages on features that are currently inactive. Keeping them in the loop helps avoid bad reviews.

	Stop basing your reports on what you knew 2 weeks ago. Add or disable events on the fly (flux capacitor included). No more waiting for a release cycle just send a new event.

	A ground-breaking approach for root cause analysis. Add logs to your app in production, scan your stack trace for its' arguments when the crash happens and add breakpoints to a running session.
	
9. [CocoaPods](http://cocoapods.org/)

10. [Carthage](https://github.com/Carthage/Carthage)

	Carthage is intended to be the simplest way to add frameworks to your Cocoa application.

	The basic workflow looks something like this:

	* Create a Cartfile that lists the frameworks you’d like to use in your project.
	* Run Carthage, which fetches and builds each framework you’ve listed.
	* Drag the built .framework binaries into your application’s Xcode project.
	
	Carthage builds your dependencies and provides you with binary frameworks, but you retain full control over your project structure and setup. Carthage does not automatically modify your project files or your build settings.
	
11. [SimPholders](http://simpholders.com/)

	 Features 
	 
	* Access all application folders from status item menu
	* Quickly reset app storage by deleting files in Library and Documents (⌃ + Click)
	* Detailed information of file size and number of items in app bundle (⇧)
	* Launch app directly in iPhone Simulator
	
12. [nomad-cli](http://nomad-cli.com/)

	World-Class Command Line Utilities For iOS Development.
	
	* [CUPERTINO](https://github.com/nomad/Cupertino)
	
		Automate administrative tasks that you would normally have to do through the Apple Dev Center website. Life's too short to manage device identifiers by hand!
		$ ios devices:list
		
	* [HOUSTON](https://github.com/nomad/Houston)
	
		Send push notifications from the command line. Simply provide your credentials, construct your message, and 3...2...1... blastoff.
		
		$ apn push "<token>" -c /path/to/cert.pem -m "Hello!"
		
	* [DUBAI](https://github.com/nomad/Dubai)
	
		Generate Passbook .pkpass files with ease. Rapidly iterate on the design and content of your passes, or generate one-offs on the fly.

		$ pk generate Example.pass -T boarding-pass
		
	* [VENICE](https://github.com/nomad/Venice)
	
		Secure your In-App-Purchases by verifying App Store purchase receipts, and retrieving the information associated with receipt data.
		
		$ iap verify /path/to/receipt
		
	* [SHENZHEN](https://github.com/nomad/Shenzhen)
	
		Create development builds and then distribute their .ipa files over TestFlight, HockeyApp, Amazon S3, or FTP. Get new builds out to testers and enterprises in seconds.
		
		$ ipa build && ipa distribute
	
13. [sketchtoappstore](http://sketchtoappstore.com/)

	Generate App Store images for all iPhone sizes from Sketch



	
#Marketing

1. [SensorTower](https://sensortower.com)	










