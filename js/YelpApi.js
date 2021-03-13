const API_KEY = "hhe7kT5DSjU6fJ1Y-vy5b8XRAh-JF8H1DqYugVodo9Vdp4xEbbmlVFahbdsdRk90-tNM_7dUnFtQ3oyY94Imfsbu9umTF_5sp-xhO8U0JtfhQxZwszHq3kTeeihMYHYx";
const CLIENT_ID = "dyeKawOLsqUZdRX7B35S4Q";

let baseURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/';


//testing location
const latitude = 33.46945063148673
const longitude = -117.1231696967713

function getBusinessByLatLon(lat, lon) {
    const business = `businesses/search?latitude=${lat}&longitude=${lon}`
    let businessLatLon = `${baseURL}${business}`
    return baseFetch(businessLatLon, myCallBack)
}


function successFunction(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    alert('Your latitude is :' + lat + ' and longitude is ' + long);
}

function errorFunction(position) {
    alert('Error!');
}

function testApi() {
    getBusinessByLatLon(latitude, longitude);
}

function myCallBack(json) {
    console.log(json);
}

testApi();



async function baseFetch(baseURL, callback) {
    console.log(baseURL);
    var req = new Request(baseURL, {
        method: 'GET',
        headers: new Headers({
            'Authorization': "Bearer" + API_KEY,
            'Content-Type': 'application/json'
        })


    });

    fetch(req, { mode: 'no-cors'})
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
        .then((jsonData) => {
            callback(jsonData);
        })
        .catch((err) => {
            console.log(err);
        });

}