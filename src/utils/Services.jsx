import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

export const getWeather = async (lat, lon, days) => {
  const res = await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=${days}`
  )
  return res.data
}

// export const getLocation = async () => {
//   let location = []
//   navigator.geolocation.getCurrentPosition(function (position) {
//     location = position.coords.latitude
//   })
//   console.log(location)
//   return location
// }
