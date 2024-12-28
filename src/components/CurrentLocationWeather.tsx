"use client";

import CurrentWeatherDetails from "./common/WeatherDetails";
import { useCurrentLocationWeather } from "@/hooks/useCurrentLocationWeather";

const CurrentLocationWeather = () => {
  const { weather, loading, error } = useCurrentLocationWeather();

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex items-center flex-col  p-4 bg-gray-200 dark:bg-gray-800 rounded">
      {loading && <p>Loading...</p>}
      {weather && <CurrentWeatherDetails weather={weather} />}
    </div>
  );
};

export default CurrentLocationWeather;
