import { useState, useEffect } from "react";
import { Forecast } from "@/models/Forecast";
import { getCityForecastByDays } from "@/api/weatherApi";

export const useCityForecast = (city: string, day: number) => {
  const [forecast, setForecast] = useState<Forecast[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!city) return;

    setLoading(true);
    getCityForecastByDays(city, day)
      .then((data) => {
        setForecast(data);
        setError("");
      })
      .catch(() => {
        setError("City not found!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [city, day]);

  return { forecast, loading, error };
};
