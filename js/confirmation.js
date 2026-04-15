import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const params = new URLSearchParams(window.location.search);

const confirmation = document.querySelector(".confirmation");

if (
    params.has("firstName") &&
    params.has("lastName") &&
    params.has("email") &&
    params.has("messageType") &&
    params.has("message")
) {
    document.getElementById("firstName").textContent = params.get("firstName");
    document.getElementById("lastName").textContent = params.get("lastName");
    document.getElementById("email").textContent = params.get("email");
    document.getElementById("messageType").textContent = params.get("messageType");
    document.getElementById("message").textContent = params.get("message");

    if (params.has("timestamp")) {
        const timeEl = document.getElementById("timestamp");
        if (timeEl) {
            const date = new Date(params.get("timestamp"));
            timeEl.textContent = date.toLocaleString();
        }
    }

} else {
    if (confirmation) {
        confirmation.innerHTML = `
            <p>No form data found. Please submit the form first.</p>
            <a href="contact.html">Go back to form</a>
        `;
    }
}

const count = localStorage.getItem("formSubmitCount") || 0;

const counterDisplay = document.createElement("p");
counterDisplay.classList.add("submission-counter");
counterDisplay.textContent = `You have submitted the form ${count} time(s).`;

confirmation.appendChild(counterDisplay);