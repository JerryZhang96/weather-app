import { Suspense, useState, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import toast from "react-hot-toast";

import { ThemeProvider } from "@/providers/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { SearchInput } from "@/components/search-input";
import { ErrorFallback } from "@/components/error-fallback";
import { Loading } from "@/components/loading";
import { fetchWeatherData } from "@/api/weather";
import { WeatherData } from "@/lib/types";

const Weather = lazy(() => import("@/components/weather"));

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [searchHistoryData, setSearchHistoryData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(false);

  const getWeatherData = (city: string) => {
    setLoading(true);
    fetchWeatherData({ city })
      .then((res) => {
        const data = res.data;
        setWeatherData(data);
        setSearchHistoryData((prevHistory) => [data, ...prevHistory]);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      })
      .finally(() => setLoading(false));
  };

  const handleDeleteSearchHistory = (index: number) => {
    setSearchHistoryData((prevHistory) =>
      prevHistory.filter((_, idx) => idx !== index),
    );
  };

  return (
    <div className="relative h-screen overflow-y-scroll bg-weather-light bg-cover py-20 font-noto-sans dark:bg-weather-dark">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="mx-[18px] max-w-[700px] md:mx-auto">
          <ThemeToggle />
          <SearchInput loading={loading} onSearch={getWeatherData} />
          <ErrorBoundary fallbackRender={ErrorFallback}>
            <Suspense fallback={<Loading text="Loading..." />}>
              {weatherData && (
                <Weather
                  loading={loading}
                  weatherData={weatherData}
                  searchHistoryData={searchHistoryData}
                  onSearch={getWeatherData}
                  onDelete={handleDeleteSearchHistory}
                />
              )}
            </Suspense>
          </ErrorBoundary>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
