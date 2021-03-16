// YELP API is specific for ONLY the YELP Rest API and should not contain any jquery or dom editing.
var businesses = [];
const API_KEY =
    "27pO528tZIXKQa99yJd-KLZ93h6DM1t4kSykH9UkZ0IdbsEc_ELP1wmYNi54Y83892iN20ex53HQtokoXHVb1aa3_qRVUI47VIUT7MNinJNLLpcggtNv1atWwrVKYHYx";
const CLIENT_ID = "cdcxCdVgpGDur80CjemkRg";

let baseURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3";

let id = "wAVpMs0QtdzFFGhhjZAKHA";


function myCallBack(response) {
    console.log(response);
    $("#business-image").attr("src", response.image_url);
    $("#displayPhone").text(response.display_phone);
    $("#business").text(response.name);
    console.log(response);
}

function getBusinessByLatLon(lat, lon, callback) {
    let business = `businesses/search?latitude=${lat}&longitude=${lon}`
    let businessLatLon = `${baseURL}${business}`
    console.log("Hello");
    return baseFetch(businessLatLon, callback)
}

function getBusinessByLatLon(lat, lon, callback) {
    const business = `businesses/search?latitude=${lat}&longitude=${lon}`
    let businessLatLon = `${baseURL}${business}`
    console.log("Hello");
    return baseFetch(businessLatLon, callback)
}


function getBusinessById(id) {

    let businessId = `${baseURL}/businesses/${id}`;
    console.log("Hello");
    return baseFetch(callback);
    console.log(callback);
}

async function baseFetch(baseURL, callback) {
    let businessId = `${baseURL}/businesses/${id}`;
    console.log("the url is", businessId)
    console.log(baseURL);
    let req = new Request(businessId, {
        method: "GET",
        headers: new Headers({
            Authorization: "Bearer " + API_KEY,
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        }),
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

            console.log("the reutnred json is", jsonData)
            businesses = jsonData;
            callback(jsonData, 0);
            businesses = jsonData;
            // callback(jsonData);
            myCallBack(jsonData);
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