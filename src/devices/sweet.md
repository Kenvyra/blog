---
name: "Redmi Note 10 Pro"
codename: "sweet"
manufacturer: "Xiaomi"
maintainers: ["Adrian"]
picture: "./src/assets/images/devices/sweet-padded.png"
---

## Installation instructions

Download aryan's OrangeFox from [here](https://sourceforge.net/projects/aosp-builds/files/OrangeFox-R11.1_4-Unofficial-sweet.zip/download) and the latest firmware for your region [here (global)](https://xiaomifirmwareupdater.com/firmware/sweet/) or [here (India)](https://xiaomifirmwareupdater.com/firmware/sweetin/). Extract the `recovery.img` file from the OrangeFox ZIP.

Reboot your device info fastboot and run `fastboot flash recovery recovery.img`, then `fastboot reboot recovery`.

From OrangeFox, go to "Advanced" -> "ADB Sideload" and start a sideload. On your PC, run `adb sideload fw_sweet_miui_SWEET_xyz.zip` (or `sweetin` for Indian devices). When finished, start another sideload and run `adb sideload Kenvyra-13.0-sweet-OFFICIAL-xyz.zip`. Afterwards, head to "Wipe" -> "Format data" and confirm.

Reboot to enjoy Kenvyra!

## Changelog

### July 2023

-   Initial stable release with July security patch
