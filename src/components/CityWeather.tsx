"use client";
import WeatherDetails from "./common/WeatherDetails";
import { useCityWeather } from "@/hooks/useCityWeather";

type Props = {
  city: string;
};

const CityWeather = ({ city }: Props) => {
  const { weather, loading, error } = useCityWeather(city);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex items-center flex-col p-4 bg-gray-200 dark:bg-gray-800 rounded">
      {loading && <p>Loading...</p>}
      {weather && <WeatherDetails weather={weather} />}
    </div>
  );
};

export default CityWeather;
