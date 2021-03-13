function successFunction(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    console.log(lat);
    $("#long").text(long);
    $("#lat").text(lat);
    getBusinessByLatLon(lat, long, myCallBack2)
        // alert('Your latitude is :' + lat + ' and longitude is ' + long);
}

function myCallBack2(response) {
    $("#business").text(response.businesses[0].alias);
    $("#displayPhone").text(response.businesses[0].display_phone);
    console.log(response);
}

function errorFunction(position) {
    alert('Error!');
}