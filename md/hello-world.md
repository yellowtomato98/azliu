---
title: Hello World
subtitle: welcome to my website!
date: '2024-01-07'
time: 30s
toc: false
published: true
---
<hr />



Welcome to my website! 

This website was built with [Svelte](https://svelte.dev/) and [Tailwind](https://tailwindcss.com/docs/hover-focus-and-other-states#focus). I render these blogs from Markdown with [mdsvex](https://mdsvex.pngwn.io/docs/). To support rendering math in $$\LaTeX$$, I use [remark-math](https://www.npmjs.com/package/remark-math) with [rehype-katex](https://www.npmjs.com/package/rehype-katex). 

The workflow for rendering blogs is approximately as follows:
- Write the blog in a markdown file
- Process the markdown using a script, which produces a more nicely formatted markdown file including things like headers, links, and a table of contents
- mdsvex properly compiles the markdown into a Svelte component

My domain is registered with [Namecheap](https://www.namecheap.com/) and the site is hosted on [Github Pages](https://pages.github.com/). I collect analytics with [Google](https://analytics.withgoogle.com/).

I don't post often, but if you would like to, you can subscribe to my posts via [RSS](https://azliu.cc/feed.xml). All code for this website lives in [this repository](https://github.com/azliu0/azliu). 