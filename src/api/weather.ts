import request from "@/lib/api";

const fetchWeatherData = (data: { city: string }) => {
  return request({
    method: "get",
    params: {
      q: data.city,
      units: "metric",
      APPID: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
    },
  });
};

export { fetchWeatherData };
