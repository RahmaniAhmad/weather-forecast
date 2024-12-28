"use client";

import CityWeather from "@/components/CityWeather";
import ErrorBoundary from "@/components/ErrorBoundary";
import CityDaysForecast from "@/components/CityDaysForecast";
import { useEffect, useState } from "react";

interface PageProps {
  params: Promise<{ city: string }>;
}

const Page = ({ params }: PageProps) => {
  const [showSevenDaysForecast, setShowSevenDaysForecast] = useState(false);
  const [resolvedParams, setResolvedParams] = useState<{ city: string } | null>(
    null
  );

  useEffect(() => {
    params.then((resolved) => {
      setResolvedParams(resolved);
    });
  }, [params]);

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4 space-y-2">
        <button onClick={() => setShowSevenDaysForecast(true)}>
          Show 7-days forecast
        </button>
        {resolvedParams?.city && <CityWeather city={resolvedParams.city} />}
        {showSevenDaysForecast && resolvedParams?.city && (
          <CityDaysForecast city={resolvedParams?.city} />
        )}
      </div>
    </ErrorBoundary>
  );
};

export default Page;
