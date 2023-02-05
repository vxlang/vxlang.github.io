---
layout: page
title: Code Virtualization in vxlang
order: 1
---

# {{ page.title }}

**Virtualization of vxlang** is a form of writing and compiling virtualization-assembly code for the source code. 
The compiled code is then linked back to the executable.  
  
<div align="center">
      <img src="image/vxlang-1.png" loop=infinite style="max-width: 100%; height: auto;" />
</div>
<br>

The target code block is specified using the SDK or address. 

```cpp
    VM_START;

    printf(" Encrypt: \n");

    uint8_t dump[100];
    memset(dump, 0, sizeof(dump));
	
    auto size = make_string(dump);

    char password[100];
    GetPassword(password, sizeof(password));

    if (true == Test(password, strlen(password), dump, size)) {
        MessageBox(nullptr, _W(L"WOW  :]").c_str(), L"crackme02", MB_OK);
    }
    else {
        MessageBox(nullptr, _W(L"Opps :|").c_str(), L"crackme02", MB_OK);
    }

    VM_END;
```

