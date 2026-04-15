const FAVORITES_KEY = "favorites";

export function getFavorites() {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
}

export function addFavorite(article) {
    let favorites = getFavorites();
    const exists = favorites.find(f => f.title === article.title);

    if (exists) {
        console.log("Ya existe en favoritos");
        return;
    }

    favorites.push(article);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    console.log("Guardado con éxito:", article.title);
};


