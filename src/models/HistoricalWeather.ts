export interface HistoricalWeather {
  city_name: string;
  data: [
    {
      datetime: string;
      min_temp: number;
      max_temp: number;
    }
  ];
}
