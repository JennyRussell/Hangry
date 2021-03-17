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

function positionToLatLongCoordsObject(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // you can reference this object as 
    // consolelog(coords.lat)
    return { "latitude": lat, "longitude": lon };
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
    //verify the browser supports geolocation
    if (navigator.geolocation) {
        //enforce that a successCallback, and errorCallback have been provided. 
        if (successCallback && errorCallback) {
            // when the getCurrentPosition returns with a position
            // convert it to a latLong object (from positionToLatLongObject()), 
            // and return it to the success caller. 
            navigator.geolocation.getCurrentPosition(position => {
                successCallback(positionToLatLongCoordsObject(position))
            }, errorCallback);
        }
    } else {
        console.log("Geolocation is not supported by this browser.")
    }
}

function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function clearLocalStorage() {
    localStorage.clear();
}

function loadNavBar() {
    // $("#hangry-nav-bar1").html('<object type="text/html" data="views/nav.html" ></object>');
    loadLocalFile("./views/nav.html", function(html) {
        $("#hangry-nav-bar").append(html);
    })
}


function loadLocalFile(filePath, successCallback) {
    $.ajax({
        url: filePath,
        type: "GET",
        beforeSend: function(xhr) { xhr.setRequestHeader('Content-Type', 'text/html; charset=utf-8'); },
        success: function(response) { successCallback(response); },
        error: function() { alert('bummer') }
    });
}