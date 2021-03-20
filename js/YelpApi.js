// YELP API is specific for ONLY the YELP Rest API and should not contain any jquery or dom editing.
const API_KEY =
    "27pO528tZIXKQa99yJd-KLZ93h6DM1t4kSykH9UkZ0IdbsEc_ELP1wmYNi54Y83892iN20ex53HQtokoXHVb1aa3_qRVUI47VIUT7MNinJNLLpcggtNv1atWwrVKYHYx";
const CLIENT_ID = "cdcxCdVgpGDur80CjemkRg";

let corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
let baseURL = `${corsAnywhere}https://api.yelp.com/v3/`;

let id = "wAVpMs0QtdzFFGhhjZAKHA";

function getBusinessByLatLon(lat, lon, callback, errorCallback) {
    if (lat && lon) {
        let business = `businesses/search?latitude=${lat}&longitude=${lon}&limit=50&open_now=true`;
        let businessLatLon = `${baseURL}${business}`;
        return baseFetchByGET(businessLatLon, callback, errorCallback);
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
/* src= https://www.yelp.com/developers/documentation/v3/business_reviews
/* GET Reviews by Business ID
/* @param {id} id the specific ID of the business -- cannot be null
/* @param {callbackFunction} callback the function the data response should return to... typically to update your UI.
/ */
async function getReviewsByBusinessId(id, callbackFunction) {
    if (id === undefined || id === "" || id === null) {} {
        let businessIdURL = `${baseURL}businesses/${id}/reviews`;
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
function baseFetchByGET(completeURL, successCallback, errorCallback) {
    $.ajax({
        type: 'GET',
        url: completeURL,
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', "Bearer " + API_KEY);
            xhr.setRequestHeader('Content-Type', "application/json");
            // xhr.setRequestHeader('XMLHttpRequest', "Accept");
        },
        success: function(response) {
            successCallback(response);
        },
        error: function(response) {
            errorCallback(response.responseJSON);
        }
    })
}