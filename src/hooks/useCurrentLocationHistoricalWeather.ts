import { useState, useEffect } from "react";
import { getHistoricalWeather } from "@/api/weatherApi";
import { HistoricalWeather } from "@/models/HistoricalWeather";

export const useCurrentLocationHistoricalWeather = () => {
  const [historicalWeather, setHistoricalWeather] =
    useState<HistoricalWeather | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const { coords } = await new Promise<GeolocationPosition>(
          (resolve, reject) =>
            navigator.geolocation.getCurrentPosition(resolve, reject)
        );

        const data = await getHistoricalWeather(
          coords.latitude,
          coords.longitude,
          7
        );
        setHistoricalWeather(data);
        setLoading(false);
      } catch {
        setError("Unable to fetch historical weather data. Please try again.");
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return { historicalWeather, loading, error };
};
