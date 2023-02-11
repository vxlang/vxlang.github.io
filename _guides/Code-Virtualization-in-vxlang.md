---
layout: page
title: Code Virtualization in vxlang
order: 2
---

# {{ page.title }}

<div align="center">
      <img src="https://vxlang.github.io/image/vxlang-1.png" loop=infinite style="max-width: 100%; height: auto;" />
</div>
<br>
  
This page provides information on code virtualization in vxlang.
  
vxlang interprets the source assembly code as assembly code for the virtual machine, and the assembly language used in this virtual machine is referred to as IL (Intermediate Language). IL is a human-readable mnemonic form that enables code writing in this language. 
  
<div align="center">
      <img src="https://vxlang.github.io/image/il.png" loop=infinite style="max-width: 100%; height: auto;" />
</div>
<br>
  
As a result of the process described above, the converted IL is produced, which is then transformed into byte code that can be interpreted by the virtual machine through the vxlang compilation system.
  
<div align="center">
      <img src="https://vxlang.github.io/image/il-to-byte.png" loop=infinite style="max-width: 100%; height: auto;" />
</div>
<br>
  
Finally, virtual machines are added through linkers in vxlang, and tasks such as context conversion to virtual machines and data relocation are performed. This process enables the virtual machine to be initialized at runtime, allowing the virtual code to function properly.
  
<div align="center">
      <img src="https://vxlang.github.io/image/link.png" loop=infinite style="max-width: 100%; height: auto;" />      
</div>
<br>
  
As demonstrated above, IL can support various machine codes, and linkers can support different operating system file systems. The goal of vxlang is to continuously update and support various file systems and system codes.
  
