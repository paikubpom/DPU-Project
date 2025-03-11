import React, { useEffect, useState } from "react"

const API_KEY = '44ebd3943bdec2f7872232e75ddc9721'

const Dashboard = ({city}) => {
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        setWeatherData({
          temperature: data.main.temp,
          description: data.weather[0].description,
          city: data.name,
          humidity: data.main.humidity,
        });
      } catch (error) {
        console.error("Eror fetching weather data", error);
      }
    };
    fetchWeather();
  }, [city]);

  return (
    <div className="dashboard">
      <div className="weather">
        <h2>Weather</h2>
        {weatherData.temperature !== null ? (
          <>
            <p>City: {weatherData.city}</p>
            <p>Temperature: {weatherData.temperature}°C</p>
            <p>Humidity: {weatherData.humidity}%</p>
            <p>Description: {weatherData.description}</p>
          </>
        ) : (
          <p>Loading weather ...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;