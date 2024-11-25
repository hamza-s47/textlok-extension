const encryptRadio = document.querySelector('#e-radio') as HTMLInputElement | null;
const decryptRadio = document.querySelector('#d-radio') as HTMLInputElement | null;
const encryptBox = document.querySelector('#e-box') as HTMLElement | null;
const decryptBox = document.querySelector('#d-box') as HTMLElement | null;

if (encryptRadio && decryptRadio && encryptBox && decryptBox) {
    encryptRadio.addEventListener('change', () => boxToggle(encryptBox, decryptBox));
    decryptRadio.addEventListener('change', () => boxToggle(decryptBox, encryptBox));
} else {
    console.error('One or more elements are missing');
}

function boxToggle(show: HTMLElement, hide: HTMLElement) {
    hide.classList.add('hidden');
    show.classList.remove('hidden');
}
