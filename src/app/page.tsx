"use client";

import CurrentLocationWeather from "@/components/CurrentLocationWeather";
import CurrentLocatonDaysForecast from "@/components/CurrentLocatonDaysForecast";
import { useState } from "react";
import HistoricalWeather from "@/components/CurrentHistoricalWeather";
import WeatherViewSelector from "@/components/common/WeatherViewSelector";

const Page = () => {
  const [showSevenDaysForecast, setShowSevenDaysForecast] = useState(false);
  const [showHistoricalWeather, setShowHistoricalWeather] = useState(false);

  return (
    <div className="container mx-auto p-4 space-y-2">
      <WeatherViewSelector
        onShowSevenDaysForecast={() => setShowSevenDaysForecast(true)}
        onShowHistoricalWeather={() => setShowHistoricalWeather(true)}
      />
      <CurrentLocationWeather />
      {showSevenDaysForecast && <CurrentLocatonDaysForecast />}
      {showHistoricalWeather && <HistoricalWeather />}
    </div>
  );
};

export default Page;
