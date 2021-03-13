const API_KEY = "hhe7kT5DSjU6fJ1Y-vy5b8XRAh-JF8H1DqYugVodo9Vdp4xEbbmlVFahbdsdRk90-tNM_7dUnFtQ3oyY94Imfsbu9umTF_5sp-xhO8U0JtfhQxZwszHq3kTeeihMYHYx";
const CLIENT_ID = "dyeKawOLsqUZdRX7B35S4Q";



function getApi() {
    var requestUrl = '"https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972';
  



// AJAX call requires a third party library, jQuery
$.ajax({
  headers: {
    'Authorization': 'Bearer API_KEY,',
  },
  mode: 'no-cors',
  url: requestUrl,
  method: 'GET',

}).then(function (response) {
  console.log(response);
});
}



  getApi()