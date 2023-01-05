import { API_KEY, ZIP_CODE } from "$env/static/private";

export async function load(){
    const fetchWeather = async () =>{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${ZIP_CODE}&appid=${API_KEY}&units=imperial`);
        const data = await res.json();
        return data;
    }
    const fetchBongo = async () =>{
        const res = await fetch(`https://bongo-gif-express.vercel.app/`);
        const data = await res.json();
        return data;
    }
    return {
        weather: fetchWeather(),
        bongoGif: fetchBongo()
    }
};