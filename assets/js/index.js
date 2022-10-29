import { getWeatherData } from "./api.js"
import { createHeader } from "./appHeader.js";

const app = async () => {
    const weather = await getWeatherData('Батайск');
    const header = createHeader(weather.name)

    document.body.append(header)

    console.log(weather)
}

app()