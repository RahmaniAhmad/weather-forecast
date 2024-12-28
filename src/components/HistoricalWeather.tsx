"use client";

import { useCurrentLocationHistoricalWeather } from "@/hooks/useCurrentLocationHistoricalWeather";

const HistoricalWeather = () => {
  const { historicalWeather, loading, error } =
    useCurrentLocationHistoricalWeather();

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex items-center flex-col  p-4 bg-gray-200 dark:bg-gray-800 rounded">
      {loading && <p>Loading...</p>}
      {historicalWeather && <p>{historicalWeather.city_name}</p>}
    </div>
  );
};

export default HistoricalWeather;
