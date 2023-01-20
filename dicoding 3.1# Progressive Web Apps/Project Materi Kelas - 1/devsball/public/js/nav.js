document.addEventListener("DOMContentLoaded", function() {

  const sidenav = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sidenav);

  loadNav();
   
  function loadNav() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status != 200) return;

        document.querySelectorAll(".topnav, .sidenav").forEach(function(elm) {
          elm.innerHTML = xhttp.responseText;
        });
        // Perbaharui Menu
        document.querySelectorAll(".sidenav a, .topnav a").forEach(function(elm) {
          elm.addEventListener("click", function(event) {

            const sidenav = document.querySelector(".sidenav");
            M.Sidenav.getInstance(sidenav).close();
   
            page = event.target.getAttribute("href").substr(1);
            loadPage(page);
          });
        });
      }
    };
    xhttp.open("GET", "nav.html", true);
    xhttp.send();
  }

  const getPages = page => {
    if (page === "" || page === "#" || page == null) {
      page = "home";
    } else if (page === "standings") {
      page = "standings";
    } else if (page === "matches") {
      page = "matches";
    } else if (page === "scorers") {
      page = "scorers";
    } else if (page === "favorites") {
      page = "favorites";
    }
    return page;
  }

  // Load AllPage 
  let page = window.location.hash.substr(1);
  loadPage(getPages(page));

  function loadPage(page) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      let bodyContent = document.querySelector("#body-content");
      if (this.readyState === 4) {
          if (page === "standings") {
            standingsData();
          } else if (page === "matches") {
            matchesData();
          } else if (page === "scorers") {
            scorersData();
          } else if (page === "favorites") {
            getSavedFavorites();
          }


        if (this.status === 200) {
          bodyContent.innerHTML = xhttp.responseText;
        } else if (this.status === 404) {
          bodyContent.innerHTML = `<div class="container" id="#body-content"><h4 class="amber-text">Page not found <i class="material-icons left">announcement</i></h4></div>`;
        } else {
          bodyContent.innerHTML = `<div class="container" id="#body-content"><h4 class="red-text"><i class="material-icons left">notification_important</i>Can't accessed page</h4></div>`;
        }
      
     
        if (page === "home") {
          const slider = document.querySelectorAll('.slider');
          M.Slider.init(slider, {indicators: false,height: 450,interval: 12000});

          const carousel = document.querySelectorAll('.carousel');
          M.Carousel.init(carousel,{duration: 300,dist: -125});

          const parallax = document.querySelectorAll('.parallax');
          M.Parallax.init(parallax);
         }
         
      }
    };
    xhttp.open("GET", "pages/" + page + ".html", true);
    xhttp.send();
  }

}); 