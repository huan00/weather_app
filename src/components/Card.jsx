import React from 'react'

const Card = ({ timeOfDay, degree, icon, precipitation }) => {
  return (
    <div className="weather-card">
      <p className="weather-card-time weather-headline">{timeOfDay}Moring</p>
      <p className="weather-card-temp">{degree}90°</p>
      <img
        className="weather-card-icon"
        src="http://openweathermap.org/img/w/10d.png"
        alt="icon"
      />
      <p className="weather-card-precip">
        {precipitation}
        <img
          className="weather-card-precip-icon"
          src="http://openweathermap.org/img/w/10d.png"
        />
        6%
      </p>
    </div>
  )
}

export default Card
