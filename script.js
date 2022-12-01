let weather = {
    "apiKey": "e370b9580b365eb13a7724fd35481a08",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey).then((response) => response.json())
            .then((data) => this.displayWether(data));
    },
    displayWether: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon1").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        // document.querySelector(".icon").setAttribute("src", "http://openweathermap.org/img/wn/" + icon + ".png")
        // console.log("http://openweathermap.org/img/wn/" + icon + ".png");
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°c";
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind : " + speed + "km";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);

    }
}
document.querySelector(".search button").addEventListener("click", function() {
    weather.search()
})
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key == "Enter") {
        weather.search()
    }
})

weather.fetchWeather("Bokaro");
