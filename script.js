$(document).ready(function(){

// Set up variables 
// ==============================================
var queryTerm = "";
var city = "philadelphia";
var auKeys = "741723edae656a0451e3776abc421da5";
var iconElement = document.querySelector(".weather-icon");
var tempElement = document.querySelector(".temperature-value p");
var descElement = document.querySelector(".temperature-description p");
var locationElement = document.querySelector(".location p");
var notificationElement = document.querySelector(".notification");
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",US&apikey=" + auKeys;

$.ajax({
    url: queryURL,
    cors: true
}).then(data => {
    console.log(data)
})

var weather = {};

weather.tempature = {
    unit : "celsius"
};


// if('geolocation' in navigator){
//     navigator.geolocation.getCurrentPosition(setPosition, showError);
// }else{
//     notificationElement.style.display = "block";
//     notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
// }




// Functions
// ================================================
function displayWeather() {
   iconElement.innerHTML = (weather.iconID);
   tempElement.innerHTML = (weather.tempature.value);
   descElement.innerHTML = weather.description;
   locationElement.innerHTML = (weather.city), (weather.country);
}

// converting into celsius and fahrenheit

weather.tempature.value = 279.15 - 273;
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

if(weather.temperature.unit == "celsius"){
    var fahrenheit = celsiusToFahrenheit(weather.temperature.value);
    fahrenheit = Math.floor(fahrenheit);
    
    tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
    weather.temperature.unit = "fahrenheit";
}else{
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    weather.temperature.unit = "celsius"
}

// Main Process
// =================================================


});
