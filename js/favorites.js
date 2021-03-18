let favorites = [];
let faveIndex = 0;
let timer;

let favoriteHtml;

function imAwesome(response) {

    console.log(response);
}

function updateFavoriteListItem(favorite) {
    console.log(favorite.id)


    $("#favorite-container").attr("id", favorite.id);
    $(`#${favorite.id}`).click(function() {
        window.location.href = `http://localhost:8080/details.html?businessId=${favorite.id}`;
    });

    $("#business-image").attr("src", favorite.img_url);
    $("#business-image").attr("id", "business-image" + faveIndex);
    $("#displayPhone").text(favorite.phone);
    $("#displayPhone").attr("id", "displayPhone" + faveIndex);

    $("#business").text(favorite.name);
    $("#business").attr("id", "business" + faveIndex);

    $("#displayPhone").text(favorite.phone);
    $("#displayPhone").attr("id", "displayPhone" + faveIndex);

    $("#rating").text(favorite.rating);
    $("#rating").attr("id", "rating" + faveIndex);
    appendStarRating(favorite.rating)
    let ratingEl = $("#rating" + faveIndex)
    appendStarRating(favorite.rating, ratingEl);
    faveIndex++;

}

function appendStarRating(starRating, ratingEl) {


    let fullStar = starRating.toString().split(".")[0];
    let halfStar = starRating.toString().split(".")[1];


    console.log(fullStar);
    if (fullStar) {
        for (let i = 0; i < fullStar; i++) {
            $(ratingEl).append($('<i class="fa fa-star">'));
        }
    }
    if (halfStar) {
        console.log(halfStar);
        $(ratingEl).append($('<i class="fa fa-star-half">'));
    }
}



function loadFavoritesFromLocalStorage() {
    favorites = getFromLocalStorage("favorites");
}

function loadFavoritesPage() {
    loadNavBar();
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
loadFavoritesPage();