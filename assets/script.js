// API Key: a43fc3b983181afb01b8329075754564
// Current weather call: 
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={a43fc3b983181afb01b8329075754564}

// ----------

/* // Div tags to consider: 
* 1- Search for city: "#searchForm", "searchInput" "button", "row", "form-input weather-search", "text"
* 2- Today's weather info: "today", "region", "polite", "card", "cardBody", "cardTittle", "cardText"
* 3- 5-Day forecast: "forecast", "region", "polite", "card", "cardBody", "cardTittle", "cardText" */ 
// -----------

// 1. Local storage

/* $(function() {
    $("#add").on("click", function() {
    var val = $("input").val();
    if(val !== '') {
    var elem = $("<li></li>").text(val);
    $(elem).append("<button class='rem'>X</button>");
    $("#searchCity").append(elem);
    $("input").val("");
    $(".rem").on("click", function() {
    $(this).parent().remove();
    });
    }
    });

 */

// 2.  moment.js
var timeDisplayEl = document.querySelectorAll(['#currentDate','#tomorrow','#next', '#third', '#forth', '#fifth']);
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

/* var url =" api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=a43fc3b983181afb01b8329075754564" */