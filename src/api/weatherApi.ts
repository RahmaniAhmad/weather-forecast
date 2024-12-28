import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const getCurrentLocationWeather = async (lat: number, lon: number) => {
  const { data } = await axios.get(`${BASE_API_URL}/current`, {
    params: { lat, lon, key: API_KEY },
  });

  return data.data[0];
};

export const getCurrentLocationForecastByDays = async (
  lat: number,
  lon: number,
  days: number
) => {
  const { data } = await axios.get(`${BASE_API_URL}/forecast/daily`, {
    params: { lat, lon, key: API_KEY },
  });

  return data.data.slice(1, +days + 1);
};

export const getCurrentLocationHistoricalWeather = async (
  lat: number,
  lon: number,
  days: number
) => {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - days);

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const { data } = await axios.get(`${BASE_API_URL}/history/daily`, {
    params: {
      lat,
      lon,
      key: API_KEY,
      start_date: formatDate(startDate),
      end_date: formatDate(endDate),
    },
  });

  return data;
};

export const getCityWeather = async (city: string) => {
  const { data } = await axios.get(`${BASE_API_URL}/current`, {
    params: { city, key: API_KEY },
  });

  return data.data[0];
};

export const getCityForecastByDays = async (city: string, days: number) => {
  const { data } = await axios.get(`${BASE_API_URL}/forecast/daily`, {
    params: { city, key: API_KEY },
  });

  return data.data.slice(1, +days + 1);
};

export const getCityHistoricalWeather = async (city: string, days: number) => {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - days);

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const { data } = await axios.get(`${BASE_API_URL}/history/daily`, {
    params: {
      key: API_KEY,
      city: city,
      start_date: formatDate(startDate),
      end_date: formatDate(endDate),
    },
  });

  return data;
};
