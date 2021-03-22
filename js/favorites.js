let favorites = [];
let faveIndex = 0;
let timer;

let favoriteHtml;

function updateFavoriteListItem(favorite) {

    $("#favorite-container").attr("id", favorite.id);
    $(`#${favorite.id}`).click("container", function() {
        window.location.href = `/details.html?businessId=${favorite.id}`;
    });

    $("#business-image").attr("src", favorite.img_url);
    $("#business-image").attr("id", "business-image" + faveIndex);
    $("#displayPhone").text(favorite.phone);
    $("#displayPhone").attr("id", "displayPhone" + faveIndex);

    $("#business").text(favorite.name);
    $("#business").attr("id", "business" + faveIndex);

    $("#rating").text(favorite.rating);
    $("#rating").attr("id", "rating" + faveIndex);
    appendStarRating(favorite.rating)
    let ratingEl = $("#rating" + faveIndex)
    appendStarRating(favorite.rating, ratingEl);
    faveIndex++;
}



function loadFavoritesFromLocalStorage() {
    favorites = getFromLocalStorage("favorites");
}

function loadFavoritesPage() {
    loadNavBar();
    updateNavBar();
    loadFavoritesFromLocalStorage();
    addFavoriteToFavoritesList();
}

function addFavoriteToFavoritesList() {
    // /Users/jenny/Desktop/group-project-1/Hangry/views/nav.html
    $.ajax({
        type: 'GET',
        url: "views/favorite.html",
        dataType: 'html',
        success: function(html) {
            favoriteHtml = html;
        }
    }).then(html => {

        favorites.forEach(fave => {
            $("#faveList").append(html);
            updateFavoriteListItem(fave);
        })

    });
}

$(document).ready(function() {
    loadFavoritesPage();
});