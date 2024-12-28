"use client";

import HistoricalDetails from "./common/HistoricalDetails";
import { useCityHistoricalWeather } from "@/hooks/useCityHistoricalWeather";

type Props = {
  city: string;
};

const CityHistoricalWeather = ({ city }: Props) => {
  const { historicalWeather, loading, error } = useCityHistoricalWeather(
    city,
    +process.env.NEXT_PUBLIC_Historical_DAYS!
  );

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex items-center flex-col  p-4 bg-gray-200 dark:bg-gray-800 rounded">
      {loading && <p>Loading...</p>}
      {historicalWeather && (
        <HistoricalDetails historicalWeather={historicalWeather} />
      )}
    </div>
  );
};

export default CityHistoricalWeather;
