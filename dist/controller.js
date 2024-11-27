// import { apiCalling } from "./api";
export function element(id) {
    const el = document.querySelector(id);
    if (!el) {
        console.error(`Element with id "${id}" not found.`);
    }
    return el;
}
export function boxToggle(show, hide) {
    hide.classList.add('hidden');
    show.classList.remove('hidden');
}
export function fetchFormData(form) {
    const formData = new FormData(form);
    formData.forEach((value, key) => {
        console.warn(`${key}: ${value}`);
    });
}
