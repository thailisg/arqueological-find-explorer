
export function displayData(items, selector) {
    const container = document.querySelector(selector);
    container.innerHTML = "<p class='loading'>Loading news...</p>";

    setTimeout(() => {
        container.innerHTML = "";

        items.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("card");

            div.innerHTML = `
                <h3>${item.title || "No title"}</h3>
                <p>${item.description || "No description"}</p>
                <p><small>${item.author || "Unknown author"}</small></p>

                <button class="fav-btn" data-title="${item.title}">Add to Favorites</button>

                ${item.url ? `<a href="${item.url}" target="_blank">Read more</a>` : ""}

                ${item.image ? `<img 
                    src="${item.image.replace(/^http:\/\//i, "https://")}" 
                    alt="${item.title || "No title"}"
                    loading="lazy"
                    width="300"
                    height="300"
                    onerror="this.src='images/fallback-image.webp'"
                >` : ""}
            `;

            container.appendChild(div);
        });

    }, 300);
}

export function displayHeroImages(items) {
    const container = document.querySelector(".hero-collage");
    container.innerHTML = "";

    items.forEach(photo => {
        const a = document.createElement("a");
        a.href = "gallery.html";
        a.target = "_blank";

        const img = document.createElement("img");
        img.src = photo.src.small;
        img.alt = photo.photographer || "Archaeology Image";

        a.appendChild(img);
        container.appendChild(a);
    });
}

export function displayGallery(photos) {
    const container = document.querySelector(".gallery-container");
    container.innerHTML = "";

    photos.forEach(photo => {
        const div = document.createElement("div");
        div.classList.add("gallery-card");

        div.innerHTML = `
            <img src="${photo.src.small}" alt="${photo.photographer}">
            <p>Photo by ${photo.photographer}</p>
        `;

        container.appendChild(div);
    });
}