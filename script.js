$(document).ready(function(){


function search(city){
  // Set up variables 
  // ==============================================
  var auKeys = "741723edae656a0451e3776abc421da5";
  var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&apikey=" + auKeys;
  var tempElt = document.getElementsByClassName("#temp");
  var citySearchEtl = document.getElementById("citySearch");
  //var weatherData = JSON.parse(Response.queryURL);

  //var imgForcast = "https://openweathermap.org/img/wn/" + imageName + "@2x.png"

  $.ajax({
      url: queryURL,
      cors: true
  }).then(data => {
      console.log(data)

      $('#day1 .temp').append(JSON.stringify(data["list"][0]["main"]["temp"]));
      $('#day1 .date').append(JSON.stringify(data["list"][0]["dt_txt"]));
      $('#day1 .humidity').append(JSON.stringify(data["list"][0]["main"]["humidity"]));

      $('#day2 .temp').append(JSON.stringify(data["list"][8]["main"]["temp"]));
      $('#day2 .date').append(JSON.stringify(data["list"][8]["dt_txt"]));
      $('#day2 .humidity').append(JSON.stringify(data["list"][8]["main"]["humidity"]));

      $('#day3 .temp').append(JSON.stringify(data["list"][16]["main"]["temp"]));
      $('#day3 .date').append(JSON.stringify(data["list"][16]["dt_txt"]));
      $('#day3 .humidity').append(JSON.stringify(data["list"][16]["main"]["humidity"]));

      $('#day4 .temp').append(JSON.stringify(data["list"][24]["main"]["temp"]));
      $('#day4 .date').append(JSON.stringify(data["list"][24]["dt_txt"]));
      $('#day4 .humidity').append(JSON.stringify(data["list"][24]["main"]["humidity"]));

      $('#day5 .temp').append(JSON.stringify(data["list"][32]["main"]["temp"]));
      $('#day5 .date').append(JSON.stringify(data["list"][32]["dt_txt"]));
      $('#day5 .humidity').append(JSON.stringify(data["list"][32]["main"]["humidity"]));


  });
}


function userInput () {
    $("#citySearch").val(localStorage.getItem("cities"));


}

$("#searchBtn").click(function(e){
  e.preventDefault()
  debugger
    var value = $(this).siblings("#citySearch").val();
    search(value)
    localStorage.setItem(value, cities)
  });

  userInput();
  








});
