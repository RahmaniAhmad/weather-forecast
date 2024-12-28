import { useTemperatureUnit } from "@/hooks/useTemperatureUnit";
import { HistoricalWeather } from "@/models/HistoricalWeather";
import { celsiusToFahrenheit, formatCelsius } from "@/utils/temperatureUtils";

type Props = {
  historicalWeather: HistoricalWeather;
};

const HistoricalDetails = ({ historicalWeather }: Props) => {
  const { unit } = useTemperatureUnit(); // Access the temperature unit from context

  return (
    <>
      <h2 className="text-xl font-bold">
        {historicalWeather.data.length} Historical
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {historicalWeather.data.map((item) => (
          <div
            key={item.datetime}
            className="p-4 bg-gray-200 dark:bg-gray-800 rounded"
          >
            <p>{item.datetime}</p>
            <p>
              Min:{" "}
              {unit == "C"
                ? formatCelsius(item.min_temp, true)
                : celsiusToFahrenheit(item.min_temp, true)}
            </p>
            <p>
              Max:{" "}
              {unit == "C"
                ? formatCelsius(item.max_temp, true)
                : celsiusToFahrenheit(item.max_temp, true)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
export default HistoricalDetails;
