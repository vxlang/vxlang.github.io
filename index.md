---
layout: page
title: Introduction
---

# {{ page.title }}

<div align="center">
   <a href="https://vxlang.github.io/">
      <img src="image/vxlang.gif" loop=infinite width="800" height="600" />
   </a>
</div>
<br>
  
**Welcome to the vxlang page.**
  
**vxlang** is a anti-tamper project that supports code virtualization, obfuscation, and tampering detection.   
The default version of vxlang is free and will support a service that adds virtual-cores and detections upon user request.  
  
The free version of vxlang virtualization features and options include:
```
--opt-entry    : Virtualize entry point.
--opt-call     : Virtualize function calls.
--opt-ref-call : Virtualize reference calls.
--opt-ref-ptr  : Virtualize the reference pointers.
--level        : Adjust the obfuscation level.
--opt-pack     : Add packing and protection codes.
```
  
Detection features and options are as follows:
```
--opt-debug  : Detect process debugging. 
--opt-pause  : Detect process pause. 
--opt-patch  : Detect process memory patch.
--opt-handle : Detect read process.
```


[author]: {{site.baseurl}}/guides/Authoring-Documentation/#/guides/ "Authoring documentation"
[bundler]: http://bundler.io/ "Manage your Ruby application's gem dependencies"
[customize]: {{site.baseurl}}/guides/Customizing/#/guides/ "Customizing the theme"
[pages-versions]: https://pages.github.com/versions/ "version dependencies for GitHub pages"
[programming-pages-gem]: https://rubygems.org/gems/programming-pages "programming pages gem on rubygems.org"
[publish]: {{site.baseurl}}/guides/Publishing-to-GitHub-Pages/#/guides/ "Publishing to GitHub Pages"
[rake-tasks]: {{site.baseurl}}/examples/Rake-tasks/#/examples/ "Rake tasks"
[releases]: https://github.com/pixeldroid/programming-pages/releases "Packaged releases of the Programming Pages template"
[remote-theme]: http://talk.jekyllrb.com/t/remote-themes-on-github-pages/1214 "announcing remote themes on github pages"
[remote-theme-gem]: https://rubygems.org/gems/jekyll-remote-theme "Jekyll plugin for building Jekyll sites with any GitHub-hosted theme"
