import { newDialog } from "./dialog";

newDialog("#offcanvas-menu", "#show-offcanvas-menu");

window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js");
    }
});

const device = document.getElementById("device");
const flavor = document.getElementById("flavor");
const downloadButton = document.getElementById("download");

device.addEventListener("input", updateDownloadButton);
flavor.addEventListener("input", updateDownloadButton);

updateDownloadButton();

async function updateDownloadButton() {
    if (device.value.length > 0 && flavor.value.length > 0) {
        downloadButton.textContent = "Preparing download...";

        try {
            const response = await fetch(`https://raw.githubusercontent.com/Kenvyra/ota/kenvyra-13.0/${device.value}_${flavor.value}.json`);
            const json = await response.json();

            downloadButton.href = json.response[0].url;
            downloadButton.classList.remove("is-disabled");
            downloadButton.classList.add("is-active");

            downloadButton.textContent = "Download";
        } catch (e) {
            downloadButton.textContent = "No build available yet";
        }
    } else {
        downloadButton.classList.remove("is-active");
        downloadButton.classList.add("is-disabled");
        downloadButton.textContent = "Select a device and flavor";
    }
}
