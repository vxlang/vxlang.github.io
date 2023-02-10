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

This page describes the software protection features of vxlang.  

With vxlang's packing, it compresses and encrypts files and protects against file static analysis. It also provides the following features to defend against software references in the operational state:

- `Anti-Debugging`: Protects against process references from debuggers.
- `Process pause detection`: After changing the process to Pause, further analysis is possible. vxlang detects this condition.
- `Remove Process Handle`: Remove this handle if the process was referenced as readable.
- `Memory tampering detection`: Detects memory tampering, such as hooking or protection bypass.

**vxlang** will research additional protection techniques and add features.

