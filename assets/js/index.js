import { getWeatherData } from "./api.js"

const app = async () => {
    const weather = await getWeatherData('Батайск');
    console.log(weather)
}

app()