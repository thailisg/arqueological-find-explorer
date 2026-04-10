import { getImage } from "./apis.js";
import { loadHeaderFooter } from "./utils.mjs";
import { displayGallery } from "./display.js";

loadHeaderFooter();

async function initGallery() {
    const photos = await getImage("archaeology");

    displayGallery(photos);
}

initGallery();