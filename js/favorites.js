let favorites = [];
let favoriteBusinesses = [];
let faveIndex = 0;
let timer;

function updateFavoritesCallback(favorite) {
    if (faveIndex === favorites.length) {
        clearInterval(timer);
    }

    favoriteBusinesses = favorite;
    $("#business-image").attr("src", favorite.image_url);
    $("#displayPhone").text(favorite.display_phone);
    $("#business").text(favorite.name);
}

function justForFun() {
    timer = setInterval(function() {
        faveIndex++;
        getBusinessById(favorites[faveIndex], updateFavoritesCallback);
    }, 3000)

}

function loadFavoritesFromLocalStorage() {
    favorites = getFromLocalStorage("favorites").split(",");
}

function loadFavoritesPage() {
    loadFavoritesFromLocalStorage();
    justForFun();
    // getBusinessById(favorites[faveIndex], updateFavoritesCallback);
}

loadFavoritesPage();