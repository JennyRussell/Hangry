// YELP API is specific for ONLY the YELP Rest API and should not contain any jquery or dom editing.
const API_KEY = "hhe7kT5DSjU6fJ1Y-vy5b8XRAh-JF8H1DqYugVodo9Vdp4xEbbmlVFahbdsdRk90-tNM_7dUnFtQ3oyY94Imfsbu9umTF_5sp-xhO8U0JtfhQxZwszHq3kTeeihMYHYx";
const CLIENT_ID = "dyeKawOLsqUZdRX7B35S4Q";


let localhost = "http://localhost:8082/";
let corsAnywhere = 'https://cors-anywhere.herokuapp.com/';


let baseURL = `https://api.yelp.com/v3/`;
if (!IS_PROD) {
    baseURL = `${localhost}${baseURL}`;
    console.log(baseURL);


} else {
    baseURL = `${corsAnywhere}${baseURL}`;
    console.log(baseURL);

}
let id = "wAVpMs0QtdzFFGhhjZAKHA";

function getBusinessByLatLon(lat, lon, callback, errorCallback) {
    if (lat && lon) {
        let business = `businesses/search?latitude=${lat}&longitude=${lon}&limit=50&open_now=true`;
        let businessLatLon = `${baseURL}${business}`;
        let authKey = "Bearer " + API_KEY
        return baseFetchByGET(businessLatLon, authKey, callback, errorCallback);
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
        let authKey = "Bearer " + API_KEY
        return baseFetchByGET(businessIdURL, authKey, callbackFunction);
    }
}

//*
/* src= https://www.yelp.com/developers/documentation/v3/business_reviews
/* GET Reviews by Business ID
/* @param {id} id the specific ID of the business -- cannot be null
/* @param {callbackFunction} callback the function the data response should return to... typically to update your UI.
/ */
async function getReviewsByBusinessId(id, callbackFunction) {
    if (id === undefined || id === "" || id === null) {} {
        let businessIdURL = `${baseURL}businesses/${id}/reviews`;
        let authKey = "Bearer " + API_KEY

        return baseFetchByGET(businessIdURL, authKey, callbackFunction);
    }
}