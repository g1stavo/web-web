var fetch = require("node-fetch");

fetch('http://api.openweathermap.org/data/2.5/weather?id=6323121&units=metric&appid=997e9b9cb61c6f19903b67e67ff5e610')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });