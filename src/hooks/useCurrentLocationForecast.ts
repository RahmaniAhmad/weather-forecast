import { useState, useEffect } from "react";
import { Forecast } from "@/models/Forecast";
import { getCurrentLocationForecastByDays } from "@/api/weatherApi";

export const useCurrentLocationForecast = (day: number) => {
  const [forecast, setForecast] = useState<Forecast[] | null>(null);
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

        const data = await getCurrentLocationForecastByDays(
          coords.latitude,
          coords.longitude,
          day
        );
        setForecast(data);
        setLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Unable to fetch current forecast data. Please try again.");
        setLoading(false);
      }
    };

    fetchWeather();
  }, [day]);

  return { forecast, loading, error };
};
