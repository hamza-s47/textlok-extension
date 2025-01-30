import { element, boxToggle, copyToClipboard, downloadBoth } from "./controller";

// HTML ELEMENTS
const encryptRadio: HTMLElement | null = element('#e-radio');
const decryptRadio: HTMLElement | null = element('#d-radio');
const encryptBox: HTMLElement | null = element('#e-box');
const decryptBox: HTMLElement | null = element('#d-box');
const encryptForm = element('#e-form') as HTMLFormElement | null;
const decryptForm = element('#d-form') as HTMLFormElement | null;
const closeBtn: HTMLElement | null = element('#closeBtn');
const popup: HTMLElement | null = element('#p-box');
const encryptIcon: HTMLElement | null = element('#e-icon');
const decryptIcon: HTMLElement | null = element('#d-icon');
const encryptLoader: HTMLElement | null = element('#e-loader');
const decryptLoader: HTMLElement | null = element('#d-loader');
// const copyKey: HTMLElement | null = element('#copyKey');
const copyText: HTMLElement | null = element('#copyText');
const bothDownload: HTMLElement | null = element('#bothDownload');

// TOGGLE LOGIC
if (encryptBox && decryptBox) {
    encryptRadio?.addEventListener('change', () => boxToggle(encryptBox, decryptBox));
    decryptRadio?.addEventListener('change', () => boxToggle(decryptBox, encryptBox));
} else {
    console.error('One or more elements are missing');
}
// EVENT LISTENERS
if (encryptForm && decryptForm && encryptLoader && encryptIcon && decryptLoader && decryptIcon) {
    encryptForm.addEventListener('submit', async (event: Event) => {
        boxToggle(encryptLoader, encryptIcon);
        event.preventDefault();

        try {
            const module = await import('./controller');
            await module.fetchFormData(event, true);
            boxToggle(encryptIcon, encryptLoader);
        } catch (error) {
            console.error('Error in fetchFormData:', error);
            boxToggle(encryptIcon, encryptLoader);
        }
    });

    decryptForm.addEventListener('submit', async (event: Event) => {
        boxToggle(decryptLoader, decryptIcon);
        event.preventDefault();

        try {
            const module = await import('./controller');
            await module.fetchFormData(event, false);
            boxToggle(decryptIcon, decryptLoader);

        } catch (error) {
            console.error('Error in fetchFormData:', error);
            boxToggle(decryptIcon, decryptLoader);
        }
    });
}

if (popup) {
    closeBtn?.addEventListener('click', () => {
        encryptForm?.reset();
        decryptForm?.reset();
        // boxToggle(popup);
        popup.style.display = 'none';
    })
}

// if(copyKey){
//     copyKey.addEventListener('click', ()=>{
//         copyToClipboard(false);
//     });
// }
if(copyText){
    copyText.addEventListener('click', ()=>{
        copyToClipboard();
    });
}
if(bothDownload){
    bothDownload.addEventListener('click', ()=>{
        downloadBoth();
    });
}