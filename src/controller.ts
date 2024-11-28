import { apiCalling } from "./api";

export function element(id: string): HTMLElement | null {
    const el: HTMLElement | null = document.querySelector(id);

    if (!el) {
        console.error(`Element with id "${id}" not found.`);
    }

    return el;
}

export function boxToggle(show: HTMLElement, hide?: HTMLElement): void {
    if(hide){
        hide.classList.add('hidden');
        show.classList.remove('hidden');
    }
    else{
        show.classList.contains('hidden') ? show.classList.remove('hidden') : show.classList.add('hidden')
    }
    
}

export function fetchFormData(event: Event, isEncrypt: boolean): void {
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    let payload;
    let apiData;

    if (isEncrypt) {
        payload = {
            plainText: formData.get('text'),
            isEncrypt: isEncrypt
        }
    } else {
        payload = {
            encryptedText: formData.get('text'),
            key: formData.get('key'),
            isEncrypt: isEncrypt
        }

    }
    apiCalling(payload).then((res) => {
        apiData = res.data;
        handlePopup(apiData);
        console.warn(apiData);
    }).catch(err => {
        console.error("Error in API controller", err);
    });
}

function handlePopup(data:any): void{
    const popup:HTMLElement | null = element('#p-box');
    const key:HTMLElement | null = element('#isKey')
    const keyField:HTMLElement | null = element('#p-key');
    const text:HTMLElement | null = element('#p-text');

    if(popup && key && keyField && text){
        if(data.secret_key){
            keyField.innerHTML = data.secret_key;
            text.innerHTML = data.text;
            key.classList.contains('hidden') ? key.classList.remove('hidden') : '';
        } else {
            text.innerHTML = data.text;
            key.classList.contains('hidden') ? '' : key.classList.add('hidden');
        }
    
        popup.style.left = '0px'
    }

    
}