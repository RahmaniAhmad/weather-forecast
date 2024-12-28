import { useTemperatureUnit } from "@/hooks/useTemperatureUnit";
import { Weather } from "@/models/Weather";
import { celsiusToFahrenheit, formatCelsius } from "@/utils/temperatureUtils";

type Props = {
  weather: Weather;
};
const WeatherDetails = ({ weather }: Props) => {
  const { unit } = useTemperatureUnit();

  return (
    <>
      <h2 className="text-xl font-bold">Current Weather</h2>
      <p>{weather.city_name}</p>
      <p>{weather.ob_time}</p>
      <p>
        {unit == "C"
          ? formatCelsius(weather.temp, true)
          : celsiusToFahrenheit(weather.temp, true)}
      </p>
      <p>{weather.weather.description}</p>
      <img
        src={`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`}
        alt={weather.weather.description}
      />
    </>
  );
};
export default WeatherDetails;
