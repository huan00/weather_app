import React from 'react'

const WeatherDetail = ({ weather }) => {
  return (
    <div className="weatherDay">
      <div className="weatherDay-location weather-headline">
        Weather Today in {weather.location.name}, {weather.location.region}
      </div>
      <div className="weatherDay-overview">
        <div className="weatherDay-temp">
          <p>{weather.current.feelslike_f}°</p>
          <p className="weatherDay-condition">Feels Like</p>
        </div>
        <div className="weatherDay-sun">
          <p>{weather.forecast.forecastday[0].astro.sunrise}</p>
          <p>{weather.forecast.forecastday[0].astro.sunset}</p>
        </div>
      </div>
      <div className="weatherDay-detail">
        <div className="weatherDay-detail-overview">
          <div>
            <div>High/Low</div>
            <div>
              {weather.forecast.forecastday[0].day.mintemp_f}°/
              {weather.forecast.forecastday[0].day.maxtemp_f}°
            </div>
          </div>
          <div>
            <div>Humidity</div>
            <div>{weather.current.humidity}%</div>
          </div>
          <div>
            <div>Pressure</div>
            <div>{weather.current.pressure_in} in</div>
          </div>
          <div>
            <div>Visibility</div>
            <div>{weather.current.vis_miles} mi</div>
          </div>
        </div>
        <div className="weatherDay-detail-overview">
          <div>
            <div>Avg Temp</div>
            <div>{weather.forecast.forecastday[0].day.avgtemp_f}°</div>
          </div>
          <div>
            <div>Wind</div>
            <div>{weather.current.wind_mph} mph</div>
          </div>
          <div>
            <div>UV Index</div>
            <div>{weather.forecast.forecastday[0].day.uv} of 10</div>
          </div>
          <div>
            <div>Moon Phase</div>
            <div>{weather.forecast.forecastday[0].astro.moon_phase}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherDetail
