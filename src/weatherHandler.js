const API_KEY = "V6G393WTS5AMHVQ5WASLZEQQB";
const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

export async function getWeatherData(city) {
  const url = `${BASE_URL}${city}?unitGroup=metric&include=days&key=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.stats}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching weather data: ", error);
    return null;
  }
}
