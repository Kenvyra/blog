---
layout: "page"
title: "Status"
description: "Status of Kenvyra"
style: { inline: ".page-layout {--container-size: 84ch;}" }
permalink: "/status/"
eleventyNavigation:
    key: "Status"
    order: 4
---

## Target Audience

Kenvyra is for nerdy people willing to experiment with their phones. While yes, someone with less technical knowledge can probably install it on their phone, they will likely encounter one or multiple of the following issues that they wouldn't if they were using the stock OS:

* Play Integrity checks are likely to fail
* Updating to the next major Android version cannot be done automatically
* [*insert app name here*] isn't working at all!

This is a ROM for privacy-freaks, benchmark number enjoyers and sawy casual users. Do not install it on your old phone that you're about to pass to your old grandmother.

## Security

Kenvyra **cannot** make any security guarantees beyond software. Devices with unlocked bootloaders can easily be reset to factory state or tampered with in unexpected ways by third parties with access to the device. Devices that allow re-locking the bootloader with custom ROMs, such as Pixels, Fairphones and Shiftphones, can avoid these issues, but are currently not supported officially.

The goal of Kenvyra can and will never be to protect you from your own stupidity. If you download a virus, that's on you. If you don't update your system, that's on you. Even if you downgrade your system, that's on you, we won't stop you. Why? Because artificial limitations suck. That's what manufacturers do when they force you to wait 10 seconds before allowing bootloader unlocking or when the security scan rejects your attempt to install F-Droid. Kenvyra will never intentionally restrict your ability to do anything you like with your phone, even if it might be a bad idea.

This also means Kenvyra will not employ measures like the most hardened malloc at all performance expenses (if it were to exist). The usefulness of this will only matter when malware is on your device, which is entirely on you. Kenvyra instead employs reasonable security measures that do not meaningfully hurt performance. Keep in mind that **no system** will always be perfectly secure. SELinux, hardened allocators, permission restrictions and similar measures are fallible. Therefore we recommend people who assume they are being spied on by governments to not use cellphones at all. It is very likely that there are undisclosed vulnerabilities in software deemed secure or spyware in hardware components such as remote processors.
