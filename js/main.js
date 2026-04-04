import { getNews } from "./apis.js";
import { displayData, displayHeroImages } from "./display.js";
import { loadHeaderFooter } from "./utils.mjs";
import { getImage } from "./apis.js";

loadHeaderFooter();

async function initHero() {
    const photos = await getImage("archaeology");
    displayHeroImages(photos.slice(0, 6));
}

async function init() {
    await initHero();
    const articles = await getNews();
    console.log(articles);

    displayData(articles);
}

init();