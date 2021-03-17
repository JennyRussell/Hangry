let favorites = [];
let faveIndex = 0;
let timer;

let favoriteHtml;

function updateFavoriteListItem(favorite) {
    $("#business-image").attr("src", favorite.img_url);
    $("#business-image").attr("id", "business-image" + faveIndex);
    $("#displayPhone").text(favorite.phone);
    $("#displayPhone").attr("id", "displayPhone" + faveIndex);

    $("#business").text(favorite.name);
    $("#business").attr("id", "business" + faveIndex);

    $("#displayPhone").text(favorite.phone);
    $("#displayPhone").attr("id", "displayPhone" + faveIndex);
    faveIndex++;
}

function justForFun() {
    // timer = setInterval(function() {


    //     console.log(favorites[faveIndex]);
    //     // getBusinessById(favorites[faveIndex].id, updateFavoritesCallback);
    // }, 3000)

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