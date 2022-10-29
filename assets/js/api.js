export const getWeatherData = async (city) => {
    try {
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=57a90a8fcac701e57c9c008de996f569&lang=ru`);
        return await response.json();
    } catch (error) {
        console.log(error)
    }
}