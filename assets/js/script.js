// API Key: a43fc3b983181afb01b8329075754564
// Current weather call: 
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=a43fc3b983181afb01b8329075754564

// ----------

/* // Div tags to consider: 
* 1- Search for city: '#search-city', '#search-button', '#button', '#clear-history', '#list-group'
* 2- Today's weather info: '#today', '#region', '#polite', '#current'
* 3- 5-Day forecast: '#forecast', '#region', '#tomorrow', '#temp', '#wind', '#humidity'
 */


// 1. Local storage



//moment.js

var timeDisplayEl = document.querySelectorAll(['#current','#tomorrow','#next', '#third', '#forth', '#fifth']);
for (var i = 0; i < timeDisplayEl.length; i++){
  setInterval(function() {
    timeDisplayEl[0].textContent = moment().format("DD/MM/YYYY")
    timeDisplayEl[1].textContent = moment().add(1, 'days').format("DD/MM/YYYY")
    timeDisplayEl[2].textContent = moment().add(2, 'days').format("DD/MM/YYYY")
    timeDisplayEl[3].textContent = moment().add(3, 'days').format("DD/MM/YYYY")
    timeDisplayEl[4].textContent = moment().add(4, 'days').format("DD/MM/YYYY")
    timeDisplayEl[5].textContent = moment().add(5, 'days').format("DD/MM/YYYY")
  },1000);
};

// 3. API

// Here we display the 5 days forecast for the current city.
//Set up the API key


/* regionData()
function regionData() {
  navigator.geolocation.regionData((success) => {
    console.log(success);
  })
} */

const API_key = "97f51d5e48b2c8cbef33200ea2f10ece";
function getCityCoor(){
var city = "London"
$.ajax({
    method: 'GET',
    url: 'http:api.openweathermap.org/geo/1.0/direct?q='+city+ '&appid='+ API_key,
    //contentType: 'application/json',
    success: function(result) {
        getWeather(result[0].lat,result[0].lon )
    },
    error: function(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
//fetch('http://api.openweathermap.org/geo/1.0/direct?q='+city+ '&limit=5&appid='+ API_key,)
//.then(response=> {
  //console.log(response)
//})
}

function getWeather(lat, lon){
  $.ajax({
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=97f51d5e48b2c8cbef33200ea2f10ece',
    success: function(result) {
      displayWeather(result)
  },
  error: function(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
  }

  })
}

/* obj("lisa= 9", "bart=10", "Homer=50")
"obj.lisa"

Arr["lisa", "bart", "Homer"]
Arr[0]; */

function displayWeather(data){
  console.log(data)
  console.log(data.name)
  console.log(data.main.temp)
  console.log(data.wind)
  console.log(data.main.humidity)
  console.log(data.sys)
  document.querySelector(".temp").textContent = "Temp: "+data.main.temp
  document.querySelector(".wind").textContent="Wind: "+data.wind.deg
  document.querySelector(".humidity").textContent="Humidity: "+ data.main.humidity


  //id="awesome"
  //document.querySelector("#awesome")
  //document.getElementById("awesome")
}

function getWeather(lat, lon){
  $.ajax({
    method: 'GET',
    url: 'https://pro.openweathermap.org/data/2.5/forecast/hourly?lat='+lat+'&lon='+lon+'&appid=97f51d5e48b2c8cbef33200ea2f10ece',
    success: function(result) {
      displayWeather(result)
  },
  error: function(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
  }

  //'https://pro.openweathermap.org/data/2.5/forecast/hourly?lat='+lat+'&lon='+lon+'&appid=97f51d5e48b2c8cbef33200ea2f10ece
  })
}

function displayForecast(data){

}

getCityCoor()

localStorage.setItem('TEST', "Hello")
localStorage.getItem("TEST")