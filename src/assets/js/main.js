import { newDialog } from "./dialog";

newDialog("#offcanvas-menu", "#show-offcanvas-menu");

window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js");
    }
});

const deviceHeader = document.getElementById("device");
const flavorHeader = document.getElementById("flavor");
const downloadButtonHeader = document.getElementById("download");

const deviceOffcanvas = document.getElementById("device-offcanvas");
const flavorOffcanvas = document.getElementById("flavor-offcanvas");
const downloadButtonOffcanvas = document.getElementById("download-offcanvas");



deviceHeader.addEventListener("input", (e) => updateDownloadButton(downloadButtonHeader, deviceHeader, flavorHeader));
flavorHeader.addEventListener("input", (e) => updateDownloadButton(downloadButtonHeader, deviceHeader, flavorHeader));
deviceOffcanvas.addEventListener("input", (e) => updateDownloadButton(downloadButtonOffcanvas, deviceOffcanvas, flavorOffcanvas));
flavorOffcanvas.addEventListener("input", (e) => updateDownloadButton(downloadButtonOffcanvas, deviceOffcanvas, flavorOffcanvas));


updateDownloadButton(downloadButtonHeader, deviceHeader, flavorHeader);
updateDownloadButton(downloadButtonOffcanvas, deviceOffcanvas, flavorOffcanvas);

async function updateDownloadButton(button, device, flavor) {
    if (device.value.length > 0 && flavor.value.length > 0) {
        button.textContent = "Preparing download...";

        try {
            const response = await fetch(`https://raw.githubusercontent.com/Kenvyra/ota/kenvyra-13.0/${device.value}_${flavor.value}.json`);
            const json = await response.json();

            button.href = json.response[0].url;
            button.classList.remove("is-disabled");
            button.classList.add("is-active");

            button.textContent = "Download";
        } catch (e) {
            button.removeAttribute("href");
            button.classList.remove("is-active");
            button.classList.add("is-disabled");
            button.textContent = "No build available yet";
        }
    } else {
        button.removeAttribute("href");
        button.classList.remove("is-active");
        button.classList.add("is-disabled");
        button.textContent = "Select a device and flavor";
    }
}
