import React from "react";

interface Props {
  onShowSevenDaysForecast: () => void;
  onShowHistoricalWeather: () => void;
}

const WeatherViewSelector = ({
  onShowSevenDaysForecast,
  onShowHistoricalWeather,
}: Props) => {
  return (
    <div className="space-x-4 mb-4 w-full">
      <button
        className="bg-gray-500 text-white px-2 rounded"
        onClick={onShowSevenDaysForecast}
      >
        Show 7-days forecast
      </button>
      <button
        className="bg-gray-500 text-white px-2 rounded"
        onClick={onShowHistoricalWeather}
      >
        Show 7-days historical weather
      </button>
    </div>
  );
};

export default WeatherViewSelector;
