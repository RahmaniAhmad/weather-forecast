import DarkModeToggle from "@/components/DarkModeToggle";
import SearchCity from "@/components/SearchCity";
import TemperatureUnitToggle from "@/components/TemperatureUnitToggle";
import { TemperatureUnitProvider } from "@/context/TemperatureUnitContext";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Weather Forecast",
  description: "A modern weather app built with Next.js",
};
type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="space-y-2 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="system">
          <TemperatureUnitProvider>
            <div className="dark:bg-slate-950 space-x-2">
              <DarkModeToggle />
              <TemperatureUnitToggle />
            </div>
            <SearchCity />
            {children}
          </TemperatureUnitProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
