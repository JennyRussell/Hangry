let currentIndex = 0;

function getLatLong() {
    $(document).ready(function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successFunction, errorFunction);

        } else {
            alert('It seems like Geolocation, which is required for this page, is not enabled in your browser.');
        }
    });


    function successFunction(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        console.log(lat);
        $("#long").text(long);
        $("#lat").text(lat);
        getBusinessByLatLon(lat, long, myCallBack2)
    }

    function errorFunction(position) {
        alert('Error!');
    }
};


function myCallBack2(response) {
    //console.log(response);
    businessTitleEl.textContent = response.businesses[currentIndex].name
    businessPhoneEl.textContent = response.businesses[currentIndex].display_phone;
    businessImageEl.src = response.businesses[currentIndex].image_url;
    currentIndex++;

}

function errorFunction(position) {
    alert('Error!');
}



var businessTitleEl = document.getElementById("business");
var businessPhoneEl = document.getElementById("displayPhone");
var businessImageEl = document.getElementById("business-image");

var nextButtonEl = document.getElementById("next-button");



nextButtonEl.addEventListener("click", function(){
    console.log(businesses)
    myCallBack2(businesses)
    console.log(currentIndex);
})



//convert meters into miles


getLatLong();
