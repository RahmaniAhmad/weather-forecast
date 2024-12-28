import { useState, useEffect } from "react";
import { Weather } from "@/models/Weather";
import { getCityWeather } from "@/api/weatherApi";

export const useCityWeather = (city: string) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!city) return;

    setLoading(true);
    getCityWeather(city)
      .then((data) => {
        setWeather(data);
        setError("");
      })
      .catch(() => {
        setError("City not found!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [city]);

  return { weather, loading, error };
};
