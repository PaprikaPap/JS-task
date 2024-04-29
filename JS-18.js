const apiKey = '5d066958a60d315387d9492393935c19'; 
const city = 'Odesa';
        
const url = `http://api.openweathermap.org/data/2.5/weather?q=Odesa&units=metric&APPID=5d066958a60d315387d9492393935c19`;
        
const tempElem = document.getElementById('temp');
const pressureElem = document.getElementById('pressure');
const descriptionElem = document.getElementById('description');
const humidityElem = document.getElementById('humidity');
const speedElem = document.getElementById('speed');
const degElem = document.getElementById('deg');
const iconElem = document.getElementById('icon');
        
const weatherIcons = {
    '01d': '01d.jpg',
    '02d': '02d.jpg',
    '03d': '03d.jpg',
    '04d': '04d.jpg',
    '09d': '09d.jpg',
    '10d': '10d.jpg',
    '11d': '11d.jpg',
    '13d': '13d.jpg',
    '50d': '50d.jpg'
    };
        
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.main) {
            tempElem.innerText = `Температура: ${data.main.temp} °C`;
            pressureElem.innerText = `Тиск: ${data.main.pressure} hPa`;
            descriptionElem.innerText = `Опис: ${data.weather[0].description}`;
            humidityElem.innerText = `Вологість: ${data.main.humidity}%`;
            speedElem.innerText = `Швидкість вітру: ${data.wind.speed} м/с`;
            degElem.innerText = `Напрям вітру: ${data.wind.deg}°`;
            iconElem.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    } else {
        console.error('Помилка: Неправильний формат даних');
    }
            
        })
          .catch(error => console.error('Помилка:', error));