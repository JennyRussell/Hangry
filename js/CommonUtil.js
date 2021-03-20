//**
/* 
 * @param {distanceInMeters} distanceInMetres 
 * @return meters divided by miles. 
 */
function convertMetersToMiles(distanceInMetres) {
    return distanceInMetres * 0.000621371192;
}

function convertMilesToMeters(distanceInMiles) {
    return distanceInMiles * 1609.344;
}

function defaultError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

function defaultSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    return { "lat": lat, "lon": lon };
}

/**
 * 
 * @param {error} the response error from the geo lookup
 * returns a human readable string for the error
 */
function showGeoError(error, strErr) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            return "User denied the request for Geolocation.";
        case error.POSITION_UNAVAILABLE:
            return "Location information is unavailable.";
        case error.TIMEOUT:
            return "The request to get user location timed out.";
        case error.UNKNOWN_ERROR:
            return "An unknown error occurred.";
        default:
            return strErr;
    }
}

//*
/* This returns an object of the specific LAT/LONG
/* @return example: {"lat" : 32.22222, "lon": -118.22222 }
/* to reference this object try:
/* let latLon = getcurrentLocationLatLong();
/* then console.log(latLon.lat); and you will see 32.22222
*/

function getLocation(successCallback, errorCallback) {
    if (navigator.geolocation) {
        if (successCallback && errorCallback) {
            navigator.geolocation.getCurrentPosition(function(position) {
                successCallback(defaultSuccess(position))
            }, errorCallback);
        }
    } else {
        console.log("Geolocation is not supported by this browser.")
        errorCallback("Geolocation is not supported by this browser.")
    }
}

function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function clearLocalStorage() {
    localStorage.clear();
}

/* <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="photos[1]" id="business-image-1">
        </div>
        <div class="swiper-slide">
         <img src="photos[2]" id="business-image-2">
        </div>
        <div class="swiper-slide">
            <img src="photos[3]" id="business-image-3">
        </div>
        <div class="swiper-scrollbar"></div>
    </div>
</div> */

const swiper1S = new Swiper('.swiper-container', {


  });