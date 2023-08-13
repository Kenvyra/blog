---
name: "Xiaomi 12"
codename: "cupid"
manufacturer: "Xiaomi"
maintainers: ["Adrian"]
picture: "./src/assets/images/devices/cupid-padded.png"
---

## Installation instructions

For a proper clean install, it is recommended to flash the latest MIUI for your region so you have up to date firmware. Then, reboot your phone into fastboot.

Download `boot.img`, `dtbo.img`, `recovery.img` and `vendor_boot.img` from [Arian's Lineage releases](https://github.com/arian-ota/ota/releases/tag/20.0-cupid-812c3096).

Now, run these commands in order:

-   `fastboot flash boot boot.img`
-   `fastboot flash dtbo dtbo.img`
-   `fastboot flash recovery recovery.img`
-   `fastboot flash vendor_boot vendor_boot.img`

Run `fastboot reboot recovery` to enter the LineageOS recovery. Click on "Apply update" and "Apply from ADB". Then, run `adb sideload Kenvyra-13.0-cupid-OFFICIAL-xyz.zip`. Head back to the main screen of the recovery and select "Factory reset" and then "Format data/factory reset".

Reboot to enjoy Kenvyra!

## Changelog

### August 2023

-   Fixed battery usage statistics

### July 2023

-   Rebased kernel on latest CLO tags
-   Added Lineage health HAL for charging control
-   Added Lineage power share HAL for reverse charging
-   Flashing the ROM no longer overwrites custom recoveries

### June 2023

-   Enabled burn-in protection
-   Fixed aliasing around the camera cutout
-   Updated kernel to 5.10.168
-   Kernel now compiles with our system-wide LLVM 17, not the ancient kernel platform LLVM
-   Now compiled for ARMv9 (with SVE disabled) and optimized for Cortex-A710

### May 2023

-   Initial stable release with May security patch
