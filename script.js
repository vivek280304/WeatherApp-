// we can also use then catch method 

async function weather() {

    try {
        const input = document.getElementById('search').value.toLowerCase();
        const apiKey = 'd9f03bca8b460827750a98c0fbe3755c'; // Consider hiding this key in a .env file


        const response = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Weather Data:", data);

        const city = document.querySelector('#city');
        const temperature = document.querySelector('#temp')
        const button = document.querySelector('button');
        const windSpeed = document.querySelector('#wind-speed')
        const humidity = document.querySelector('#humidity')
        const weatherImg = document.querySelector('#weather-img')
        const description = document.querySelector('#description')
        const date = document.querySelector('#date')


        const a = data.name;
        const temp = data.main.feels_like;
        const speed = data.wind.speed;
        const humid = data.main.humidity;
        const weatherIcon = data.weather[0].main
        const status = data.weather[0].main

        if (weatherIcon == "Haze") {
            weatherImg.src = "haze.png.webp"
        }
        else if (weatherIcon == "Clear") {
            weatherImg.src = "clear.png.png"
        }
        else if (weatherIcon == "Smoke") {
            weatherImg.src = "smoke.png.webp"
        }
        else if (weatherIcon == "Clouds") {
            weatherImg.src = "cloudy.png"
        }


        city.innerHTML = `${a}`;

        const tem = Math.floor(`${temp}`)
        temperature.innerHTML = `${tem}°C`

        windSpeed.innerHTML = `${speed}km/h`

        humidity.innerHTML = `${humid}%`

        description.innerHTML = status

        let myDate = new Date()
        date.innerHTML = myDate.toDateString()
    
        

    } catch (error) {
        console.error("Error fetching weather data:", error.message);
    }
}

// Call the function
weather();


