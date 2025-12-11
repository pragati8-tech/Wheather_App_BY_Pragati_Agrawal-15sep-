document.addEventListener('DOMContentLoaded',()=>{
    const API_KEY = "d1be427e961de0b6269f2a8760e3987d"
    let interval = null 

    const weatherContent = document.querySelector('#weather-content')
    const loading = document.querySeletor('#loading')
    const errorMsg = document.querySeletor('#error-msg')
    const error = document.querySeletor('#error')
    const searchForm = document.querySeletor('#search-form')
    const cityInput= document.querySeletor('#city-input')
    const closeBtn= document.querySeletor('#close-btn')
    const animationCon= document.querySeletor('#animation-con')
    const cityName= document.querySeletor('#city-name')
    const currentDate= document.querySeletor('#current-date')
    const currentTime= document.querySeletor('#current-time')
    const currentTemp= document.querySeletor('#current-temp')
    const currentWeather= document.querySeletor('#current-wheather')
    const icon= document.querySeletor('#icon')
    const forecastCon= document.querySeletor('#forecast-con')


    const fetchWeather = async ({lat,lon,city})=>{
        showLoading()
        if(clearInterval) clearInterval
        (interval)
        try {
            if(!API_KEY) throw new Error ("OpenWeatherMap API Key is missing.")
            let latitude = lat
            let longitude = lon

            if(city){
                const Url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
                const getResponce = await fetch(Url)
                if(!getResponce.ok) throw new Error(`Could not find data for "${city}".`)
                    const data = await getResponce.json()
                if(data.length ===0) throw new Error (`Could not find location data for "${city}".`)
                    latitude = data[0].lat
                    longitude= data[0].lon
            }
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
            const forecastUrl = `api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

        } catch (error) {
            console.error('weather data fetch error:',error);
            showError(error.msg)
        } finally {
            hideloading()
        }
    }
    const showLoading = () =>{
        loading.classList.remove('hidden')
        loading.classList.add('flex')
    }
    const hideloading = ()=>{
        loading.classList.add('hidden')
        loading.classList.remove('flex')
        weatherContent.classList.add('opacity-0')
    }
    const showError = (msg) =>{
        errorMsg.textContent = Msg
        error.classList.remove('hidden')
    }
})

