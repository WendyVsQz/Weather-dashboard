//TAGS: #Today, #Tomorrow, yesterday,
//#card, #search, #search-bar, #forecast,
//#weather, #city, #temp, #icon, #description, #humidity, #wind.
//---------------------------------------------------------------//
//API Key: 747b155a3ad134502ce1104de711994f

let weather= {
    // 01. getting API
    apiKey: "747b155a3ad134502ce1104de711994f",
    //02. fetch city
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city + "&units=metric&appid=" + this.apiKey
        ).then((response)=> response.json())
        .then((data)=> this.displayWeather(data));
    },
    //03. function data
    displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    //console.log(name, icon, description, temp, humidity, speed);
    //04. Class target
    document.querySelector(".city").innerText= "Weather in " + name;
    document.querySelector(".icon").src = 
    "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "wind speed: " + speed + "km/h";
    document.querySelector(".weather").classList.remove("loading");
},
//05. function searchbar
search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
}
};
//06. event listener
document.querySelector(".search button")
.addEventListener("click", function(){
    weather.search();
})
//07. key enter
document.querySelector(".search-bar")
.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
})

