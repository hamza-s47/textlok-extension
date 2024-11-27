// import { apiCalling } from "./api";

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

export function fetchFormData(form:HTMLElement): void{
    const formData = new FormData(form as HTMLFormElement);

    formData.forEach((value, key) => {
        console.warn(`${key}: ${value}`);
    });
}