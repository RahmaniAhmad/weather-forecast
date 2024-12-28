import { useState, useEffect } from "react";
import { HistoricalWeather } from "@/models/HistoricalWeather";
import { getCityHistoricalWeather } from "@/api/weatherApi";

export const useCityHistoricalWeather = (city: string, days: number) => {
  const [historicalWeather, setHistoricalWeather] =
    useState<HistoricalWeather | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);

        const data = await getCityHistoricalWeather(city, days);
        setHistoricalWeather(data);
        setLoading(false);
      } catch {
        setError("Unable to fetch historical weather data. Please try again.");
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, days]);

  return { historicalWeather, loading, error };
};
