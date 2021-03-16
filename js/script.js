var currentIndex = 0;
var favoritesArray = [];


// global functions to get lat and long positions
function successFunction(position) {

}

function errorFunction(position) {
    alert("Error!");
}

//this function runs through each if the resturaunts when the next or favorite button is clicked
function loadRest(response, index = 0) {
    console.log("the callback response is", response)
    businessdistanceEl.textContent = (response.businesses[index].distance * 0.00062137119).toFixed(1) + "mi";
    businessTitleEl.textContent = response.businesses[index].name
    businessPhoneEl.textContent = response.businesses[index].display_phone;
    businessImageEl.src = response.businesses[index].image_url;
}





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
    loadRest(businesses)
    console.log(businesses)
})

//this is an event lsitener for the favorite button
favoriteButtonEl.addEventListener("click", function() {
    console.log("current index is", businesses, currentIndex)
    var businessId = businesses.businesses[currentIndex].id;
    favoritesArray.push(businessId);
    console.log(favoritesArray);

    loadRest(businesses, currentIndex++)
})


function convertMetersToMiles() {

}

//this is an event lsitener for the favorite button
favoriteButtonEl.addEventListener("click", function() {
    var businessId = businesses.businesses[currentIndex].id;
    favoritesArray.push(businessId);
    console.log(favoritesArray);
    myCallBack2(businesses);
});

function convertMetersToMiles() {}
//convert meters into miles