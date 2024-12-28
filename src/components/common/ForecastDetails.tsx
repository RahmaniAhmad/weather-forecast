import { useTemperatureUnit } from "@/hooks/useTemperatureUnit";
import { Forecast } from "@/models/Forecast";
import { celsiusToFahrenheit, formatCelsius } from "@/utils/temperatureUtils";

type Props = {
  forecasts: Forecast[];
};

const ForecastDetails = ({ forecasts }: Props) => {
  const { unit } = useTemperatureUnit(); // Access the temperature unit from context

  return (
    <>
      <h2 className="text-xl font-bold">{forecasts.length} Days Forecast</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
        {forecasts.map((day) => (
          <div
            key={day.valid_date}
            className="p-4 bg-gray-200 dark:bg-gray-800 rounded"
          >
            <p>{day.valid_date}</p>
            {unit == "C"
              ? formatCelsius(day.temp, true)
              : celsiusToFahrenheit(day.temp, true)}

            <img
              src={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`}
              alt={day.weather.description}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default ForecastDetails;
