import { City } from "./city";
import { Time } from "./time";
import { formatNumber } from "@/lib/utils";
import { useWeather } from "@/hooks/useWeather";

export function Info() {
  const { weatherData } = useWeather();

  if (!weatherData) return;

  return (
    <section>
      <h2 className="text-sm md:text-base">Today's Weather</h2>
      <h1 className="text-6xl text-primary dark:text-white md:text-8xl">
        <strong>{formatNumber(weatherData?.main?.temp)}&deg;</strong>
      </h1>
      <span className="text-sm md:text-base">
        H: {formatNumber(weatherData?.main?.temp_max)}&deg; L:
        {formatNumber(weatherData?.main?.temp_min)}
        &deg;
      </span>
      <div className="flex justify-between gap-10 text-gray-500 dark:text-white">
        <City
          city={weatherData?.name}
          country={weatherData?.sys?.country}
          classNames="font-bold text-sm md:text-base"
        />
        <div className="-mt-10 flex flex-1 flex-col-reverse justify-between text-right sm:mt-0 sm:flex-row">
          <Time timestamp={weatherData?.dt} className="text-sm md:text-base" />
          <span className="text-sm md:text-base">
            Humidity: {weatherData?.main?.humidity || "-"}%
          </span>
          <span className="text-sm md:text-base">
            {weatherData?.weather[0]?.main || "-"}
          </span>
        </div>
      </div>
    </section>
  );
}
