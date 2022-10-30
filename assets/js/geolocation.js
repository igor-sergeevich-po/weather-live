import { getWeatherData } from "./api.js";
import { resetWeatherContent } from "./helper.js";

export const handleWeatherByGeolocation = () => {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    }

    const success = async (pos) => {
        const crd = pos.coords;

        const response = await fetch(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&lang=ru&apiKey=4ada1ed8a6694bbb816a6614162f9cb0`
            )
        const rezult = await response.json();
        console.log(rezult);

        const weather = await getWeatherData(rezult.features[0].properties.city);

        resetWeatherContent(rezult.features[0].properties.city, weather)
    }

    const error = (error) => console.log(error.code + ' ' + error.message);

    navigator.geolocation.getCurrentPosition(success, error, options)
}