import { SearchHistoryItem } from "./search-history-item";
import { WeatherData } from "@/lib/types";

type SearchHistoryListProps = {
  loading: boolean;
  searchHistoryData: WeatherData[];
  onSearch: (city: string) => void;
  onDelete: (index: number) => void;
};

export default function SearchHistoryList({
  loading,
  searchHistoryData,
  onSearch,
  onDelete,
}: SearchHistoryListProps) {
  return (
    <section className="mt-[26px] max-h-[450px] overflow-y-scroll rounded-3xl bg-card/[.2] px-5 py-[23px] dark:bg-card/[.3] sm:py-[22px] sm:pl-[17px] sm:pr-[13px]">
      <h2 className="text-sm md:text-base">Search History</h2>
      {searchHistoryData.map((item, index) => (
        <SearchHistoryItem
          key={index}
          loading={loading}
          item={item}
          index={index}
          onSearch={onSearch}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}
