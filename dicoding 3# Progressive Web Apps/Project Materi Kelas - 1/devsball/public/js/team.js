document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const isFromFavorite = urlParams.get("favorites");

  // mendeteksi tombol save-favorite
  const btnSaveFavorite = document.getElementById("save-favorite");    
  const btnIconLove = document.getElementById("icon-love");
  btnIconLove.style.color = 'red';   

  if (isFromFavorite) {
    btnSaveFavorite.style.display = 'none';
    getSavedFavoritesById();
  } 
  
  const teamId = teamById();

    btnSaveFavorite.addEventListener('click', function() { 
     console.log("Tombol FAB Favorite telah di klik.");
      teamId.then(function(team) {
        saveFavorite(team);
        btnSaveFavorite.setAttribute('disabled', true);
        btnSaveFavorite.style.color = '#d0d0d0';
        btnIconLove.style.color = '#fbfafb';
      });
    });

});