
export function displayData(items) {
    const container = document.querySelector(".news-section");
    container.innerHTML = "";

    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description || "No description"}</p>
      <p><strong>Source:</strong> ${item.source.name}</p>
      <p><strong>Date:</strong> ${item.publishedAt}</p>
      <img src="${item.urlToImage || 'https://via.placeholder.com/200'}" width="200">
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