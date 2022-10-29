export const getWeatherData = async (city) => {
    try {
       await fetch(`
        https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=57a90a8fcac701e57c9c008de996f569
        `);
        return await response.json();
    } catch (error) {
        console.error(error)
    }
}