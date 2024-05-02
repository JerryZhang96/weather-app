import { useWeather } from "@/hooks/useWeather";

type logoMapProps = {
  [key: string]: string;
};

const sunLogoPath = "/assets/sun.png";
const cloudLogoPath = "/assets/cloud.png";

// https://openweathermap.org/weather-conditions
const logoMap: logoMapProps = {
  "01d": sunLogoPath,
  "01n": sunLogoPath,
  "02d": cloudLogoPath,
  "02n": cloudLogoPath,
  "03d": cloudLogoPath,
  "03n": cloudLogoPath,
  "04d": cloudLogoPath,
  "04n": cloudLogoPath,
  "09d": cloudLogoPath,
  "09n": cloudLogoPath,
  "10d": cloudLogoPath,
  "10n": cloudLogoPath,
  "11d": cloudLogoPath,
  "11n": cloudLogoPath,
  "13d": cloudLogoPath,
  "13n": cloudLogoPath,
  "50d": cloudLogoPath,
  "50n": cloudLogoPath,
  default: sunLogoPath,
};

export function Logo() {
  const { weatherData } = useWeather();

  if (!weatherData) return;

  const icon = weatherData?.weather[0]?.icon;
  const src = logoMap[icon] || logoMap.default;
  const alt = weatherData?.weather[0]?.main;

  return (
    <div className="absolute -top-16 right-0 h-[157px] w-[157px] sm:-top-24 sm:h-[300px] sm:w-[300px]">
      <img src={src} alt={alt} />
    </div>
  );
}
