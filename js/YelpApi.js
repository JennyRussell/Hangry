const API_KEY = "27pO528tZIXKQa99yJd-KLZ93h6DM1t4kSykH9UkZ0IdbsEc_ELP1wmYNi54Y83892iN20ex53HQtokoXHVb1aa3_qRVUI47VIUT7MNinJNLLpcggtNv1atWwrVKYHYx";
const CLIENT_ID = "cdcxCdVgpGDur80CjemkRg";

let baseURL = 'https://api.yelp.com/v3/';


//testing location
// const latitude = 33.46945063148673
// const longitude = -117.1231696967713

function getBusinessByLatLon(lat, lon) {
    const business = `businesses/search?latitude=${lat}&longitude=${lon}`
    let businessLatLon = `${baseURL}${business}`
    return baseFetch(businessLatLon, myCallBack)
}


function successFunction(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    alert('Your latitude is :' + lat + ' and longitude is ' + long);
}

function errorFunction(position) {
    alert('Error!');
}

function testApi() {
    getBusinessByLatLon(latitude, longitude);
}

function myCallBack(json) {
    console.log(json);
}

testApi();



async function baseFetch(baseURL, callback) {
    var req = new Request(baseURL, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + API_KEY,
            'Content-Type': 'application/json'
        })

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
            callback(jsonData);
        })
        .catch((err) => {
            console.log(err);
        });

}