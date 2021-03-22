const CLIENT4S_ID = "TSTXMVDKIC4DS2OOJGDEPJHGFEJMACWRPXJKGOKDTXQOXJVQ";
const CLIENT_SECRET = "0SS0KJKAHWFBYZ0XUSYYZT5MWT3GGCAHTD3NZPSXGAIPO3JI";

let corsAnywhereFS = 'https://cors-anywhere.herokuapp.com/';

const baseURL4S = "https://api.foursquare.com/v2/";


function getVenuesByLatLon(lat, lon, venueNameQuery, successCallback, errorCallback) {
    const today = moment();
    let formattedDate = today.format("YYYYMMDD");
    const venueSearch4S = "venues/search";
    let completeURL = `${corsAnywhereFS}${baseURL4S}${venueSearch4S}?ll=${lat},${lon}&client_id=${CLIENT4S_ID}&client_secret=${CLIENT_SECRET}&limit=300&v=${formattedDate}&query=${venueNameQuery}`;
    return baseFetchByGET(completeURL, null, successCallback, errorCallback);
};

function getVenueDetails(venueId, successCallback, errorCallback) {
    const today = moment();
    let formattedDate = today.format("YYYYMMDD");
    let completeURL = `${corsAnywhereFS}${baseURL4S}venues/${venueId}?client_id=${CLIENT4S_ID}&client_secret=${CLIENT_SECRET}&v=${formattedDate}`;
    console.log(completeURL);
    return baseFetchByGET(completeURL, null, successCallback, errorCallback);
};