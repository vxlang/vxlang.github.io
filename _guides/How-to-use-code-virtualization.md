---
layout: page
title: How to use code virtualization
order: -1
---

# {{ page.title }}

**vxlang virtualization** is available via the **SDK** or **option**. Virtualization-related options include:

## Option

- `--opt-entry` The option to calculate the last point based on the entry point of the executable file and to virtualize the area. 
- `--opt-call` Option to virtualize call codes that move by relative address. 
- `--opt-ref-call` Option to virtualize call commands that go to the specified address. 
  - A command that primarily refers to a function of an external module. 
- `--opt-ref-ptr` Option to virtualize data reference commands at the specified address. It may be mainly a string reference.   

The sample commands are as follows:  

```
vxlang.exe ${input-file-path} --opt-entry --opt-call --opt-ref-call --opt-ref-ptr
```
However, the optional function is an option during PoC and will be stabilized until the official version.  

## SDK

The default SDK usage is as follows:
```cpp
    VM_START; // ***
	
    printf("Hello, World ! \n");                                   
	
    VM_END; // ***
```

If SDK is used, code optimization may remove the SDK function. Therefore, you can stabilize the application function by turning off the optimization as shown below.

```cpp
#include <stdio.h>
#include <stdint.h>

#include "../lib/vxlib.h"

#pragma optimize("", off) 
void VirtualizationTest() {
    VM_BEGIN;

    for (int i = 0; i < 10; ++i) {
        printf("Hello, World! \n");                                    
    }

    VM_END;
}

#pragma optimize("", on)
int main() {
    VirtualizationTest();

    return 1;
}
```
The exact sample can be found in the path below.
- https://github.com/vxlang/vxlang-page/tree/main/src




