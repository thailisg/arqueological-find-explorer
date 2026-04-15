let facts = [];

export async function loadFacts() {
    const res = await fetch("./json/curiosities.json");
    facts = await res.json();
}

function getRandomFact() {
    if (!facts.length) return null;
    return facts[Math.floor(Math.random() * facts.length)];
}

function createPopup() {
    const popup = document.createElement("div");
    popup.classList.add("fact-popup");
    document.body.appendChild(popup);
    return popup;
}

export function initFactsSystem() {
    const popup = createPopup();
    let active = false;

    function updatePosition(e) {
        const offset = 15;
        const padding = 10;

        const popupWidth = popup.offsetWidth;
        const popupHeight = popup.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        let left = e.pageX + offset;

        if (mouseX + popupWidth + offset > windowWidth) {
            left = e.pageX - popupWidth - offset;
        }

        let top = e.pageY + offset;

        if (mouseY + popupHeight + offset > windowHeight) {
            top = e.pageY - popupHeight - offset;
        }

        popup.style.left = left + "px";
        popup.style.top = top + "px";
    }

    function show(target, e) {
        if (active) return;
        active = true;

        const random = getRandomFact();
        if (!random) return;

        popup.innerHTML = `
            <strong>${random.title}</strong>
            <p>${random.fact}</p>
            <small>${random.category}</small>
        `;

        popup.classList.add("show");

        updatePosition(e);
    }

    function hide() {
        active = false;
        popup.classList.remove("show");
    }

    document.addEventListener("mouseover", (e) => {
        const target = e.target.closest("[data-fact]");
        if (target) show(target, e);
    });

    document.addEventListener("mouseout", (e) => {
        if (e.target.closest("[data-fact]")) hide();
    });

    document.addEventListener("mousemove", (e) => {
        if (popup.classList.contains("show")) {
            updatePosition(e);
        }
    });
}