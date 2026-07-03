import React, { useState, useEffect } from "react";

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          
          const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,weather_code`
          );
          const data = await res.json();
          setWeather(data.current);
        } catch (err) {
          setError("Failed to fetch weather data");
        }
      },
      () => setError("Location access denied")
    );
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100 mt-6">
      <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
        ☀️ Local Weather Update
      </h3>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {weather ? (
        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="text-3xl font-extrabold text-gray-900">{weather.temperature_2m}°C</p>
            <p className="text-xs text-gray-400 mt-1">Wind Speed: {weather.wind_speed_10m} km/h</p>
          </div>
          <span className="text-4xl">
            {weather.weathercode <= 3 ? "🌤️" : weather.weather_code <= 65 ? "🌧️" : "⛈️"}
          </span>
        </div>
      ) : (
        !error && <p className="text-sm text-gray-500 animate-pulse">Locating your coordinates...</p>
      )}
    </div>
  );
}
