type CityProps = {
  classNames?: string;
  city: string;
  country: string;
};

export function City({ classNames, city, country }: CityProps) {
  return (
    <span className={classNames}>
      {city || "-"}, {country || "-"}
    </span>
  );
}
