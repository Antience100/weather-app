export function displayWeather(weatherData) {
  if (!weatherData) {
    document.querySelector(".information-section").computedStyleMap.display =
      "none";
    return;
  }

  const iconClassMap = {
    "clear-day": "wi-day-sunny",
    "clear-night": "wi-night-clear",
    "partly-cloudy-day": "wi-day-cloudy",
    cloudy: "wi-cloudy",
    rain: "wi-rain",
    snow: "wi-snow",
  };

  const weatherIcon = weatherData.days[0].icon;
  const iconElement = document.getElementById("weather-icon");
  iconElement.className = `wi ${iconClassMap[weatherIcon] || "wi-na"}`;

  document.getElementById("city-name").textContent =
    weatherData.resolvedAddress;
  document.getElementById("current-temp").textContent =
    "Current: " + weatherData.days[0].temp + "°C";
  document.getElementById("max-temp").textContent =
    "High: " + weatherData.days[0].tempmax + "°C";
  document.getElementById("min-temp").textContent =
    "Low: " + weatherData.days[0].tempmin + "°C";
  document.getElementById("weather-condition").textContent =
    weatherData.days[0].conditions;
  document.getElementById("sunrise").textContent =
    "Sunrise: " + weatherData.days[0].sunrise + " A.M.";
  document.getElementById("sunset").textContent =
    "Sunset: " + weatherData.days[0].sunset + " P.M.";

  getWeatherGif(weatherIcon);
}

async function getWeatherGif(icon) {
  const img = document.getElementById("weather-gif");
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=gyS64knJwpoJQS5Lbl24Nl3eqIxh04XS&s=" +
        icon,
      { mode: "cors" }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    img.src = data.data.images.original.url;
  } catch (error) {
    console.error("Error fetching GIF:", error);
  }
}
