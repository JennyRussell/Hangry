let currentIndex = 0;
var favoritesArray = [];

function getLatLong() {
    $(document).ready(function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
        } else {
            alert(
                "It seems like Geolocation, which is required for this page, is not enabled in your browser."
            );
        }
    });

    function successFunction(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        console.log(lat);
        $("#long").text(long);
        $("#lat").text(lat);
        getBusinessByLatLon(lat, long, myCallBack2);
    }

    function errorFunction(position) {
        alert("Error!");
    }
}

function errorFunction(position) {
    alert("Error!");
}

//this function runs through each if the resturaunts when the next or favorite button is clicked
function myCallBack2(response) {



    businessdistanceEl.textContent =
        (response.businesses[currentIndex].distance * 0.00062137119).toFixed(1) +
        "mi";
    businessTitleEl.textContent = response.businesses[currentIndex].name;
    businessPhoneEl.textContent = response.businesses[currentIndex].display_phone;
    businessImageEl.src = response.businesses[currentIndex].image_url;
    currentIndex++;
}

var businessTitleEl = document.getElementById("business");
var businessPhoneEl = document.getElementById("displayPhone");
var businessImageEl = document.getElementById("business-image");
var businessdistanceEl = document.getElementById("distance");

var nextButtonEl = document.getElementById("next-button");
var favoriteButtonEl = document.getElementById("favorite-button");

//this is an event lsitener for the next button
nextButtonEl.addEventListener("click", function() {
    myCallBack2(businesses);
    console.log(businesses);
});

//this is an event lsitener for the favorite button
favoriteButtonEl.addEventListener("click", function() {
    var businessId = businesses.businesses[currentIndex].id;
    favoritesArray.push(businessId);
    console.log(favoritesArray);
    myCallBack2(businesses);
});

function convertMetersToMiles() {}
//convert meters into miles

getLatLong();