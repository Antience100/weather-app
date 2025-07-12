import { getWeatherData } from "./weatherHandler.js";
import { displayWeather } from "./uiHandler.js";

export function setupEventListeners() {
  const searchBtn = document.querySelector(".search-btn");
  const searchText = document.getElementById("search-text");

  searchBtn.addEventListener("click", async () => {
    const city = searchText.value;
    if (city) {
      const data = await getWeatherData(city);
      displayWeather(data);
    }
  });

}
