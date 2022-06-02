import axios from 'axios'

export const getWeather = async (lat, lon, time) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${time}&appid=58a8150e7bd147600d83f9e688328a1c`
  )
  return res.data
}

export const getLocation = async () => {
  let location = []
  navigator.geolocation.getCurrentPosition(function (position) {
    location = position.coords.latitude
    // position.coords.longitude]

    console.log(position.coords.latitude)
  })
  console.log(location)
  return location
}
