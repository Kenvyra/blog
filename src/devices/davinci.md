---
name: "Xiaomi Mi 9T / Redmi K20"
codename: "davinci"
manufacturer: "Xiaomi"
maintainers: ["Adrian", "Steve"]
picture: "./src/assets/images/devices/davinci-padded.png"
---

## Installation instructions

Requirements:

-   Latest global or chinese firmware from [here](https://xiaomifirmwareupdater.com/firmware/davinci/) (if not already installed)
-   Latest Dynamic FBEv2 TWRP from [here](https://miracle.girlswithout.top/recoveries/TWRP/dynamic-fbev2/) (if not already installed)
-   [super_empty.img](https://miracle.girlswithout.top/recoveries/TWRP/dynamic-fbev2/super_empty.img) (if you are on a legacy, non-dynamic ROM)

### 1. Converting to dynamic partitions

If you are not on a ROM with dynamic partitions, you will have to migrate. Reboot your phone into fastboot and run `fastboot wipe-super super_empty.img`.

### 2. Flashing TWRP

Now, run `fastboot flash recovery twrp_davinci-xyz.img` and `fastboot reboot recovery` to enter TWRP.

### 3. Updating firmware and flashing the ROM

Important: If you just flashed `super_empty.img`, you **must** go to "Settings" in TWRP and disable "Unmount System before installing a ZIP" until you have installed a ROM.

From TWRP, go to "Advanced" -> "ADB Sideload" and start a sideload. On your PC, run `adb sideload fw_davinci_miui_DAVINCI_xyz.zip`. When finished, start another sideload and run `adb sideload Kenvyra-13.0-davinci-OFFICIAL-xyz.zip`. Afterwards, head to "Wipe" -> "Format data" and confirm.

You should re-enable "Unmount System before installing a ZIP" in the settings now if you disabled it earlier.

Reboot to enjoy Kenvyra!

## Changelog

### August 2023

-   Build with August security patch, see the blog for all ROM-side changes
-   Updated kernel to 4.14.322
-   Improved EROFS performance
-   Enabled proximity check on wake (pocket lock)
-   Updated blobs from sweet V14.0.1.0.THGMIXM

### July 2023

-   Build with July security patch, see the blog for all ROM-side changes
-   Adjusted status bar padding
-   Reworked SKU handling

### June 2023

-   **Builds from June 30th onwards use dynamic partitions! You will have to manually upgrade and cannot use OTA for this, but you won't lose your data if you are on older builds!**
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
