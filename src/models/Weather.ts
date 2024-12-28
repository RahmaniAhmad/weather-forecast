export interface Weather {
  city_name: string;
  temp: number;
  ob_time: string;
  weather: {
    description: string;
    icon: string;
  };
}
