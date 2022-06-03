import React, { useEffect, useState } from 'react'

import Card from './Card'
import WeatherDetail from './WeatherDetail'

import '../styles/styles.css'

const Today = ({ weather }) => {
  const title = `Today's Forecast for ${weather.location.name}, ${weather.location.region}`
  const timeOfDay = { morning: 6, noon: 12, evening: 18, overnight: 0 }

  console.log(weather)

  return (
    <div>
      <div className="weather-detail">
        <p className="weather-heading">
          <span className="weather-city">
            {weather.location.name}, {weather.location.region}
          </span>
          <span> - As of 8:29pm</span>
        </p>
        <div className="weather-detail-content">
          <div className="weather-forecast">
            <p className="weather-forecast-temp">{weather.current.temp_f}°</p>
            <p className="weather-forecast-condition">
              {weather.current.condition.text}
            </p>
            <div className="weather-forecast-dn">
              <p>Low: {weather.forecast.forecastday[0].day.mintemp_f}°</p>
              <p>High: {weather.forecast.forecastday[0].day.maxtemp_f}°</p>
            </div>
          </div>
          <img
            className="weather-icon"
            src={weather.current.condition.icon}
            alt="weatherIcon"
          />
        </div>
      </div>
      <div className="day-forecast">
        <div className="day-forecast-overview">{title}</div>
        <div className="day-forecast-card">
          <Card
            timeOfDay="Morning"
            degree={weather.forecast.forecastday[0].hour[6].temp_f}
            icon={weather.forecast.forecastday[0].hour[6].condition.icon}
            precipitation={
              weather.forecast.forecastday[0].hour[6].chance_of_rain
            }
            precipIcon="//cdn.weatherapi.com/weather/64x64/day/308.png"
          />
          <Card
            timeOfDay="Noon"
            degree={weather.forecast.forecastday[0].hour[12].temp_f}
            icon={weather.forecast.forecastday[0].hour[12].condition.icon}
            precipitation={
              weather.forecast.forecastday[0].hour[12].chance_of_rain
            }
            precipIcon="//cdn.weatherapi.com/weather/64x64/day/308.png"
          />
          <Card
            timeOfDay="Evening"
            degree={weather.forecast.forecastday[0].hour[18].temp_f}
            icon={weather.forecast.forecastday[0].hour[18].condition.icon}
            precipitation={
              weather.forecast.forecastday[0].hour[18].chance_of_rain
            }
            precipIcon="//cdn.weatherapi.com/weather/64x64/day/308.png"
          />
          <Card
            timeOfDay="Overnight"
            degree={weather.forecast.forecastday[0].hour[0].temp_f}
            icon={weather.forecast.forecastday[0].hour[0].condition.icon}
            precipitation={
              weather.forecast.forecastday[0].hour[0].chance_of_rain
            }
            precipIcon="//cdn.weatherapi.com/weather/64x64/day/308.png"
          />
        </div>
      </div>
      <div className="day-detail">
        <WeatherDetail />
      </div>
    </div>
  )
}

export default Today
