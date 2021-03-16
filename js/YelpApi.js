// YELP API is specific for ONLY the YELP Rest API and should not contain any jquery or dom editing.
var businesses = [];
const API_KEY =
    "27pO528tZIXKQa99yJd-KLZ93h6DM1t4kSykH9UkZ0IdbsEc_ELP1wmYNi54Y83892iN20ex53HQtokoXHVb1aa3_qRVUI47VIUT7MNinJNLLpcggtNv1atWwrVKYHYx";
const CLIENT_ID = "cdcxCdVgpGDur80CjemkRg";

let baseURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/";

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

function getBusinessById(id) {
    let business = `businesses/${id}`;
    let businessId = `${baseURL}${business}`;
    console.log("Hello");
    return baseFetch(callback);
    console.log(callback);
}

async function baseFetch(baseURL, callback) {
    const business = `businesses/${id}`;
    let businessId = `${baseURL}${business}`;
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
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
        .then((jsonData) => {
            businesses = jsonData;
            // callback(jsonData);
            myCallBack(jsonData);
        })
        .catch((err) => {
            console.log(err);
        });
}
baseFetch(baseURL);