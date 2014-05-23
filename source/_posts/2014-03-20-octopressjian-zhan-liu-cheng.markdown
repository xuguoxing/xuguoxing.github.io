---
layout: post
title: "Octopress建站流程"
date: 2014-03-20 21:20:35 +0800
comments: true
categories:
---

##一.设置Octopress

###检查Ruby环境

确保Ruby环境为1.9.3,若不是，则下载RVM,安装1.9.3版本

```
$ url -L https://get.rvm.io | bash -s stable --ruby
$ rvm install 1.9.3
$ rvm use 1.9.3
$ rvm rubygems latest
```

Clone Octopress

```
$ git clone git://github.com/imathis/octopress.git octopress
$ cd octopress
```

安装依赖(dependencies)

```
$ sudo gem install bundler
$ sudo bundle install
```

安装默认主题

```
rake install
```

##二.部署到Github Pages

###若本机无SSH Key,则生成Github SSH Key并上传

生成SSH key

```
$ ssh-keygen -t rsa -C "your_email@example.com"
$ ssh-add id_rsa
```

添加SSH Key到GitHub

```
$ pbcopy < ~/.ssh/id_rsa.pub #拷贝到clipboard
```

在github的[Account Settings](https://github.com/settings)添加SSH Key

测试环境输出

```
$ ssh -T git@github.com
```

###[创建Github Repository](https://github.com/repositories/new)

  * 创建名字格式为username.github.io,username必须为github的用户名。即xuguoxing.github.io

  * Initialize this repository with a README 项不勾选

###设置 github pages

```
$ rake setup_github_pages
```

该命令会询问repo地址，并在_deploy目录下设置master branch


```
$ rake generate
$ rake deploy
```

生成blog,拷贝生成的文件到_deploy/,添加到git,commit并push到master branch.
  等待大约10分钟

###source上传到Github

```
$ git add .
$ git commit -m 'your message'
$ git push origin source
```

##三.新增Posts

Blog Post需用存储到`source/_posts`目录中，命名需符合Jekyll的命名规范:`YYYY-MM-DD-post-title.markdown`

Octopress提供rake task创建新的post，自动符合命名规范的文件，并包含yaml元数据

```
rake new_post["title"]
```

示例：

```
rake new_post["Zombie Ninjas Attack: A survivor's retrospective"]
```

会生成文件`source/_posts/2011-07-03-zombie-ninjas-attack-a-survivors-retrospective.markdown`;url访问地址为`http://site.com/blog/2011/07/03/zombie-ninjas-attack-a-survivors-retrospective/index.html`

生成的文件头部包含[yaml front matter](http://jekyllrb.com/docs/frontmatter/)告诉Jekyll如何处理Posts和Pages

  	---
	layout: post
	title: "Zombie Ninjas Attack: A survivor's retrospective"
	date: 2011-07-03 5:59
	comments: true
	external-url:
	categories:
	---

可能存在的数据有

* layout:指定使用的layout文件(不带.Layout扩展名),Layout文件必须放置在_layouts目录下
* title:标题
* date: 发布日期
* comments: true或false,是否允许评论
* author: 对于多作者blog,可设置文章作者
* published: true或false,是否发布，如果在写草稿，可设为false
* external-url: 发布[linklog](http://octopress.org/docs/blogging/linklog)样式post,填写指向的外部链接
* categories:可设置单个category或者多个category,格式件下面

		# One category
		categories: Sass

		# Multiple categories example 1
		categories: [CSS3, Sass, Media Queries]

		# Multiple categories example 2
		categories:
		- CSS3
		- Sass
		- Media Queries

* permalink: 代替blog post中的`/year/month/day/title.html`作为最终url
* tags: 文字的tag标注，用法和categories相同

##四.新增Pages

可以在blog source目录下的任意位置增加pages,对应的URL会指向对应路径，如`about.markdown`会生成链接`site.com/about.html`,`about/index.markdown`会生成链接`site.com/about/index.html`

生成新pages的rake task为:

```
rake new_page[super-awesome]
rake new_page[super-awesome/page.html]
```

* 第一种方式生成markdown文件`/source/super-awesome/index.markdown`
* 第二种方式生成html文件`/source/super-awesome/page.html`

生成markdown文件的yaml头样式为:

	---
	layout: page
	title: "Super Awesome"
	date: 2011-07-03 5:59
	comments: true
	sharing: true
	footer: true
	---

和post很相似,但不包括`categories`, sharing和footer是做什么用的；如果不需要显示日期`date`可删除

##五.生成和预览

```
rake generate   # Generates posts and pages into the public directory
rake watch      # Watches source/ and sass/ for changes and regenerates
rake preview    # Watches, and mounts a webserver at http://localhost:4000
```

使用`rake preview`可在本地`http://localhost:4000`预览生成效果。

##六.配置Octopress

配置文件包括

	_config.yml       # Main config (Jekyll's settings)
    Rakefile          # Configs for deployment
    config.rb         # Compass config
    config.ru         # Rack config

一般情况下只需要配置`_config.yml`;`Rakefile`是关于部署的,如果需要使用rsync同步,则需要设置;另外两个文件一般不用。

_config.yml配置包包括三部分

###Main Configs

    url:                # For rewriting urls for RSS, etc
    title:              # Used in the header and title tags
    subtitle:           # A description used in the header
    author:             # Your name, for RSS, Copyright, Metadata
    simple_search:      # Search engine for simple site search
    description:        # A default meta description for your site
    date_format:        # Format dates using Ruby's date strftime syntax
    subscribe_rss:      # Url for your blog's feed, defauts to /atom.xml
    subscribe_email:    # Url to subscribe by email (service required)
    category_feeds:     # Enable per category RSS feeds (defaults to false in 2.1)
    email:              # Email address for the RSS feed if you want it.

###Jekyll & Plugins

关于Jekyll和插件的配置，可参考[configuration docs](https://github.com/mojombo/jekyll/wiki/Configuration)

    root:               # Mapping for relative urls (default: /)
    permalink:          # Permalink structure for blog posts
    source:             # Directory for site source files
    destination:        # Directory for generated site files
    plugins:            # Directory for Jekyll plugins
    code_dir:           # Directory for code snippets (for include_code plugin)
    category_dir:       # Directory for generated blog category pages

    pygments:           # Toggle python pygments syntax highlighting
    paginate:           # Posts per page on the blog index
    pagination_dir:     # Directory base for pagination URLs eg. /blog/page/2/
    recent_posts:       # Number of recent posts to appear in the sidebar

    default_asides:     # Configure what shows up in the sidebar and in what order
    blog_index_asides:  # Optional sidebar config for blog index page
    post_asides:        # Optional sidebar config for post layout
    page_asides:        # Optional sidebar config for page layout

###第三方设置

* Github - 在侧边栏列出 github repositories
* Twitter - 设置twitter用户名(不带@),添加Twitter分享按钮
* Google Plus One - Setup sharing for posts and pages on Google's plus one network.
* Pinboard - Share your recent Pinboard bookmarks in the sidebar.
* Delicious - Share your recent Delicious bookmarks in the sidebar.
* Disqus Comments - Add your disqus short name to enable disqus comments on your site.
* Google Analytics - 添加Google Analytics的tracking id分析页面访问.
* Facebook - 添加Facebook like按钮

Google Analytics的tracking id在Google Analytics页面的 管理->媒体资源->跟踪代码中可以找到

##七.设置自定义域名

在`source`目录下，新建文件`CNAME`,将域名添加到此文件中。

可设置顶级域名，如

```
echo 'iosapp.me' >> source/CNAME
```

或者子域名

```
echo 'www.iosapp.me' >> source/CNAME
```

只能设置一个定制域名,如果需要设置多个定制域名,则需要使用其他服务将域名重定向到github pages的域名

部署发布至master

```
$ rake generate
$ rake deploy
```

使用DNSPod管理域名

新建[DNSPod](https://www.dnspod.cn)账号，添加域名`iosapp.me`,在godaddy账号中将域名的DNS设置DNSPod的DNS， `f1g1ns1.dnspod.net`和`f1g1ns2.dnspod.net`

* DNSPod DNS生效后,在其中添加A或者CNAME记录

 	* 若第一步设置的顶级域名`iosapp.me`,则需要添加一条A记录，将`iosapp.me`指向固定IP地址，IP地址可通过dig命令获得  

 			$ dig xuguoxing.github.io +nostats +nocomments +nocmd
 			xuguoxing.github.io.	898	IN	CNAME			github.map.fastly.net.
			github.map.fastly.net.	8	IN	A	199.27.79.133
	* 若第一步设置的子域名`www.iosapp.me`,则需要添加一条CNAME域名,将`www.iosapp.me`指向`xuguoxing.github.io`

* 待github设置域名和DNS解析都生效后，即可以通过`iosapp.me`或者`www.iosapp.me`访问blog;

可通过dig命令查询解析流程:

```
$ dig iosapp.me +nostats +nocomments +nocmd
```

##八.插件

###[Image Tag](http://octopress.org/docs/plugins/image-tag/)图片

增加图片的语法为

    {% img [position] /path/to/image [width] [height] [title text [alt text]] %}

其中`/path/to/image`可以为网上的图片URL,也可是是本站的图片；如果自己站点的图片，
通常放在source/images目录下，可以按照年和月建立两层目录，如2014/03。`rake generate`命令会自动生成博客，
放在`source/images`目录下的图片也会被复制过去。

图片代码示例

    {% img /images/2014/03/picture.jpg %}
    {% img http://placekitten.com/890/280 %}
    {% img left http://placekitten.com/320/250 Place Kitten #2 %}
    {% img right http://placekitten.com/300/500 150 250 Place Kitten #3 %}
    {% img right http://placekitten.com/300/500 150 250 'Place Kitten #4' 'An image of a very cute kitten' %}
    {% img http://placekitten.com/890/280 %}

{% img http://placekitten.com/890/280 %}

###[Blockquote](http://octopress.org/docs/plugins/blockquote/)引用

{% blockquote %}
Last night I lay in bed looking up at the stars in the sky and I thought to myself, where the heck is the ceiling.
{% endblockquote %}

从Twitter引用

{% blockquote @allanbranch https://twitter.com/allanbranch/status/90766146063712256 %}
Over the past 24 hours I've been reflecting on my life & I've realized only one thing. I need a medieval battle axe.
{% endblockquote %}

从Web引用

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

###代码块

关于代码的引用参见

* [Codeblock](http://octopress.org/docs/plugins/codeblock/)
* [Backtick Code Blocks](http://octopress.org/docs/plugins/backtick-codeblock/)
* [Include Code](http://octopress.org/docs/plugins/include-code/)
* [Gist Tag](http://octopress.org/docs/plugins/gist-tag/)


##参考:

* [Octopress Setup](http://octopress.org/docs/setup/)
* [Deploying to Github Pages](http://octopress.org/docs/deploying/github/)
* [GitHub Generating SSH Keys](https://help.github.com/articles/generating-ssh-keys)
* [Configuring Octopress](http://octopress.org/docs/configuring/)
* [Start blogging with Octopress](http://octopress.org/docs/blogging/)
* [Setting up a custom domain with Pages](https://help.github.com/articles/setting-up-a-custom-domain-with-pages)
* [Godaddy注册商域名修改DNS地址](https://support.dnspod.cn/Kb/showarticle/tsid/42/)
* [Plugins](http://octopress.org/docs/blogging/plugins/)
* [Image Tag](http://octopress.org/docs/plugins/image-tag/)
* [Blockquote](http://octopress.org/docs/plugins/blockquote/)
* [Codeblock](http://octopress.org/docs/plugins/codeblock/)
* [Backtick Code Blocks](http://octopress.org/docs/plugins/backtick-codeblock/)
