import { WeatherData } from "@/lib/types";

type LogoProps = {
  weatherData: WeatherData;
};

type logoMapProps = {
  [key: string]: string;
};

// https://openweathermap.org/weather-conditions
const logoMap: logoMapProps = {
  "01d": "/assets/sun.png",
  "01n": "/assets/sun.png",
  "02d": "/assets/cloud.png",
  "02n": "/assets/cloud.png",
  "03d": "/assets/cloud.png",
  "03n": "/assets/cloud.png",
  "04d": "/assets/cloud.png",
  "04n": "/assets/cloud.png",
  "09d": "/assets/cloud.png",
  "09n": "/assets/cloud.png",
  "10d": "/assets/cloud.png",
  "10n": "/assets/cloud.png",
  "11d": "/assets/cloud.png",
  "11n": "/assets/cloud.png",
  "13d": "/assets/cloud.png",
  "13n": "/assets/cloud.png",
  "50d": "/assets/cloud.png",
  "50n": "/assets/cloud.png",
  default: "/assets/sun.png",
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
