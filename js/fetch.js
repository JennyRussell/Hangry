const API_KEY = "hhe7kT5DSjU6fJ1Y-vy5b8XRAh-JF8H1DqYugVodo9Vdp4xEbbmlVFahbdsdRk90-tNM_7dUnFtQ3oyY94Imfsbu9umTF_5sp-xhO8U0JtfhQxZwszHq3kTeeihMYHYx";
const CLIENT_ID = "dyeKawOLsqUZdRX7B35S4Q";



function getApi() {
  //GET https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972

    var requestUrl = 'https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972';
    //var requestUrl = `https://api.yelp.com/v3/businesses/search?accessToken=${API_KEY}&term=deli`



    fetch(requestUrl, {mode: 'no-cors',  headers: {
      "Authorization": `Bearer` + API_KEY,
      'Content-Type': 'application/x-www-form-urlencoded'
    }, })
      .then(function (response) {
        console.log(response.status)
          if(response.status == 200){
            return response.json();
          } else {
              return;
          }

        
      })
      .then(function (data) {
        console.log(data)
        //displayData(data);
      });
  }



  getApi()