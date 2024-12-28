"use client";

import CurrentLocationWeather from "@/components/CurrentLocationWeather";
import ErrorBoundary from "@/components/ErrorBoundary";
import CurrentLocatonDaysForecast from "@/components/CurrentLocatonDaysForecast";
import { useState } from "react";
import HistoricalWeather from "@/components/HistoricalWeather";

const Page = () => {
  const [showSevenDaysForecast, setShowSevenDaysForecast] = useState(false);

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4 space-y-2">
        <button onClick={() => setShowSevenDaysForecast(true)}>
          Show 7-days forecast
        </button>
        <button onClick={() => setShowSevenDaysForecast(true)}>History</button>
        <CurrentLocationWeather />
        {showSevenDaysForecast && <CurrentLocatonDaysForecast />}
        <HistoricalWeather />
      </div>
    </ErrorBoundary>
  );
};

export default Page;
