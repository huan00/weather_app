import React from 'react'

const Card = ({ timeOfDay, degree, icon, precipitation, precipIcon }) => {
  return (
    <div className="weather-card">
      <p className="weather-card-time weather-headline">{timeOfDay}</p>
      <p className="weather-card-temp">{degree}°</p>
      <img className="weather-card-icon" src={icon} alt="icon" />
      <p className="weather-card-precip">
        <img className="weather-card-precip-icon" src={precipIcon} />
        {precipitation}%
      </p>
    </div>
  )
}

export default Card
