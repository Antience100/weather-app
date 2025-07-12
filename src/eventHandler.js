import { getWeatherData } from "./weatherHandler";

export function setupEventListeners() {
  const searchBtn = document.querySelector(".search-btn");
  const searchText = document.getElementById("search-text");

  searchBtn.addEventListener("click", async () => {
    const city = searchText.value;
    if (city) {
      const data = await getWeatherData(city);
      console.log(data.days[0]);
    }
  });
}
