export interface HistoricalWeather {
  city_name: string;
  data: [
    {
      datetime: string;
      min_temp: string;
      max_temp: string;
    }
  ];
}
