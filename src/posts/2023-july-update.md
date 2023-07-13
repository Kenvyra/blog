---
title: "July 2023 Update"
description: "A small update with changes to our GApps package"
featured: "src/assets/images/posts/2023-july-update.png"
---

This new release includes the [July 2023 security patch](https://source.android.com/docs/security/bulletin/2023-07-01) and adds a few enhancements.

### Fixes

-   Fixed crashes in Stk, gallery and AOSP keyboard settings caused by r8 strict mode

### Enhancements

-   Our GApps package is now based on partner GMS and no longer extracted from Pixels, which should reduce logspam caused by unsupported Tensor features

### Features

-   Added support for emoji workshop on GApps builds

### Removed

-   We removed support for face unlock. The OSS implementation just isn't ready yet and caused lots of issues
