---
layout: "page"
title: "Features"
description: "Differences between Kenvyra and other ROMs and unique aspects"
style: { inline: ".page-layout {--container-size: 84ch;}" }
permalink: "/features/"
eleventyNavigation:
    key: "Features"
    order: 3
---

Kenvyra is full of features, but most of the features aren't actually our work! The base of the ROM is [LineageOS](https://lineageos.org/), where most features are from. We won't be able to cover all the features of LineageOS here, so this non-exhaustive list of features will focus only on _major_, _visible_ or _noticable_ changes on top of LineageOS. There are a lot of tiny changes that won't be noticable to users, so those are left out here.

## Performance

-   Entire ROM uses an up-to-date Clang 17 and Rust 1.69 for all system components
-   Lots of performance improvements in bionic, art, SystemUI and other components
-   zlib is replaced by [zlib-ng](https://github.com/zlib-ng/zlib-ng) with NEON enabled
-   More recent lz4, libpng and libjpeg-turbo versions than stock AOSP
-   The default allocator is [mimalloc](https://github.com/microsoft/mimalloc) instead of scudo

## Privacy

-   microG signature spoofing is supported
-   microG variant with preinstalled microG, F-Droid and privacy-friendly location providers
-   GmsCompat (unprivileged GMS) support on vanilla variant
-   All LineageOS tracking is removed
-   More sensitive quick settings tiles require unlocking
-   Captive portal can be toggled and doesn't use Google servers
-   Uses [ntp.org](https://ntp.org/) instead of the Google NTP servers
-   DNS-over-TLS with Cloudflare provider out of the box
-   Bromite-based webview instead of stock Chromium on vanilla and microG variants
-   App Lock support
-   Secure, exec-based app launching setting
-   More restrictive sensor permissions
-   Build ID won't be included in screenshot EXIF information
-   IMSI won't be sent to the SUPL server

## Usability

-   Safetynet passes out of the box
-   GApps variant with Pixel GApps bundle
-   Bluetooth panel in quick settings
-   Toggle for hotspot from internet tile
-   Three fingers swipe to screenshot support
-   Face Unlock

## Miscellaneous

-   New A13 music player design is enforced for all apps
-   System icon shape packs
-   New stock launcher on vanilla and microG variants with simple App Lock and a refreshing UI
-   Unlimited Google Photos storage
-   Monet theming enhancements
-   Burn-in protection support
-   New animations for a lot of settings
-   Google Sans is the default font
-   "On a glace" support with GApps
-   Transparent quick settings
