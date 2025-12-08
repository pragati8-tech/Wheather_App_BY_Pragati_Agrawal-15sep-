document.addEventListener('DOMContentLoaded',()=>{
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


    const fetchWeather = async ({lat,lan,city}){

    }
    const showLoading = () =>{
        loading.classList.remove('hidden')
        loading.classList.add('flex')
    }
})

