---
layout: page
title: Introduction
---

# {{ page.title }}

<!--
<img src="그림주소" style="max-width: 100%; height: auto;"> 
-->
<div align="center">
   <a href="https://vxlang.github.io/">
      <img src="image/vxlang.gif" loop=infinite style="max-width: 100%; height: auto;" />
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


