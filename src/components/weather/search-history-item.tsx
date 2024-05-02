import { SearchIcon, DeleteIcon } from "@/components/icons";
import { IconButton } from "./icon-button";
import { City } from "./city";
import { Time } from "./time";
import { WeatherData } from "@/lib/types";
import { useWeather } from "@/hooks/useWeather";

type SearchHistoryItemProps = {
  item: WeatherData;
};

export function SearchHistoryItem({ item }: SearchHistoryItemProps) {
  const {
    loading,
    getWeatherData: onSearch,
    handleDeleteSearchHistory: onDelete,
  } = useWeather();

  return (
    <section className="mt-[26px] flex justify-between space-x-2 rounded-3xl bg-card/[.4] pb-[21px] pl-[21px] pr-[15px] pt-[21px] dark:bg-card/[.5]">
      <div className="flex flex-col sm:w-full sm:flex-row sm:items-center sm:justify-between">
        <City
          city={item.name}
          country={item.sys.country}
          classNames="text-sm md:text-base"
        />
        <Time
          timestamp={item?.dt}
          className="text-[10px] dark:text-white/[.5] sm:text-sm"
        />
      </div>
      <div className="flex items-center space-x-2">
        <IconButton disabled={loading} onClick={() => onSearch(item?.name)}>
          <SearchIcon className="h-4 w-4 text-gray-400" />
        </IconButton>
        <IconButton disabled={loading} onClick={() => onDelete(item?.uuid)}>
          <DeleteIcon className="h-4 w-4 text-gray-400" />
        </IconButton>
      </div>
    </section>
  );
}
