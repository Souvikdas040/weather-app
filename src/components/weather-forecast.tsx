import type { ForecastData } from "@/api/types";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowDown, ArrowUp, Droplets, Wind } from "lucide-react";

interface WeatherForecastProps {
  data: ForecastData;
}

interface DailyForecast {
  date: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  wind: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
}

const WeatherForecast = ({ data }: WeatherForecastProps) => {
  const dailyForecasts = data.list.reduce((acc, forecast) => {
    const date = format(new Date(forecast.dt * 1000), "yyyy-MM-dd");

    if (!acc[date]) {
      acc[date] = {
        temp_min: forecast.main.temp_min,
        temp_max: forecast.main.temp_max,
        humidity: forecast.main.humidity,
        wind: forecast.wind.speed,
        weather: forecast.weather[0],
        date: forecast.dt,
      };
    } else {
      acc[date].temp_min = Math.min(acc[date].temp_min, forecast.main.temp_min);
      acc[date].temp_max = Math.max(acc[date].temp_max, forecast.main.temp_max);
    }

    return acc;
  }, {} as Record<string, DailyForecast>);

  const nextDays = Object.values(dailyForecasts).slice(0, 6);

  const formatTemp = (temp: number) => `${Math.round(temp)}°`;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">5-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {nextDays.map((day) => (
            <div
              key={day.date}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-6 rounded-xl border border-border p-4 shadow-sm"
            >
              {/* Date & Description */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 min-w-0 flex-grow">
                <div className="text-left">
                  <p className="font-semibold text-base sm:text-lg">
                    {format(new Date(day.date * 1000), "EEE, MMM d")}
                  </p>
                  <p className="text-sm text-muted-foreground capitalize">
                    {day.weather.description}
                  </p>
                </div>
              </div>

              {/* Temperature, Humidity, Wind */}
              <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
                <div className="flex items-center gap-1 text-blue-500">
                  <ArrowDown className="h-4 w-4" />
                  {formatTemp(day.temp_min)}
                </div>
                <div className="flex items-center gap-1 text-red-500">
                  <ArrowUp className="h-4 w-4" />
                  {formatTemp(day.temp_max)}
                </div>
                <div className="flex items-center gap-1 text-blue-400">
                  <Droplets className="h-4 w-4" />
                  {day.humidity}%
                </div>
                <div className="flex items-center gap-1 text-blue-400">
                  <Wind className="h-4 w-4" />
                  {day.wind} m/s
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherForecast;
