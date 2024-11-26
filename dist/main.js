"use strict";
const encryptRadio = document.querySelector('#e-radio');
const decryptRadio = document.querySelector('#d-radio');
const encryptBox = document.querySelector('#e-box');
const decryptBox = document.querySelector('#d-box');
if (encryptRadio && decryptRadio && encryptBox && decryptBox) {
    encryptRadio.addEventListener('change', () => boxToggle(encryptBox, decryptBox));
    decryptRadio.addEventListener('change', () => boxToggle(decryptBox, encryptBox));
}
else {
    console.error('One or more elements are missing');
}
function boxToggle(show, hide) {
    hide.classList.add('hidden');
    show.classList.remove('hidden');
}
