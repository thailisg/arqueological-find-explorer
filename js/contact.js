import { loadHeaderFooter } from "./utils.mjs";
import { loadFacts, initFactsSystem } from "./facts.js";

loadHeaderFooter();

loadFacts().then(() => {
    initFactsSystem();
});

const form = document.querySelector("#contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
        firstName: form.firstName.value.trim(),
        lastName: form.lastName.value.trim(),
        email: form.email.value.trim(),
        messageType: form.messageType.value,
        message: form.message.value.trim()
    };

    let count = parseInt(localStorage.getItem("formSubmitCount")) || 0;
    count++;
    localStorage.setItem("formSubmitCount", count);

    const timestampInput = document.querySelector("#timestamp");
    if (timestampInput) {
        timestampInput.value = new Date().toISOString();
        formData.timestamp = timestampInput.value;
    }

    const params = new URLSearchParams(formData).toString();

    window.location.href = `confirmation-page.html?${params}`;
});