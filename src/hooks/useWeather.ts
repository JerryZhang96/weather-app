import { useContext } from "react";

import { WeatherProviderContext } from "@/providers/weather-provider";

export const useWeather = () => {
  const context = useContext(WeatherProviderContext);

  if (context === undefined)
    throw new Error("useWeather must be used within a WeatherProvider");

  return context;
};
