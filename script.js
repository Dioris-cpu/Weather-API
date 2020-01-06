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



function cityInfo () {
    $("#citySearch").val(localStorage.getItem("forcast"));

}




$("#searchBtn").click(function(){
    var value = $(this).siblings("#citySearch").val();
    localStorage.setItem(value, cities)
  });

  cityInfo()
  








});
