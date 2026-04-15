export function renderWithTemplate(
    template,
    parentElement,
    data,
    callback
) {
    parentElement.innerHTML = template;
    if (callback) {
        callback(data);
    }
}

export async function loadTemplate(path) {
    const res = await fetch(path);
    const template = await res.text();
    return template;
}

export function initMenu() {
    const toggle = document.querySelector("#menu-toggle");
    const menu = document.querySelector("#nav-menu");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }
}

export async function loadHeaderFooter() {
    const headerTemplate = await loadTemplate("./partials/header.html");
    const footerTemplate = await loadTemplate("./partials/footer.html");

    const headerElement = document.querySelector("#main-header");
    const footerElement = document.querySelector("#main-footer");

    renderWithTemplate(headerTemplate, headerElement, null, initMenu);
    renderWithTemplate(footerTemplate, footerElement);
}