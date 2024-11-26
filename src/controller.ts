import { apiCalling } from "./api";

export function element(id:string){
    const el:HTMLElement | null = document.querySelector(id);
   
    return el;
}

export function boxToggle(show: HTMLElement, hide: HTMLElement) {
    hide.classList.add('hidden');
    show.classList.remove('hidden');
}

// function fetchFormData(){
//     const encryptForm = element('#e-form');
//     const decryptForm = element('#d-form');

//     if(encryptForm){
//         console.warn(encryptForm.target.value)
//     }

    


// }