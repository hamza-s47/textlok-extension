const encryptRadio = document.querySelector('#e-radio');
const decryptRadio = document.querySelector('#d-radio');
const encryptForm = document.querySelector('#e-form');
const decryptForm = document.querySelector('#d-form');

encryptRadio.addEventListener('change', () => formToggle(encryptForm, decryptForm));
decryptRadio.addEventListener('change', () => formToggle(decryptForm, encryptForm));

function formToggle(show, hide) {

    if (show && hide) {
        hide.classList.add('hidden');
        show.classList.remove('hidden');
    } else {
        console.error('Elements not found:', show, hide);
    }
}
