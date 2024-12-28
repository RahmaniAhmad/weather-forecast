import axios from "axios";

//TODO
//should call from an api to keep it secure but currently for this assessment I use it here
const API_KEY = "d052ee2d6729440a83d85149fda6d8af";

const BASE_URL = "https://api.weatherbit.io/v2.0";

export const getCurrentLocationWeather = async (lat: number, lon: number) => {
  const { data } = await axios.get(`${BASE_URL}/current`, {
    params: { lat, lon, key: API_KEY },
  });

  return data.data[0];
};

export const getCurrentLocationForecastByDays = async (
  lat: number,
  lon: number,
  days: number
) => {
  if (days < 1 || days > 15) {
    throw new Error("Invalid day number. Please pass a day between 1 and 15.");
  }

  const { data } = await axios.get(`${BASE_URL}/forecast/daily`, {
    params: { lat, lon, key: API_KEY },
  });

  return data.data.slice(1, +days + 1);
};

export const getCityWeather = async (city: string) => {
  const { data } = await axios.get(`${BASE_URL}/current`, {
    params: { city, key: API_KEY },
  });

  return data.data[0];
};

export const getCityForecastByDays = async (city: string, days: number) => {
  if (days < 1 || days > 15) {
    throw new Error("Invalid day number. Please pass a day between 1 and 15.");
  }

  const { data } = await axios.get(`${BASE_URL}/forecast/daily`, {
    params: { city, key: API_KEY },
  });

  return data.data.slice(1, +days + 1);
};

export const getHistoricalWeather = async (
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

  const { data } = await axios.get(`${BASE_URL}/history/daily`, {
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
