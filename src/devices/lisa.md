---
name: "Xiaomi 11 Lite 5G NE"
codename: "lisa"
manufacturer: "Xiaomi"
maintainers: ["Mariny"]
picture: "./src/assets/images/devices/lisa-padded.png"
---

## Installation instructions

Download `boot.img`, `dtbo.img` and `vendor_boot.img` from [here](https://download.kenvyra.xyz/lisa/) and the latest firmware for your region [here](https://xiaomifirmwareupdater.com/firmware/lisa/).

Now, run these commands in order:

-   `fastboot flash boot boot.img`
-   `fastboot flash dtbo dtbo.img`
-   `fastboot flash vendor_boot vendor_boot.img`

Run `fastboot reboot recovery` to enter the recovery. Click on "Apply update" and "Apply from ADB". Now run `adb sideload fw_lisa_miui_LISAxyz.zip` then head to "Factory reset" and format data.  
From the main menu of the recovery go to "Advanced" and press "Reboot to recovery". Now click "Apply update" and "Apply from ADB" again and run `adb sideload Kenvyra-13.0-lisa-OFFICIAL-xyz.zip`.

Reboot to enjoy Kenvyra!

## Changelog

### July 2023

-   Updated kernel to 5.4.249
-   Enabled full LTO
-   Enabled polly
-   Aligned statusbar with camera
-   Faster auto-brightness ramp up
-   Lowered dpi to 400
-   Other improvements

### May 2023

-   Initial stable release with May security patch
