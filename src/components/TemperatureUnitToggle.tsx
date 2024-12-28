"use client";

import { useTemperatureUnit } from "@/hooks/useTemperatureUnit";

const TemperatureUnitToggle = () => {
  const { unit, setUnit } = useTemperatureUnit();

  const handleToggle = () => {
    const newUnit = unit === "C" ? "F" : "C";
    setUnit(newUnit);
  };

  return (
    <button
      onClick={handleToggle}
      className="bg-gray-500 text-white px-2  rounded"
    >
      {unit === "C" ? "°F" : "°C"}
    </button>
  );
};

export default TemperatureUnitToggle;
