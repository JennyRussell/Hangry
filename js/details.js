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

window.onload = function updateDetails() {
    loadNavBar();



    $(`#goBack`).click("container", function() {
        window.location.href = `/favorites.html`;
    });

    // https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
    const urlParams = new URLSearchParams(window.location.search);
    const detailId = urlParams.get('businessId');
    let detail = getDetailById(detailId);

    $("#detailName").text(detail.name);
    $("#detailImg").attr("src", detail.img_url);
    $("#detailPhone").text(detail.phone);
    $("#detailAddress").text(detail.address);
    appendStarRating(detail.rating, $("#detailRating"));
}