import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const FAVORITES_KEY = "favorites";

function getFavorites() {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
}

function renderFavorites() {
    const container = document.querySelector(".favorites-container");
    container.innerHTML = "";

    const favorites = getFavorites();

    if (favorites.length === 0) {
        container.innerHTML = `
            <p class="empty">No favorites yet 🥲</p>
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
            ${item.image ? `<img src="${item.image.replace(/^http:\/\//i, "https://")}" alt="${item.title || "No title"}">` : ""}
        `;

        container.appendChild(div);
    });
}

renderFavorites();