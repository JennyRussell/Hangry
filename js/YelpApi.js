// YELP API is specific for ONLY the YELP Rest API and should not contain any jquery or dom editing.
const API_KEY =
    "27pO528tZIXKQa99yJd-KLZ93h6DM1t4kSykH9UkZ0IdbsEc_ELP1wmYNi54Y83892iN20ex53HQtokoXHVb1aa3_qRVUI47VIUT7MNinJNLLpcggtNv1atWwrVKYHYx";
const CLIENT_ID = "cdcxCdVgpGDur80CjemkRg";

let corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
let baseURL = `${corsAnywhere}https://api.yelp.com/v3/`;

let id = "wAVpMs0QtdzFFGhhjZAKHA";


function getBusinessByLatLon(lat, lon, callback) {
    if (lat && lon) {
        let business = `businesses/search?latitude=${lat}&longitude=${lon}`;
        let businessLatLon = `${baseURL}${business}`;
        return baseFetchByGET(businessLatLon, callback);
    } else {
        console.log("Lat and Long are required", lat, lon);
    }

}


//*
/* Fetches a specific business by ID. 
/* #TEAM (It's best to understand this returns a specific business location, not a list by lat/long)
/* @param {id} id the specific ID of the business
/* @param {callbackFunction} callback the function the data response should return to... typically to update your UI.
/ */
async function getBusinessById(id, callbackFunction) {
    if (id === undefined || id === "" || id === null) {
        console.log("id is undefined");
    } {
        let businessIdURL = `${baseURL}businesses/${id}`;
        console.log(businessIdURL);
        return baseFetchByGET(businessIdURL, callbackFunction);
    }
}

//*
/* @param {completeURL} This is the complete URL, for example:
/* https://api.yelp.com/v3/businesses/wAVpMs0QtdzFFGhhjZAKHA"  <--- returns specific business
/* OR
/* https://api.yelp.com/v3/search?latitude=32.2222&longitude=-118.2222` <--
/* @param {completeURL} build the complete URL before sending in here, like in function getBusinessById
/* @param {callback} this is the function that will be called back. You only get the JSON response as 1 parameter
// so do not attempt two signatures in the function, such as callback(jsonData, 0). Only callback(jsonData) will work.
// Use the 0 in the callback itself. 
/ */
function baseFetchByGET(completeURL, callback) {
    console.log(completeURL);
    // build a request with the URL and add the headers including the Authorization
    let request = new Request(completeURL, {
        method: "GET",
        headers: new Headers({
            Authorization: "Bearer " + API_KEY,
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        }),
    });
    // fetch using the request above. Notice the naming (Request, Response)
    fetch(request)
        .then(response => response.json())
        .then(responseJson => {
            //the signature is named responseJson to know its the same response from the promose (.then()) above
            // but then returned as the json.
            callback(responseJson)
        })
        .catch(err => {
            //this error is thrown above in the `throw new Error(response);`
            // log it, and then re-throw it so it shows up better in chrome.
            console.log(err);
            throw err;
        });
}

// Leaving this here. This YelpAPI should never include any Jquery. It is strictly a YelpAPI.
// $(document).ready(function() {
//     console.log("hey, we are at the starting point of our app")
//     if (navigator.geolocation) {
//         console.log("we have an geolocator!")
//         navigator.geolocation.getCurrentPosition(function(position) {
//             console.log("the current postion is", position.coords.latitude)
//             let lat = position.coords.latitude;
//             let long = position.coords.longitude;

//             $("#long").text(long);
//             $("#lat").text(lat);
//             getBusinessByLatLon(lat, long, loadRest)

//         }, errorFunction);

//     } else {
//         alert('It seems like Geolocation, which is required for this page, is not enabled in your browser.');
//     }
// });