import { useState, useEffect } from "react";
import { Weather } from "@/models/Weather";
import { getCurrentLocationWeather } from "@/api/weatherApi";

export const useCurrentLocationWeather = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
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

        const data = await getCurrentLocationWeather(
          coords.latitude,
          coords.longitude
        );
        setWeather(data);
        setLoading(false);
      } catch {
        setError("Unable to fetch current weather data. Please try again.");
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return { weather, loading, error };
};
