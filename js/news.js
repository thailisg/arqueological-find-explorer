import { getNews } from "./apis.js";
import { displayData } from "./display.js";
import { loadHeaderFooter } from "./utils.mjs";
import { addFavorite } from "./favorites.js";
import { loadFacts, initFactsSystem } from "./facts.js";

loadHeaderFooter();

document.addEventListener("DOMContentLoaded", async () => {
    await loadFacts();
    initFactsSystem();
});

let allNews = [];
let filteredNews = [];

// test ---------
let filters = {
    letter: "",
    region: "",
    sort: "newest"
};

async function initNews() {
    allNews = await getNews();
    filteredNews = [...allNews];

    console.log("All news:", allNews);

    renderNews();
    renderFeatured();

    initFilters();
}

initNews();

function renderNews() {
    displayData(filteredNews, ".news-section");

    const container = document.querySelector(".news-section");

    container.addEventListener("click", (e) => {
        const btn = e.target.closest(".fav-btn");
        if (!btn) return;

        const card = btn.closest(".card");

        const title = card.querySelector("h3")?.textContent;

        const article = filteredNews.find(a => a.title === title);

        if (article) {
            addFavorite(article);
        }
    });
}

function renderFeatured() {
    const container = document.querySelector(".featured-container");
    container.innerHTML = "";

    const featured = [...allNews]
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);

    featured.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <h4>${item.title || "No title"}</h4>
            <p>${item.description || ""}</p>
        `;

        container.appendChild(div);
    });
}

function applyFilters() {
    let result = [...allNews];

    //filter by letter
    if (filters.letter) {
        result = result.filter(item =>
            item.title?.toLowerCase().startsWith(filters.letter.toLowerCase())
        );
    }

    //filter by region
    if (filters.region) {
        result = result.filter(item => {
            const text = `${item.title} ${item.description}`.toLowerCase();
            return text.includes(filters.region.toLowerCase());
        });
    }

    //sort by date
    result.sort((a, b) => {
        const dateA = new Date(a.published || a.published_at);
        const dateB = new Date(b.published || b.published_at);

        return filters.sort === "newest"
            ? dateB - dateA
            : dateA - dateB;
    });

    filteredNews = result;
    renderNews();
}

function initFilters() {

    const letterInput = document.querySelector("#letterFilter");
    const regionInput = document.querySelector("#regionFilter");
    const sortSelect = document.querySelector("#sortDate");

    const filtersBox = document.querySelector(".filters");
    const title = document.querySelector(".filters-title");

    title.addEventListener("click", () => {
        filtersBox.classList.toggle("open");
    });

    //letter filter
    letterInput.addEventListener("input", (e) => {
        filters.letter = e.target.value;
        applyFilters();
    });

    //region filter
    regionInput.addEventListener("input", (e) => {
        filters.region = e.target.value;
        applyFilters();
    });

    //sort filter
    sortSelect.addEventListener("change", (e) => {
        filters.sort = e.target.value;
        applyFilters();
    });
}