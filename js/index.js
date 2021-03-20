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

function toBusinessObject(business) {
    return {
        "id": business.id,
        "img_url": business.image_url,
        "location": business.location,
        "name": business.name,
        "phone": business.display_phone,
        "rating": business.rating,
        "businessURL": business.url,
        "address": business.location.display_address
    }
}

//this function runs through each if the resturaunts when the next or favorite button is clicked
function loadRest(response) {
    businesses = response.businesses;
    console.log(businesses);

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
function indexSuccessCallback(coords) {

    $("#long").text(coords.longitude);
    $("#lat").text(coords.latitude);
    getBusinessByLatLon(coords.latitude, coords.longitude, loadRest, errorFunction);

}

// This is the entry point for the entire application.
$(document).ready(function() {
    updateNavBar();
    loadNavBar();
    console.log("hey, we are at the starting point of our app")
        //load previous localstorage for favorites.
    let faves = getFromLocalStorage("favorites");
    if (faves) {
        businessesArray = faves;
    }

    getLocation(indexSuccessCallback, errorFunction);
});

//this is an event listener for the favorite button
favoriteButtonEl.addEventListener("click", function(event) {
    event.stopPropagation()
    favoritesArray.push(toBusinessObject(businesses[currentIndex]));
    saveToLocalStorage('favorites', favoritesArray);
    currentIndex++;
    //will load the next item from the list array
    if (currentIndex < businesses.length) {
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
    if (currentIndex < businesses.length) {
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
