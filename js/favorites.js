let favorites = [];
let faveIndex = 0;
let timer;

let favoriteHtml;

function imAwesome(response) {

    console.log(response);
}

function updateFavoriteListItem(favorite) {
    console.log(favorite.id)
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
    console.log(starRating);

    // Get the value
    var val = parseFloat(starRating);
    // Make sure that the value is in 0 - 5 range, multiply to get width
    var size = Math.max(0, (Math.min(5, val))) * 16;
    // Create stars holder
    // .append($("<i class='fas fa-star'></i>"));
    var $span = $('<span />').width(size);
    // Replace the numerical value with stars

    i = 0;
    while (i < $(this).attr('data-starCount')) {
        ratingEl.append('<i class="fa fa-star">');
        i++
    };

    // Check for and add a half star
    if (ratingEl.attr('data-starCount') % 1 !== 0) {
        ratingEl.append('<i class="fa fa-star-half">');
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