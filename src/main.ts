import { element, boxToggle } from "./controller";

// HTML ELEMENTS
const encryptRadio:HTMLElement | null = element('#e-radio');
const decryptRadio:HTMLElement | null = element('#d-radio');
const encryptBox:HTMLElement | null = element('#e-box');
const decryptBox:HTMLElement | null = element('#d-box');
const encryptForm = element('#e-form');
const decryptForm = element('#d-form');

// TOGGLE LOGIC
if (encryptRadio && decryptRadio && encryptBox && decryptBox) {
    encryptRadio.addEventListener('change', () => boxToggle(encryptBox, decryptBox));
    decryptRadio.addEventListener('change', () => boxToggle(decryptBox, encryptBox));
} else {
    console.error('One or more elements are missing');
}

if(encryptForm && decryptForm){
    encryptForm.addEventListener('submit', ()=>{
        
    })
}