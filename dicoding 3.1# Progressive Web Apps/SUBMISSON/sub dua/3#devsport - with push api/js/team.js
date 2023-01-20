document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const isFromFavorite = urlParams.get("favorites");

  // mendeteksi tombol save-favorite
  const btnFavorite = document.getElementById("save-favorite");    

  if (isFromFavorite) {
    btnFavorite.style.display = 'none';
    getSavedFavoritesById();
  } 

  const teamId = teamById();

  btnFavorite.addEventListener('click', function() { 
   console.log("Tombol FAB Favorite telah di klik.");
    teamId.then(function(team) {
      saveFavorite(team);
    });
  });

});