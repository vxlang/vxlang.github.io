---
layout: page
title: Code Virtualization in vxlang
order: 1
---

# {{ page.title }}

**Virtualization of vxlang** is a form of writing and compiling virtualization-assembly code for the source code. 
The compiled code is then linked back to the executable.  
  
<div align="center">
      <img src="https://vxlang.github.io/image/vxlang-1.png" loop=infinite style="max-width: 100%; height: auto;" />
</div>
<br>

The target code block is specified using the SDK or address. 

```cpp
    VM_START; // ***

    printf("Hello, World ! \n");

    VM_END; // ***
```

