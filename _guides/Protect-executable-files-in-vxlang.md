---
layout: page
title: Protect executable files in vxlang
order: 1
---

# {{ page.title }}

<div align="center">
      <img src="https://vxlang.github.io/image/protector2.png" loop=infinite style="max-width: 100%; height: auto;" />
</div>
<br>

VXLANG is essentially an executable compression packer, so it compresses and encrypts binaries and runs the original code through the obfuscated code.

```
vxlang.exe ${target-path}
```

However, packers do not need to be used for special binaries or binaries that do not need to be packed (only obfuscated or virtualized), in which case use the following options.

```
vxlang.exe ${target-path} --disable-packer
```

The basic features of vxlang include anti-debugging and memory tamper protection. In addition, add-on modules can be added to write specialized protection code.

The activation options are:

`--detect-debug` Detect debugging. This option is forced in the demo version.
`--detect-patch` Detect memory tampering for images. This feature is forced in the demo version.

```
vxlang.exe ${target-path} --detect-debug --detect-patch
```



