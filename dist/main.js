import { element, boxToggle, fetchFormData } from "./controller";
// HTML ELEMENTS
const encryptRadio = element('#e-radio');
const decryptRadio = element('#d-radio');
const encryptBox = element('#e-box');
const decryptBox = element('#d-box');
const encryptForm = element('#e-form');
const decryptForm = element('#d-form');
// TOGGLE LOGIC
if (encryptBox && decryptBox) {
    encryptRadio === null || encryptRadio === void 0 ? void 0 : encryptRadio.addEventListener('change', () => boxToggle(encryptBox, decryptBox));
    decryptRadio === null || decryptRadio === void 0 ? void 0 : decryptRadio.addEventListener('change', () => boxToggle(decryptBox, encryptBox));
}
else {
    console.error('One or more elements are missing');
}
if (encryptForm && decryptForm) {
    encryptForm.addEventListener('submit', (event) => {
        event.preventDefault();
        fetchFormData(encryptForm);
    });
}
