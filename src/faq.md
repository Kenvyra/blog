---
layout: "page"
title: "FAQ"
description: "Frequently asked questions"
style: { inline: ".page-layout {--container-size: 84ch;}" }
permalink: "/faq/"
eleventyNavigation:
    key: "FAQ"
    order: 5
---

## What are the requirements for official devices?

Official devices MUST fulfill the following criteria:

- Enforcing SELinux with proper policies
- Encrypted by default with forceencrypt enabled
- No overclocking of CPU, GPU or panel
- No added bloatware like different stock camera apps or unneeded proprietary blobs
- Kernel with regular merges of linux-stable
- No major broken features (Wifi, UDFPS, NFC, ...)
- Safetynet passing on microG and GApps builds
- Working builds for vanilla, microG and GApps
- userdebug and user builds must both build and work fine
- Maintainer must be active in the [Developer Telegram group](https://t.me/kenvyra_development)
- No changes to the ROM (removing/adding applications and so on)
- No pre-rooted kernels (includes KernelSU)
- Properly credited commit authorship

They also SHOULD fulfill the following criteria additionally:

- Kernel compilation with Clang + LLVM Binutils without GCC or GNU Binutils
- Kernel compilation with our default LLVM toolchain version
- No replacements for repositories provided by Kenvyra
- Latest encryption standards (such as FBEv2 instead of FBEv1)
- Flashable kernel variant with regular merges of linux-hardened
- Highest possible architecture optimizations possible in device tree (like ARMv8.2-a+dotprod instead of generic ARMv8 on Cortex-A76 SoCs)

Exceptions can be made on a case-by-case basis (for example in the case of platforms not fully supported in AOSP, temporary patches that aren't generic may be applied).
