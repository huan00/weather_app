import axios from 'axios'
import '../src/styles/styles.css'
import { useEffect, useState } from 'react'

import Today from './components/Today'

function App() {
  const [weather, setWeather] = useState({})
  const [location, setLocation] = useState({})
  const [weatherTime, setWeatherTime] = useState('current')

  useEffect(() => {}, [])

  return (
    <div className="App">
      <Today location={location} />
    </div>
  )
}

export default App
