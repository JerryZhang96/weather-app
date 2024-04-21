import { WeatherData } from "@/lib/types";

type LogoProps = {
  weatherData: WeatherData;
};

type logoMapProps = {
  [key: string]: string;
};

// https://openweathermap.org/weather-conditions
const logoMap: logoMapProps = {
  "01d": "/src/assets/sun.png",
  "01n": "/src/assets/sun.png",
  "02d": "/src/assets/cloud.png",
  "02n": "/src/assets/cloud.png",
  "03d": "/src/assets/cloud.png",
  "03n": "/src/assets/cloud.png",
  "04d": "/src/assets/cloud.png",
  "04n": "/src/assets/cloud.png",
  "09d": "/src/assets/cloud.png",
  "09n": "/src/assets/cloud.png",
  "10d": "/src/assets/cloud.png",
  "10n": "/src/assets/cloud.png",
  "11d": "/src/assets/cloud.png",
  "11n": "/src/assets/cloud.png",
  "13d": "/src/assets/cloud.png",
  "13n": "/src/assets/cloud.png",
  "50d": "/src/assets/cloud.png",
  "50n": "/src/assets/cloud.png",
  default: "/src/assets/sun.png",
};

export function Logo({ weatherData }: LogoProps) {
  const icon = weatherData?.weather[0]?.icon;
  const src = logoMap[icon] || logoMap.default;
  const alt = weatherData?.weather[0]?.main;

  return (
    <div className="absolute -top-16 right-0 h-[157px] w-[157px] sm:-top-24 sm:h-[300px] sm:w-[300px]">
      <img src={src} alt={alt} />
    </div>
  );
}
