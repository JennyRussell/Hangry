$(document).ready(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    } else {
        alert("It seems like Geolocation, which is required for this page, is not enabled in your browser.");
    }
});
function successFunction(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    alert("Your latitude is :" + lat +  " and longitude is " + long);
}
function errorFunction(position) {
    alert("Error!");
}