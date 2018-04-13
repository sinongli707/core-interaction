
// Insert your actual API request URL below
fetch('http://api.openweathermap.org/data/2.5/weather?zip=10011&APPID=19d8f5d2194682aa6c93145df4d7c333&units=imperial')
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        render(jsonData);
    });

// RENDER FUNCTION SETUP
// ---------------------
var tempSpan = document.querySelector('.temp')
var windSpeedSpan = document.querySelector('.wind-speed')
var windDirSpan = document.querySelector('.wind-dir')
var weatherVaneWrapper = document.querySelector('.weather-vane-wrapper')
var weatherVane = document.querySelector('.weather-vane')


function render(data){

  //log the data in it's entirety
  console.log(data);

  //log the current temperature
  console.log(data.main.temp);

  // insert the temperature
  tempSpan.innerText = data.main.temp

  // log the wind speed
  console.log(data.wind.speed)

  windSpeedSpan.innerText = data.wind.speed

// log the wind deg
  console.log(data.wind.deg)

  windDirSpan.innerText = data.wind.deg

// set bg color based on temp
  document.body.style.backgroundColor = 'hsl('+data.wind.deg+', 50%, 50%)'

// rotate the weather vane based on wind direction
  weatherVaneWrapper.style.transform = 'rotate('+data.wind.deg+'deg)'

// set animation duration of weathervane based on wind windSpeedSpan
  weatherVane.style.animationDuration = 5 / data.wind.speed + 's'

}
