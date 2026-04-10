
export function displayData(items) {
    const container = document.querySelector(".news-section");
    container.innerHTML = "";

    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <h3>${item.title || "No title"}</h3>
            <p>${item.description || "No description"}</p>
            <p><small>${item.source?.name || "Unknown source"}</small></p>
  
            ${item.url ? `<a href="${item.url}" target="_blank">Read more</a>` : ""}
            ${item.image ? `<img src="${item.image.replace(/^http:\/\//i, "https://")}" alt="${item.title || "No title"}">` : ""}
        `;

        container.appendChild(div);
    });
}

export function displayHeroImages(items) {
    const container = document.querySelector(".hero-collage");
    container.innerHTML = "";

    items.forEach(photo => {
        const a = document.createElement("a");
        a.href = "gallery.html";
        a.target = "_blank";

        const img = document.createElement("img");
        img.src = photo.src.medium;
        img.alt = photo.photographer || "Archaeology Image";

        a.appendChild(img);
        container.appendChild(a);
    });
}