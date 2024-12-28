"use client";

import ForecastDetails from "./common/ForecastDetails";
import { useCurrentLocationForecast } from "@/hooks/useCurrentLocationForecast";

const CurrentLocatonDaysForecast = () => {
  const { forecast, loading, error } = useCurrentLocationForecast(
    +process.env.NEXT_PUBLIC_FORECAST_DAYS!
  );

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex items-center flex-col  p-4 bg-gray-200 dark:bg-gray-800 rounded">
      {loading && <p>Loading...</p>}
      {!loading && forecast && <ForecastDetails forecasts={forecast} />}
    </div>
  );
};

export default CurrentLocatonDaysForecast;
