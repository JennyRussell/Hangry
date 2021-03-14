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
    $("#business").text(response.businesses[0].name);
    $("#displayPhone").text(response.businesses[0].display_phone);
    console.log(response);
}

function errorFunction(position) {
    alert('Error!');
}
getLatLong();