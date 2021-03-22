let currentDetailName;


function getDetailById(id) {
    let detailsArray = getFromLocalStorage("favorites");
    let foundDetail;
    detailsArray.forEach(detail => {
        if (detail.id === id) {
            foundDetail = detail;
        }
    });
    return foundDetail;
}

function successVenueDetailCallback(response) {
    if (response.response.venue.likes) {
        $("#detailLikes").text(`${response.response.venue.likes.count} people have liked this restaurant.`)
    }
}

function errorVenueDetailCallback() {

}

function fsSuccessCallback(response) {
    let isFoundVenue = false;
    response.response.venues.forEach(venue => {
        if (currentDetailName === venue.name && !isFoundVenue) {
            isFoundVenue = true;
            getVenueDetails(venue.id, successVenueDetailCallback, errorVenueDetailCallback);
        }
    })
}

$(`#goBack`).click("container", function() {
    window.location.href = `/favorites.html`;
});

function fsErrorCallback() {
    console.log("an error");
}

window.onload = function updateDetails() {
    loadNavBar();
    const urlParams = new URLSearchParams(window.location.search);
    const detailId = urlParams.get('businessId');
    let detail = getDetailById(detailId);
    currentDetailName = detail.name;
    const location = getFromLocalStorage("userLocation");
    getVenuesByLatLon(location.latitude, location.longitude, detail.name, fsSuccessCallback, fsErrorCallback);

    $(`#goBack`).click("container", function() {
        window.location.href = `/favorites.html`;
    });

    // https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript


    $("#detailName").text(detail.name);
    $("#detailImg").attr("src", detail.img_url);
    $("#detailPhone").text(detail.phone);
    $("#detailAddress").text(detail.address.join(", "));
    appendStarRating(detail.rating, $("#detailRating"));
}