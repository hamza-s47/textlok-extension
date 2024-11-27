import { element, boxToggle } from "./controller";

// HTML ELEMENTS
const encryptRadio:HTMLElement | null = element('#e-radio');
const decryptRadio:HTMLElement | null = element('#d-radio');
const encryptBox:HTMLElement | null = element('#e-box');
const decryptBox:HTMLElement | null = element('#d-box');
const encryptForm:HTMLElement | null = element('#e-form');
const decryptForm:HTMLElement | null = element('#d-form');
// TOGGLE LOGIC
if (encryptBox && decryptBox) {
    encryptRadio?.addEventListener('change', () => boxToggle(encryptBox, decryptBox));
    decryptRadio?.addEventListener('change', () => boxToggle(decryptBox, encryptBox));
} else {
    console.error('One or more elements are missing');
}
// EVENT LISTENERS
if(encryptForm && decryptForm){
    encryptForm.addEventListener('submit', (event:Event):void=> {
        event.preventDefault();
        // Lazy loading
        import('./controller')
            .then((module) => {
                module.fetchFormData(event, true);
            })
            .catch((error) => {
                console.error('Error loading fetchFormData:', error);
            });
    });

    decryptForm.addEventListener('submit', (event:Event):void=> {
        event.preventDefault();
        // Lazy loading
        import('./controller')
            .then((module) => {
                module.fetchFormData(event, false);
            })
            .catch((error) => {
                console.error('Error loading fetchFormData:', error);
            });
    });
}