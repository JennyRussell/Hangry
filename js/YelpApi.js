// YELP API is specific for ONLY the YELP Rest API and should not contain any jquery or dom editing.
var businesses = [];
const API_KEY = "27pO528tZIXKQa99yJd-KLZ93h6DM1t4kSykH9UkZ0IdbsEc_ELP1wmYNi54Y83892iN20ex53HQtokoXHVb1aa3_qRVUI47VIUT7MNinJNLLpcggtNv1atWwrVKYHYx";
const CLIENT_ID = "cdcxCdVgpGDur80CjemkRg";

let baseURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/";


let id = "wAVpMs0QtdzFFGhhjZAKHA";

function getBusinessById(Id, callback) {
    const business = `businesses/search?${Id}`
    let businessId = `${baseURL}${business}`
    console.log("Hello");
    return baseFetch(businessLatLon, callback)
}

function getBusinessByLatLon(lat, lon, callback) {
    const business = `businesses/search?latitude=${lat}&longitude=${lon}`
    let businessLatLon = `${baseURL}${business}`
    console.log("Hello");
    return baseFetch(businessLatLon, callback)
}



async function baseFetch(baseURL, callback) {
    const business = `businesses/${id}`
    let businessId = `${baseURL}${business}`
    console.log(baseURL);
    let req = new Request(businessId, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + API_KEY,
            'Content-Type': 'application/json',
            "X-Requested-With": "XMLHttpRequest",
        })


    });

    fetch(req)
        .then((response) => {
            if (response.ok) {
                console.log("fetch is okay, returning json")
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
        .then((jsonData) => {
            myCallBack(jsonData);
            console.log("the reutnred json is", jsonData)
            businesses = jsonData;
            callback(jsonData, 0);
        })
        .catch((err) => {
            console.log(err);
        });

}


// the entry point to our application
$(document).ready(function() {
    console.log("hey, we are at the starting point of our app")
    if (navigator.geolocation) {
        console.log("we have an geolocator!")
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("the current postion is", position.coords.latitude)
            let lat = position.coords.latitude;
            let long = position.coords.longitude;

            $("#long").text(long);
            $("#lat").text(lat);
            getBusinessByLatLon(lat, long, loadRest)

        }, errorFunction);

    } else {
        alert('It seems like Geolocation, which is required for this page, is not enabled in your browser.');
    }
});