export interface Forecast {
  city_name: string;
  temp: number;
  valid_date: string;
  weather: {
    description: string;
    icon: string;
  };
}
