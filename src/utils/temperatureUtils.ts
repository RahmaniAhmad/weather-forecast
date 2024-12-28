export function formatCelsius(value: number, showSymbol?: boolean): string {
  const celsius = Math.round(value);
  return showSymbol ? `${celsius}°C` : `${celsius}`;
}

export function celsiusToFahrenheit(
  celsius: number,
  showSymbol?: boolean
): string {
  const fahrenheit = Math.round(celsius * (9 / 5) + 32);
  return showSymbol ? `${fahrenheit}°F` : `${fahrenheit}`;
}
