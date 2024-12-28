"use client";

import CityWeather from "@/components/CityWeather";
import CityDaysForecast from "@/components/CityDaysForecast";
import { useEffect, useState } from "react";
import CityHistoricalWeather from "@/components/CityHistoricalWeather";
import WeatherViewSelector from "@/components/common/WeatherViewSelector";

interface PageProps {
  params: Promise<{ city: string }>;
}

const Page = ({ params }: PageProps) => {
  const [showSevenDaysForecast, setShowSevenDaysForecast] = useState(false);
  const [showHistoricalWeather, setShowHistoricalWeather] = useState(false);
  const [resolvedParams, setResolvedParams] = useState<{ city: string } | null>(
    null
  );

  useEffect(() => {
    params.then((resolved) => {
      setResolvedParams(resolved);
    });
  }, [params]);

  return (
    <div className="container mx-auto p-4 space-y-2">
      <WeatherViewSelector
        onShowSevenDaysForecast={() => setShowSevenDaysForecast(true)}
        onShowHistoricalWeather={() => setShowHistoricalWeather(true)}
      />
      {resolvedParams?.city && <CityWeather city={resolvedParams.city} />}
      {showSevenDaysForecast && resolvedParams?.city && (
        <CityDaysForecast city={resolvedParams?.city} />
      )}
      {showHistoricalWeather && resolvedParams?.city && (
        <CityHistoricalWeather city={resolvedParams?.city} />
      )}
    </div>
  );
};

export default Page;
