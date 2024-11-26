export async function apiCalling(payload:any){
    const url:string = 'https://textlok.vercel.app/api/encrypt';

    const res = await fetch(url, {
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload
    });
    let dataResponse = await res.json();
    return dataResponse;
}