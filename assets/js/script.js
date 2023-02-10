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

const API_key = "a43fc3b983181afb01b8329075754564";
const XAPI_key = "my2A5016/7tnJweXGniFFQ==7GYdL2sFvnqWdvgf"

regionData()
function regionData() {
navigator.geolocation.regionData((success) => {
  console.log(success);
    })
}
var city = ""
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/geocoding?city=' + city,
    headers: { 'XAPI-Key': 'API_Key'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
