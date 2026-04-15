import { loadHeaderFooter } from "./utils.mjs";
import { loadFacts, initFactsSystem } from "./facts.js";

loadHeaderFooter();

document.addEventListener("DOMContentLoaded", async () => {
    await loadFacts();
    initFactsSystem();
});
const FAVORITES_KEY = "favorites";

function getFavorites() {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
}

function removeFavorite(title) {
    let favorites = getFavorites();
    favorites = favorites.filter(item => item.title !== title);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

function renderFavorites() {
    const container = document.querySelector(".favorites-container");
    container.innerHTML = "";

    const favorites = getFavorites();

    if (favorites.length === 0) {
        container.innerHTML = `
            <p class="empty">No favorites yet D:</p>
        `;
        return;
    }

    favorites.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <h3>${item.title || "No title"}</h3>
            <p>${item.description || "No description"}</p>
            
            ${item.url ? `<a href="${item.url}" target="_blank">Read more</a>` : ""}
            ${item.image ? `<img 
                    src="${item.image.replace(/^http:\/\//i, "https://")}" 
                    alt="${item.title || "No title"}"
                    loading="lazy"
                    width="300"
                    height="300"
                    onerror="this.src='images/fallback-image.webp'"
                >` : ""}

            <button class="remove-btn">Remove</button>
        `;

        const removeBtn = div.querySelector(".remove-btn");

        removeBtn.addEventListener("click", () => {
            removeFavorite(item.title);
            renderFavorites();
        });

        container.appendChild(div);
    });

}

renderFavorites();