let currentIndex = 0;
let favoritesArray = [];
var businesses = [];


const businessTitleEl = document.getElementById("business");
const businessPhoneEl = document.getElementById("displayPhone");
const businessImageEl = document.getElementById("business-image");
const businessdistanceEl = document.getElementById("distance");

const nextButtonEl = document.getElementById("next-button");
const favoriteButtonEl = document.getElementById("favorite-button");

const LoadingSpinner = document.getElementById("loading-spinner")

//this function runs through each if the resturaunts when the next or favorite button is clicked
function loadRest(response) {
    businesses = response.businesses;
    //console.log(businesses);

    //these hide the buttons until the data loads
    nextButtonEl.setAttribute("class", "see");
    favoriteButtonEl.setAttribute("class", "see");

    
    //moved index logic to 0 here, as the response json returns a list response. This can be manipulated in the callback for your specific UI.
    updateBusinessInformation(businesses);

    //this hides the loading spinner
    LoadingSpinner.setAttribute("class", "hide");

   
}

function updateBusinessInformation(businesses) {

    businessdistanceEl.textContent = (businesses[currentIndex].distance * 0.00062137119).toFixed(1) + "mi";
    businessTitleEl.textContent = businesses[currentIndex].name;
    businessPhoneEl.textContent = businesses[currentIndex].display_phone;
    businessImageEl.src = businesses[currentIndex].image_url;
    
}


function errorFunction(err) {
    console.log("say hello");
}

// (businesses[currentIndex].distance * 0.00062137119).toFixed(1) + "mi";
function indexSuccessCallback(latLon) {
    console.log("we have an geolocator!")
    console.log(latLon);
    // console.log("the current postion is", position.cords.latitude)
    // const lat = position.coords.latitude;
    // const long = position.coords.longitude;

    $("#long").text(latLon.lon);
    $("#lat").text(latLon.lat);
    getBusinessByLatLon(latLon.lat, latLon.lon, loadRest);
}

// This is the entry point for the entire application.
$(document).ready(function() {
    console.log("hey, we are at the starting point of our app")
    getLocation(indexSuccessCallback, errorFunction);
});

 //this is an event listener for the favorite button
 favoriteButtonEl.addEventListener("click", function(event) {
    event.stopPropagation()
    console.log(businesses[currentIndex]);
    console.log(event)
    var businessId = businesses[currentIndex].id;
    favoritesArray.push(businessId);

    saveToLocalStorage('favorites', favoritesArray);
    currentIndex++;
    //will load the next item from the list array
    if(currentIndex < businesses.length){
        updateBusinessInformation(businesses);
    } else {
        businessdistanceEl.textContent = "No more resturaunts"
        businessTitleEl.textContent = ""
        businessPhoneEl.textContent = ""
        businessImageEl.src = ""
    }
});

//this is an event listener for the next button
nextButtonEl.addEventListener("click", function(event) {
    event.stopPropagation()
    currentIndex++;
    if(currentIndex < businesses.length){
        updateBusinessInformation(businesses);
    } else {
        businessdistanceEl.textContent = "No more resturaunts"
        businessTitleEl.textContent = ""
        businessPhoneEl.textContent = ""
        businessImageEl.src = ""
    }
    //will load the next item from the list array
    
})

const swiper = new Swiper('.swiper-container', {
    // Optional parameters

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

for (var i = 0; i < 10; i++) {
    $('.swiper-wrapper').append('<div class="swiper-slide">Slide ' + i + '</div>');
    updateBusinessInformation(businesses);
 currentIndex++;

}
// And init swiper