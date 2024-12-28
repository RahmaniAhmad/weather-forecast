"use client";

import React, { createContext, useState } from "react";

type TemperatureUnit = "C" | "F";

export const TemperatureUnitContext = createContext<
  | {
      unit: TemperatureUnit;
      setUnit: (unit: TemperatureUnit) => void;
    }
  | undefined
>(undefined);

export const TemperatureUnitProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [unit, setUnit] = useState<TemperatureUnit>("C");

  return (
    <TemperatureUnitContext.Provider value={{ unit, setUnit }}>
      {children}
    </TemperatureUnitContext.Provider>
  );
};
