const API_KEY = "27pO528tZIXKQa99yJd-KLZ93h6DM1t4kSykH9UkZ0IdbsEc_ELP1wmYNi54Y83892iN20ex53HQtokoXHVb1aa3_qRVUI47VIUT7MNinJNLLpcggtNv1atWwrVKYHYx";
const CLIENT_ID = "cdcxCdVgpGDur80CjemkRg";

let baseURL = 'https://api.yelp.com/v3/businesses/search?location=40515&term&categories=vet&limit=10';

let baseURL = "https://api.yelp.com/v3";
let businessSearch = "/businesses/search"

$(document).ready(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    } else {
        alert('It seems like Geolocation, which is required for this page, is not enabled in your browser.');
    }
});

function successFunction(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    alert('Your latitude is :' + lat + ' and longitude is ' + long);
}

function errorFunction(position) {
    alert('Error!');
}

var req = new Request(baseURL, {
    method: 'GET',
    headers: new Headers({
        'Authorization': 'Bearer ' + API_KEY,
        'Content-Type': 'application/json'
    })

});

fetch(req)
    .then((response) => {
        if (response.ok) {
            console.log("YAY");
            return response.json();
        } else {
            console.log("NOOO");
            throw new Error();
        }
    })
    .then((jsonData) => {
        console.log(jsonData);
    })
    .catch((err) => {
        console.log('ERROR: ', err.message);
    });