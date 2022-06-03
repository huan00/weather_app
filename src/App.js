import axios from 'axios'
import '../src/styles/styles.css'
import { useEffect, useState } from 'react'
import { getWeather, getWeatherByZipcode } from './utils/Services'

import Today from './components/Today'
import Search from './components/Search'

function App() {
  const [weather, setWeather] = useState()
  const days = 10
  const [location, setLocation] = useState()
  const [zipcode, setZipcode] = useState()

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

  const handleZipcode = (e) => {
    setZipcode(e.target.value)
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    const res = await getWeatherByZipcode(zipcode)
    setWeather(res)
    setZipcode('')
  }

  console.log(zipcode)

  return (
    <div className="App">
      <Search
        handleZipcode={handleZipcode}
        handleSearch={handleSearch}
        zipcode={zipcode}
      />
      {weather ? <Today weather={weather} /> : <></>}
    </div>
  )
}

export default App
