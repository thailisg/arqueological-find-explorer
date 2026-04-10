import { getNews } from "./apis.js";
import { displayData, displayHeroImages } from "./display.js";
import { loadHeaderFooter } from "./utils.mjs";
import { getImage } from "./apis.js";
import { addFavorite } from "./favorites.js";

loadHeaderFooter();

async function initHero() {
    const photos = await getImage("archaeology");
    displayHeroImages(photos.slice(0, 6));
}

async function init() {
    await initHero();

    const articles = await getNews();

    console.log(articles);

    const first3 = articles.slice(0, 3);
    const next3 = articles.slice(3, 6);

    displayData(first3, ".news1");
    displayData(next3, ".news2");
}

/* testing
    bindFavorites([...first3, ...next3]);
}

function bindFavorites(items) {
    document.querySelectorAll(".fav-btn").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            addFavorite(items[index]);
        });
    });
}*/

init();