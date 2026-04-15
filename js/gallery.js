import { getImage } from "./apis.js";
import { loadHeaderFooter } from "./utils.mjs";
import { displayGallery } from "./display.js";
import { loadFacts, initFactsSystem } from "./facts.js";

loadHeaderFooter();

document.addEventListener("DOMContentLoaded", async () => {
    await loadFacts();
    initFactsSystem();
});

async function initGallery() {
    const photos = await getImage("archaeology");

    displayGallery(photos);
}

initGallery();