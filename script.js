const apiKey = "125b268a216e3c425b01b8d9e39571f3";

function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("weather").innerHTML = `
                <h2>${data.name}</h2>
                <p>🌡️ Temperature: ${data.main.temp} °C</p>
                <p>☁️ Weather: ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(() => {
            document.getElementById("weather").innerHTML = "City not found ❌";
        });
}