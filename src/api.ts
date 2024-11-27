export async function apiCalling(payload:any){
    const url:string = 'https://textlok.vercel.app/api/encrypt';

    try{
        const res = await fetch(url, {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        let dataResponse = await res.json();
        return dataResponse;
    } catch(err){
        console.error(err);
        return "There is some error while fetching data";
    }
}