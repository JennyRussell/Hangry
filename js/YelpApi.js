// YELP API is specific for ONLY the YELP Rest API and should not contain any jquery or dom editing.

const API_KEY = "27pO528tZIXKQa99yJd-KLZ93h6DM1t4kSykH9UkZ0IdbsEc_ELP1wmYNi54Y83892iN20ex53HQtokoXHVb1aa3_qRVUI47VIUT7MNinJNLLpcggtNv1atWwrVKYHYx";
const CLIENT_ID = "cdcxCdVgpGDur80CjemkRg";

let baseURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/";


let id = "wAVpMs0QtdzFFGhhjZAKHA";

function getBusinessById(id) {
    const business = `businesses/${id}`
    let businessId = `${baseURL}${business}`
    console.log("Hello");
    return baseFetch(callback)
    console.log(callback);
}

// getBusinessById(id, );


async function baseFetch(baseURL, callback) {
    const business = `businesses/${id}`
    let businessId = `${baseURL}${business}`
    console.log(baseURL);
    let req = new Request(businessId, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + API_KEY,
            'Content-Type': 'application/json',
            "X-Requested-With": "XMLHttpRequest",
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
            myCallBack(jsonData);
        })
        .catch((err) => {
            console.log(err);
        });

}
baseFetch(baseURL);