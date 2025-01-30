import { apiCalling } from "./api";

// MAIN DATA
let mainData:any;

// CONTROLLERS
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
        show.classList.contains('hidden') ? show.classList.remove('hidden') : show.classList.add('hidden');
    }
}

export function fetchFormData(event: Event, isEncrypt: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        let payload;
        let apiData;

        if (isEncrypt) {
            payload = {
                plainText: formData.get('text'),
                isEncrypt: isEncrypt
            };
        } else {
            payload = {
                encryptedText: formData.get('text'),
                key: formData.get('key'),
                isEncrypt: isEncrypt
            };
        }

        apiCalling(payload)
            .then((res) => {
                apiData = res.data;
                mainData = apiData;
                handlePopup(apiData);
                resolve();
            })
            .catch((err) => {
                console.error("Error in API controller", err);
                reject(err);
            });
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
    
        popup.style.display = 'block'
    }
}

export function copyToClipboard(){
    if(mainData?.secret_key == undefined){
        navigator.clipboard.writeText(mainData?.text);
        // alert("Data Copied successfully!");
    }
    else{
        const encryptedDdata = `{\n  Secret Key: ${mainData?.secret_key}\n  Encrypted Data: ${mainData?.text}\n}`
        navigator.clipboard.writeText(encryptedDdata);
    }
    alert("Data Copied successfully!");
}

export function downloadBoth() {
    let text;
    
    if(mainData?.secret_key != undefined){
        text = `Secret Key: \n${mainData?.secret_key} \n \nYour Data: \n${mainData?.text} \n \n \n \n \n \nDecrypt this data at https://textlok.vercel.app/ or Dowload the chrome extension 'TextLok'\n\nDeveloper: Hamza Siddiqui\nEmail: hamza.siddiqui4747@gmail.com\nContact: +92 311 246 3375`;
    } else {
        text = `Your Data: \n${mainData?.text} \n \n \n \n \n \nThank you for using TextLok😇\n\nDeveloper: Hamza Siddiqui\nEmail: hamza.siddiqui4747@gmail.com\nContact: +92 311 246 3375`;
    }
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'encrypted_data.txt';
    link.click();
}