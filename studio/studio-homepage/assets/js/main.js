var randomLat = ((Math.random() * 180) - 90).toFixed(7);
var randomLong = ((Math.random() * 360) - 180).toFixed(7);

// API Request
fetch('http://api.sunrise-sunset.org/json?lat='+ randomLat +'&lng='+ randomLong +'&date=today')
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        render(jsonData);
    });


  var riseSpan = document.querySelector('.sunrise')
  var setSpan = document.querySelector('.sunset')



  function render(data){
    console.log(data);
    console.log(data.results.sunrise);
    riseSpan.innerText = data.results.sunrise
    console.log(data.results.sunset)
    setSpan.innerText = data.results.sunset


  }


  var longSpan = document.querySelector('.longtitude')
  console.log(longSpan)

  var long = randomLong
  longSpan.innerText = randomLong

  var latSpan = document.querySelector('.latitude')
  console.log(latSpan)

  var lat = randomLat
  latSpan.innerText = randomLat
