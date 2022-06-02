import React from 'react'

const WeatherDetail = ({ title, condition, sunrise, sunset }) => {
  return (
    <div className="weatherDay">
      <div className="weatherDay-location weather-headline">
        {title}Weather Today in Austin, Tx
      </div>
      <div className="weatherDay-overview">
        <div className="weatherDay-temp">
          <p>90°</p>
          <p className="weatherDay-condition">{condition}Feels Like</p>
        </div>
        <div className="weatherDay-sun">
          <p>{sunrise}6:29am</p>
          <p>{sunset}8:28pm</p>
        </div>
      </div>
      <div className="weatherDay-detail">
        <div className="weatherDay-detail-overview">
          <div>
            <div>High/Low</div>
            <div>--/74°</div>
          </div>
          <div>
            <div>Humidity</div>
            <div>58%</div>
          </div>
          <div>
            <div>Pressure</div>
            <div>29.83 in</div>
          </div>
          <div>
            <div>Visibility</div>
            <div>10 mi</div>
          </div>
        </div>
        <div className="weatherDay-detail-overview">
          <div>
            <div>Wind</div>
            <div>9 mph</div>
          </div>
          <div>
            <div>Dew Point</div>
            <div>69°</div>
          </div>
          <div>
            <div>UV Index</div>
            <div>0 of 10</div>
          </div>
          <div>
            <div>Moon Phase</div>
            <div>Waxing Crescent</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherDetail
