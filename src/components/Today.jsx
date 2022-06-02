import React, { useEffect, useState } from 'react'
import { getWeather } from '../utils/Services'
import Card from './Card'
import '../styles/styles.css'
import WeatherDetail from './WeatherDetail'

const Today = ({}) => {
  const title = "Today's Forecast for Austin, City"
  const time = 'current'
  const [weather, setWeather] = useState({})
  const [location, setLocation] = useState('')

  useEffect(() => {
    getLocation()
    getTodayWeather()
  }, [location])

  const getTodayWeather = async () => {
    if (location) {
      // setWeather(await getWeather(location.lat, location.lon, time))
      console.log('hello')
    }
  }

  const getLocation = () => {
    if (!location) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        })
      })
    }
  }
  console.log(location)

  return (
    <div>
      <div className="weather-detail">
        <p className="weather-heading">
          <span className="weather-city">Austin, Tx: </span>
          <span> As of 8:29pm</span>
        </p>
        <div className="weather-detail-content">
          <div className="weather-forecast">
            <p className="weather-forecast-temp">85°</p>
            <p className="weather-forecast-condition">Clear</p>
            <div className="weather-forecast-dn">
              <p>Day 94</p>
              <p>Night 74</p>
            </div>
          </div>
          <img
            className="weather-icon"
            src="http://openweathermap.org/img/w/10d.png"
            alt="weatherIcon"
          />
        </div>
      </div>
      <div className="day-forecast">
        <div className="day-forecast-overview">{title}</div>
        <div className="day-forecast-card">
          <Card />
          <hr></hr>
          <Card />
          <hr></hr>
          <Card />
          <hr></hr>
          <Card />
        </div>
      </div>
      <div className="day-detail">
        <WeatherDetail />
      </div>
    </div>
  )
}

export default Today
