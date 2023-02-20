/* // Div tags to consider: 
* 1- Search for city: '#search-city', '#search-button', '#button', '#clear-history', '#list-group'
* 2- Today's weather info: '#today', '#region', '#polite', '#current'
* 3- 5-Day forecast: '#forecast', '#region', '#tomorrow', '#temp', '#wind', '#humidity'
 */


// 1. Local storage

document.getElementById('search_button').addEventListener("click", displayCity);

function displayCity(){
  var search_city = document.querySelector('#search_city').value;
  localStorage.setItem('Is_search_city', search_city );
  localStorage.getItem('Is_search_city');
  
}

document.getElementById('clear_history').addEventListener('click', clearHistory);

function clearHistory(){
  var clear_history = document.querySelector('#clear_history');
  localStorage.clear(clear_history);
}


// 2. moment.js

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

// 3.1. get the geolocation
var API_key = "97f51d5e48b2c8cbef33200ea2f10ece";
function getCityCoor(){
  var city = "London";
$.ajax({
    method: 'GET',
    url: 'http:api.openweathermap.org/geo/1.0/direct?q='+city+ '&appid='+ API_key,
    success: function(result) {
        getWeather(result[0].lat,result[0].lon )
    },
    error: function(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
}

// 3.2. display current weather

function getWeather(lat, lon){
  $.ajax({
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+ API_key,
    success: function(result) {
      displayWeather(result)
  },
  error: function(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
  }
}
  )}

  
function displayWeather(data){
  console.log(data)
  console.log(data.name)
  console.log(data.main.temp)
  console.log(data.wind)
  console.log(data.main.humidity) 
  document.querySelector("#city").textContent = data.name
  document.querySelector("#temp").textContent = "Temp: "+ data.main.temp
  document.querySelector("#wind").textContent= "Wind: "+ data.wind.deg
  document.querySelector("#humidity").textContent= "Humidity: "+ data.main.humidity 
}
/* 
// 3.3.  display 5 days forecast
function getForecast(lat, lon){
  $.ajax({
    method: 'GET',
    url:'api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&appid='+ API_key,
    success: function(result){
      displayForecast(result)
    },
    error: function(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
    }
  })
}
function displayForecast(data){
  console.log(data)
} */

getCityCoor() 

