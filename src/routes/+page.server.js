import { API_KEY, ZIP_CODE, BONGO_SERVE } from "$env/static/private";

export async function load(){
    const fetchBongo = async () =>{
        const res = await fetch(`${BONGO_SERVE}bongoGif`);
        const data = await res.json();

        var jsonLength = Object.keys(data).length;
        const randomGif = Math.floor(Math.random() * (jsonLength - 1 + 1) ) + 1;
        const bongoURL = data["gif"+randomGif+":"];
        return bongoURL;
    }
    const fetchWeather = async () =>{
        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=4d402858afd64660a32193053230801&q=98007&aqi=no`);
        const data = await res.json();
        return data;
    }
    const fetchBookmarks = async() =>{
        const res = await fetch(`${BONGO_SERVE}bookmarks`);
        const data = await res.json();
        return data;
    }
    const fetchSearchProviders = async() =>{
        const res = await fetch(`${BONGO_SERVE}searchProvider`);
        const data = await res.json();
        return data;
    }

    return {
        bongoGif: fetchBongo(),
        weather: fetchWeather(),
        bookmarks: fetchBookmarks(),
        searchProviders: fetchSearchProviders(),
        server: BONGO_SERVE,
    }
};