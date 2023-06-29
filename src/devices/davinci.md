---
name: "Xiaomi Mi 9T / Redmi K20"
codename: "davinci"
manufacturer: "Xiaomi"
maintainers: ["Adrian", "Steve"]
picture: "./src/assets/images/devices/davinci-padded.png"
---

## Installation instructions

Download the latest global or chinese firmware from [here](https://xiaomifirmwareupdater.com/firmware/davinci/) and the latest FBEv2 TWRP from [here](https://miracle.girlswithout.top/recoveries/TWRP/fbev2/).

Reboot your phone into fastboot. Run `fastboot flash recovery twrp_davinci-xyz.img`, then `fastboot reboot recovery` to enter TWRP.

From TWRP, go to "Advanced" -> "ADB Sideload" and start a sideload. On your PC, run `adb sideload fw_davinci_miui_DAVINCI_xyz.zip`. When finished, start another sideload and run `adb sideload Kenvyra-13.0-davinci-OFFICIAL-xyz.zip`. Afterwards, head to "Wipe" -> "Format data" and confirm.

Reboot to enjoy Kenvyra!

## Changelog

### June 2023

-   Build with June security patch, see the blog for all ROM-side changes
-   Fixed FUSE passthrough, it was previously enabled but never working
-   Switch EROFS compressor from lz4hc to lz4
-   Updated kernel to 4.14.320
-   Decreased status bar height
-   Miscellaneous improvements

### May 2023

-   Build with May security patch, see the blog for all ROM-side changes
-   Enabled blurs

### April 2023

-   Initial stable release with April security patch
