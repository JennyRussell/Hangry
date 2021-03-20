const CLIENT4S_ID = "TSTXMVDKIC4DS2OOJGDEPJHGFEJMACWRPXJKGOKDTXQOXJVQ";
const CLIENT_SECRET = "0SS0KJKAHWFBYZ0XUSYYZT5MWT3GGCAHTD3NZPSXGAIPO3JI";

const baseURL4S = "https://api.foursquare.com/v2/";
const venueSearch4S = "venues/search?ll=";

const test4Slat = "33.4694861";
const test4Slon = "117.12240270000001";

function baseFetch4SByGET() {
    $.ajax({
        dataType: "json",
        url: `${baseURL4S}${venueSearch4S}${test4Slat},${test4Slon}&client_id=${CLIENT4S_ID}&client_secret=${CLIENT_SECRET}&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee`,
        data: {},
        success: function(data) {
            // Code for handling API response
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Code for handling errors
        }
    });
};

function getVenueByLatLon(test4Slat, test4Slon, callback, errorCallback) {
    if (test4Slat && test4Slon) {
        let venue = `${baseURL4S}${venueSearch4S}${test4Slat},${test4Slon}`;
        return baseFetch4SGET(businessLatLon, callback, errorCallback);
    } else {
        console.log("Lat and Long are required", test4Slat, test4Slon);
    }
};

getVenueByLatLon();

function baseFetch4SByGET() {
    $.ajax({
        type: 'GET',
        url: venue,
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', "Bearer " + CLIENT4S_ID + CLIENT_SECRET);
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
};