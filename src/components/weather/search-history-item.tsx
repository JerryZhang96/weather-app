import { Button } from "@/components/ui/button";
import { SearchIcon, DeleteIcon } from "@/components/icons";
import { City } from "./city";
import { Time } from "./time";
import { WeatherData } from "@/lib/types";

type SearchHistoryItemProps = {
  loading: boolean;
  item: WeatherData;
  index: number;
  onSearch: (city: string) => void;
  onDelete: (index: number) => void;
};

export function SearchHistoryItem({
  loading,
  item,
  index,
  onSearch,
  onDelete,
}: SearchHistoryItemProps) {
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
        <IconButton disabled={loading} onClick={() => onDelete(index)}>
          <DeleteIcon className="h-4 w-4 text-gray-400" />
        </IconButton>
      </div>
    </section>
  );
}

type IconButtonProps = {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
};

const IconButton = ({ onClick, disabled, children }: IconButtonProps) => (
  <Button
    type="submit"
    size="icon"
    className="h-[34px] w-[34px] rounded-full bg-white shadow-[0px_4px_12px_0px_#0000001A] hover:bg-white/[.4] dark:border-2 dark:border-white/[.4] dark:bg-card/[.5] dark:shadow-none"
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default IconButton;
