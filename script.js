$(document).ready(function(){

// Set up variables 
// ==============================================
var phillyId = "4440906";
var auKeys = "741723edae656a0451e3776abc421da5";
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=" + phillyId + "&apikey=" + auKeys;
//var imgForcast = "https://openweathermap.org/img/wn/" + imageName + "@2x.png"

$.ajax({
    url: queryURL,
    cors: true
}).then(data => {
    console.log(data)
})

$("#searchBtn").click(function(){
    alert("This Homwork is not easy bro.");
  });
  








});
