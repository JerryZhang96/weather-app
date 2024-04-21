import request from "@/lib/api";

/**
 * Fetches weather data from the OpenWeather API.
 *
 * @param {object} data - An object containing the city name.
 * @param {string} data.city - The name of the city for which to fetch weather data.
 *
 * @returns {Promise} A promise that resolves with the weather data.
 */
const fetchWeatherData = (data: { city: string }) => {
  return request({
    method: "get",
    params: {
      q: data.city,
      units: "metric", // Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default.
      APPID: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
    },
  });
};

export { fetchWeatherData };
