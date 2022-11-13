# 2009 RSPS website

![](https://i.imgur.com/eNu2Qnt.webp)

Note: This is a haphazard hack of a 2009 website made by [jarryd229](https://github.com/jarryd229) combined with a 2010 website dump.

Want to help? No problem! `index.html` is where it all starts :)

Something seem broken (missing images?) - Get the original, unedited copy. Things could have broken in the past: https://github.com/2009scape/Dumps/tree/master/2010%20Website%20Dump

View the website live here: https://2009scape.github.io/

# Building Jekyll Locally
This website utilizes Jekyll to generate static pages. 

1. Install Jekyll
	* https://jekyllrb.com/docs/installation/
2. Build and serve the site
    * Inside project root run `jekyll serve` or alternatively:
      	- Windows: `serve.bat`
      	- Unix: `./serve.sh`

For faster builds locally (from about 80 seconds to about 6 seconds) add:
<pre>
exclude:
- services/m=poll/*
- services/m=forum/sl=*
- services/m=itemdb_rs/*
</pre>
to `_config.yml`,  and substitute `jekyll serve --incremental`

# News Posts
Located in `services/m=news/archives/`
Use the latest as an example. They are indexed automatically based on their file name.
> <pre>---
> title: Title
> tags: news
> layout: newspost
> collection: Game Updates
> date: 2021-07-26 00:00:00 +0000
> authors: Name
> ---</pre>
there is an optional `promo_image` tag to specify a homepage image for the post.
