const API_KEY = "d1be427e961de0b6269f2a8760e3987d"
const weatherContent = document.querySelector('#weather-content')
const loading = document.querySelector('#loading')
const errorMsg = document.querySelector('#error-msg')
const error = document.querySelector('#error')
const searchForm = document.querySelector('#search-form')
const cityInput = document.querySelector('#city-input')
const closeBtn = document.querySelector('#close-btn')
const searchBtn = document.querySelector('#search-btn')
const animationCon = document.querySelector('#animation-con')
const cityName = document.querySelector('#city-name')
const currentDate = document.querySelector('#current-date')
const currentTime = document.querySelector('#current-time')
const currentTemp = document.querySelector('#current-temp')
const currentWeather = document.querySelector('#current-wheather')
const icon = document.querySelector('#icon')
const forecastCon = document.querySelector('#forecast-con')


const fetchWeather = async (city) => {
    showLoading()
    try {
        if (!API_KEY) {throw new Error("OpenWeatherMap API Key is missing.")}

        if (city) {
            const Url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
            const getResponce = await fetch(Url)
            // console.log(getResponce);
            if (!getResponce.ok) throw new Error(`Could not find data for "${city}".`)
            const data = await getResponce.json()
        console.log(data)
        if (data.length === 0) throw new Error(`Could not find location data for "${city}".`)
            let latitude = data[0].lat
        let longitude = data[0].lon
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
            // const forecastUrl = `api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
            const weatherResponce = await fetch(weatherUrl)
            const weatherData = await weatherResponce.json()
            // console.log(weatherResponce)
            console.log(weatherData)
            const temp = Math.round(weatherData.main.temp - 273.15)
            console.log(temp);
            //display city value to show current weather
            cityName.innerText = data[0].name
            currentTemp.innerText = temp
            const date = new Date()
            const day = date.toLocaleDateString('en-IN', { weekday: 'long' });
            console.log(date)
            //Thu Dec 11 2025 15:34:39 GMT+0530 (India Standard Time)
            console.log(day);

        }

    } catch (error) {
        console.error('weather data fetch error:', error);
        showError(error.msg)
    } finally {
        hideloading()
    }
}
const showLoading = () => {
    loading.classList.remove('hidden')
    loading.classList.add('flex')
}
const hideloading = () => {
    loading.classList.add('hidden')
    loading.classList.remove('flex')
}
const showError = (msg) => {
    errorMsg.textContent = Msg
    error.classList.remove('hidden')
    error.classList.add('flex')
}
// taking city value
searchBtn.addEventListener('click',()=>{
    const cityValue = cityInput.value
    console.log(cityValue) 
    fetchWeather(cityValue)
    
})
