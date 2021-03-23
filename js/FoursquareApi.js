// const CLIENT4S_ID = "TSTXMVDKIC4DS2OOJGDEPJHGFEJMACWRPXJKGOKDTXQOXJVQ";
const CLIENT4S_ID = "RPLGUR1LRW0SNGQHN1HTG3QOOQVLDVL1NZJHEW42OQ4N01P4";
// const CLIENT_SECRET = "0SS0KJKAHWFBYZ0XUSYYZT5MWT3GGCAHTD3NZPSXGAIPO3JI";
const CLIENT_SECRET = "PYIHLJLXEU3HQDRQH2H0FSRSPLQQUDETXP4G5OEKYE05VTVV";

let localhostFS = "http://localhost:8082/";

let corsAnywhereFS = 'https://cors-anywhere.herokuapp.com/';

let baseURL4S = `https://api.foursquare.com/v2/`;
if (!IS_PROD) {
    baseURL4S = `${localhostFS}${baseURL4S}`;
    console.log(baseURL4S);
} else {
    baseURL = `${corsAnywhere}${baseURL}`;
    console.log(baseURL);
};


function getVenuesByLatLon(lat, lon, venueNameQuery, successCallback, errorCallback) {
    const today = moment();
    let formattedDate = today.format("YYYYMMDD");
    const venueSearch4S = "venues/search";
    let completeURL = `${baseURL4S}${venueSearch4S}?ll=${lat},${lon}&client_id=${CLIENT4S_ID}&client_secret=${CLIENT_SECRET}&limit=300&v=${formattedDate}&query=${venueNameQuery}`;
    console.log(completeURL);
    return baseFetchByGET(completeURL, null, successCallback, errorCallback);
};

function getVenueDetails(venueId, successCallback, errorCallback) {
    const today = moment();
    let formattedDate = today.format("YYYYMMDD");
    let completeURL = `${baseURL4S}venues/${venueId}?client_id=${CLIENT4S_ID}&client_secret=${CLIENT_SECRET}&v=${formattedDate}`;
    console.log(completeURL);
    return baseFetchByGET(completeURL, null, successCallback, errorCallback);
};