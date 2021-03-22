let currentIndex = 0;
let favoritesArray = [];
//this is a fix to prevent loadRest to keep adding event listeners;
var didListenersLoad = false;

const businessTitleEl = document.getElementById("business");
const businessPhoneEl = document.getElementById("displayPhone");
const businessImageEl = document.getElementById("business-image");
const businessdistanceEl = document.getElementById("distance");

const nextButtonEl = document.getElementById("next-button");
const favoriteButtonEl = document.getElementById("favorite-button");
const LoadingSpinner = document.getElementById("loading-spinner")


function toBusinessObject(business) {
    return {
        "id": business.id,
        "img_url": business.image_url,
        "location": business.location,
        "name": business.name,
        "phone": business.phone,
        "rating": business.rating,
        "businessURL": business.url
    }
}

//this function runs through each if the resturaunts when the next or favorite button is clicked
function loadRest(response) {
    businesses = response.businesses;
    //moved index logic to 0 here, as the response json returns a list response. This can be manipulated in the callback for your specific UI.
    updateBusinessInformation(businesses);

    //these hide the buttons until the data loads
    nextButtonEl.setAttribute("class", "see");
    favoriteButtonEl.setAttribute("class", "see");


    if (!didListenersLoad) {

        //this is an event lsitener for the favorite button
        favoriteButtonEl.addEventListener("click", function() {
            // businesses[currentIndex]
            favoritesArray.push(toBusinessObject(businesses[currentIndex]));
            saveToLocalStorage('favorites', favoritesArray);
            ++currentIndex;
            //will load the next item from the list array
            loadRest(response)
        });

        //this is an event lsitener for the next button
        nextButtonEl.addEventListener("click", function() {
            currentIndex++;
            //will load the next item from the list array
            loadRest(response)
        })
        didListenersLoad = true;
    }

}

function updateBusinessInformation(businesses) {
    if (businesses) {
        businessdistanceEl.textContent =
            (businesses[currentIndex].distance * 0.00062137119).toFixed(1) + "mi";
        businessTitleEl.textContent = businesses[currentIndex].name;
        businessPhoneEl.textContent = businesses[currentIndex].display_phone;
        businessImageEl.src = businesses[currentIndex].image_url;
    }
}


function errorFunction() {

}

function indexSuccessCallback(coords) {
    $("#long").text(coords.longitude);
    $("#lat").text(coords.latitude);
    getBusinessByLatLon(coords.latitude, coords.longitude, loadRest, errorFunction);
}

// This is the entry point for the entire application.
$(document).ready(function() {
    loadNavBar();
    console.log("hey, we are at the starting point of our app")
    let faves = getFromLocalStorage("favorites");
    if (faves) {
        favoritesArray = faves;
    }
    getLocation(indexSuccessCallback, errorFunction);
});
// clearLocalStorage();