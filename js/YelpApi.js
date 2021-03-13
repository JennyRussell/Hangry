const API_KEY = "27pO528tZIXKQa99yJd-KLZ93h6DM1t4kSykH9UkZ0IdbsEc_ELP1wmYNi54Y83892iN20ex53HQtokoXHVb1aa3_qRVUI47VIUT7MNinJNLLpcggtNv1atWwrVKYHYx";
const CLIENT_ID = "cdcxCdVgpGDur80CjemkRg";

let baseURL = 'https://api.yelp.com/v3/';

//testing location
const latitude = 33.46945063148673
const longitude = -117.1231696967713


function getBusinessByLatLon(lat, lon, callback) {
    const business = `businesses/search?latitude=${lat}&longitude=${lon}`
    let businessLatLon = `${baseURL}${business}`
    console.log("Hello");
    return baseFetch(businessLatLon, callback)
}

function getLatLong() {
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
        // alert('Your latitude is :' + lat + ' and longitude is ' + long);
        document.getElementById("long").innerText = lat;
        document.getElementById("lat").innerText = long;
    }

    function errorFunction(position) {
        alert('Error!');
    }
};


function testApi() {
    getBusinessByLatLon(latitude, longitude, myCallBack);
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
            'Authorization': 'Bearer ' + API_KEY,
            'Content-Type': 'application/json'
        })

    });

    fetch(req)
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