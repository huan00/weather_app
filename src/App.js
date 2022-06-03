import axios from 'axios'
import '../src/styles/styles.css'
import { useEffect, useState } from 'react'
import { getWeather } from './utils/Services'

import Today from './components/Today'

function App() {
  const [weather, setWeather] = useState()
  const days = 10
  const [location, setLocation] = useState()

  useEffect(() => {
    getLocation()
    getTodayWeather()
  }, [location])

  const getTodayWeather = async () => {
    if (location) {
      const res = await getWeather(location.lat, location.lon, days)
      console.log(res)
      setWeather(res)
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

  // console.log(location)

  return (
    <div className="App">{weather ? <Today weather={weather} /> : <></>}</div>
  )
}

export default App
