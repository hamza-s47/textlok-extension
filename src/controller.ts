import { apiCalling } from "./api";

export function element(id:string):HTMLElement | null {
    const el:HTMLElement | null = document.querySelector(id);

    if (!el) {
        console.error(`Element with id "${id}" not found.`);
    }
   
    return el;
}

export function boxToggle(show: HTMLElement, hide: HTMLElement): void {
    hide.classList.add('hidden');
    show.classList.remove('hidden');
}

export function fetchFormData(event:Event, isEncrypt:boolean): void{
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    let payload;

    if(isEncrypt){
        payload = {
            plainText:formData.get('text'),
            isEncrypt:isEncrypt
        }
    } else {
        payload = {
            encryptedText:formData.get('text'),
            key:formData.get('key'),
            isEncrypt:isEncrypt
        }

    }
    apiCalling(payload).then((res)=>{
        console.warn(res.data);
    }).catch(err =>{
        console.error("Error in API controller", err);
    });
}   