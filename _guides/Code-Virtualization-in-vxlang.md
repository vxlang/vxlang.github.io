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

This page describes code virtualization in **vxlang**.   
  
vxlang interprets the source assembly code as assembly code for the virtual machine. Let me describe the assembly language used in this virtual machine as **IL**. This IL is a human-readable mnemonic form that allows code writing through this language. 

<div align="center">
      <img src="https://vxlang.github.io/image/il.png" loop=infinite style="max-width: 100%; height: auto;" />
</div>
<br>

As a result of the above process, the converted IL is output, which is converted to byte code that can be interpreted by the virtual machine through the compilation system of vxlang. 

<div align="center">
      <img src="https://vxlang.github.io/image/il-to-byte.png" loop=infinite style="max-width: 100%; height: auto;" />
</div>
<br>
  
Finally, virtual machines are added through linkers in vxlang, and tasks such as contextual conversion to virtual machines and data relocation are performed. This process allows the virtual machine to be initialized at runtime and the virtual code to function. 

<div align="center">
      <img src="https://vxlang.github.io/image/link.png" loop=infinite style="max-width: 100%; height: auto;" />      
</div>

As you can see from the above, IL can support various machine codes and linkers can support different operating system file systems. The mission is to update vxlang to support various file systems and system codes.

