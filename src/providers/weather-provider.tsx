import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

import { fetchWeatherData } from "@/api/weather";
import { WeatherData } from "@/lib/types";
import { CACHE_DURATION } from "@/lib/constants";

type WeatherProviderProps = {
  children: React.ReactNode;
};

type WeatherProviderContext = {
  loading: boolean;
  weatherData: WeatherData | null;
  searchHistoryData: WeatherData[];
  getWeatherData: (city: string) => void;
  handleDeleteSearchHistory: (uuid: number) => void;
};

const initialState: WeatherProviderContext = {
  loading: false,
  weatherData: null,
  searchHistoryData: [],
  getWeatherData: () => null,
  handleDeleteSearchHistory: () => null,
};

export const WeatherProviderContext =
  createContext<WeatherProviderContext>(initialState);

const cache = new Map();

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [searchHistoryData, setSearchHistoryData] = useState<WeatherData[]>([]);

  const cacheWeatherData = async (city: string) => {
    const formattedCity = city.trim().toLowerCase();
    const cachedData = cache.get(formattedCity);

    if (cachedData && cachedData.expiration > Date.now()) {
      return cachedData.data;
    }

    const res = await fetchWeatherData({ city });
    const expiration = Date.now() + CACHE_DURATION;

    cache.set(formattedCity, { data: res.data, expiration });
    return res.data;
  };

  const getWeatherData = (city: string) => {
    setLoading(true);
    cacheWeatherData(city)
      .then((data) => {
        const newData = { ...data, uuid: uuidv4() };
        setWeatherData(newData);
        setSearchHistoryData((prevHistory) => [newData, ...prevHistory]);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message || "Internal Server Error");
      })
      .finally(() => setLoading(false));
  };

  const handleDeleteSearchHistory = (uuid: number) => {
    setSearchHistoryData((prevHistory) =>
      prevHistory.filter((item) => item.uuid !== uuid),
    );
  };

  useEffect(() => {
    const invalidateCacheInterval = setInterval(() => {
      cache.clear();
    }, CACHE_DURATION);

    return () => {
      clearInterval(invalidateCacheInterval);
    };
  }, []);

  const value = {
    weatherData,
    searchHistoryData,
    loading,
    getWeatherData,
    handleDeleteSearchHistory,
  };

  return (
    <WeatherProviderContext.Provider value={value}>
      {children}
    </WeatherProviderContext.Provider>
  );
}
