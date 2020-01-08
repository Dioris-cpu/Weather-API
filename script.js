$(document).ready(function(){


function search(city){
  // Set up variables 
  // ==============================================
  var auKeys = "741723edae656a0451e3776abc421da5";
  var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&apikey=" + auKeys;

  //var tempElt = document.getElementsByClassName("#temp");
  //var citySearchEtl = document.getElementById("citySearch");
  //var weatherData = JSON.parse(Response.queryURL);

  $.ajax({
      url: queryURL, 
      cors: true
  }).then(data => {
      console.log(data)
      function createImgUrl(icon) {
        return "https://openweathermap.org/img/wn/" + icon + "@2x.png"
      }

      $('#day1 .temp').append(JSON.stringify(data["list"][0]["main"]["temp"]));
      $('#day1 .date').append(JSON.stringify(data["list"][0]["dt_txt"]));
      $('#day1 .humidity').append(JSON.stringify(data["list"][0]["main"]["humidity"]));
      $('#day1 .wind').append(JSON.stringify(data["list"][0]["wind"]));
      $('img')[0].setAttribute('src', createImgUrl(data["list"][0]["weather"][0]["icon"]));

      $('#day2 .temp').append(JSON.stringify(data["list"][8]["main"]["temp"]));
      $('#day2 .date').append(JSON.stringify(data["list"][8]["dt_txt"]));
      $('#day2 .humidity').append(JSON.stringify(data["list"][8]["main"]["humidity"]));
      $('#day2 .wind').append(JSON.stringify(data["list"][8]["wind"]));
      $('img')[1].setAttribute('src', createImgUrl(data["list"][8]["weather"][0]["icon"]));

      $('#day3 .temp').append(JSON.stringify(data["list"][16]["main"]["temp"]));
      $('#day3 .date').append(JSON.stringify(data["list"][16]["dt_txt"]));
      $('#day3 .humidity').append(JSON.stringify(data["list"][16]["main"]["humidity"]));
      $('#day3 .wind').append(JSON.stringify(data["list"][16]["wind"]));
      $('img')[2].setAttribute('src', createImgUrl(data["list"][16]["weather"][0]["icon"]));

      $('#day4 .temp').append(JSON.stringify(data["list"][24]["main"]["temp"]));
      $('#day4 .date').append(JSON.stringify(data["list"][24]["dt_txt"]));
      $('#day4 .humidity').append(JSON.stringify(data["list"][24]["main"]["humidity"]));
      $('#day4 .wind').append(JSON.stringify(data["list"][24]["wind"]));
      $('img')[3].setAttribute('src', createImgUrl(data["list"][24]["weather"][0]["icon"]));

      $('#day5 .temp').append(JSON.stringify(data["list"][32]["main"]["temp"]));
      $('#day5 .date').append(JSON.stringify(data["list"][32]["dt_txt"]));
      $('#day5 .humidity').append(JSON.stringify(data["list"][32]["main"]["humidity"]));
      $('#day5 .wind').append(JSON.stringify(data["list"][32]["wind"]));
      $('img')[4].setAttribute('src', createImgUrl(data["list"][32]["weather"][0]["icon"]));

        var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&apikey=" + auKeys;

        $.ajax({
          url: weatherURL, 
          cors: true
      }).then(data => {
        
      });
      
    
    
    
    
  });

}


function userInput () {
    $("#citySearch").val(localStorage.getItem(value,city));
 
  

}

$("#searchBtn").click(function(e){
  e.preventDefault()
    var value = $(this).siblings("#citySearch").val();
    var city = $(this).siblings("#citySearch").text();
    search(value,city)
    localStorage.setItem(value, city);
  });

  userInput();
  








});
