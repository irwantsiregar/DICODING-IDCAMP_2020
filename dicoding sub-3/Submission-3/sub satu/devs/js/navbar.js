// Memuat elemen navigasi
document.addEventListener("DOMContentLoaded", function() {
  // mengaktifkan elemen sidebar saat icon menu di klik
  const sideNav = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sideNav);
  loadNavbar();
 
  function loadNavbar() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status != 200) return;
        document.querySelectorAll(".topnav, .sidenav").forEach(function(evn) {
          evn.innerHTML = xhr.responseText;
        });

          // Mendaftarkan eventlistener utk setiap item link menu
        document.querySelectorAll(".sidenav a, .topnav a").forEach(function(evn) {
          evn.addEventListener("click", function(event) {
            // Menutup sidenav
            const sideNav = document.querySelector(".sidenav");
            M.Sidenav.getInstance(sideNav).close();
   
            // Memuat contents halaman yg dipanggil
            page = event.target.getAttribute("href").substr(1);
            loadPage(page);
          });
        });

      }
    };
    xhr.open("GET", "navbar.html", true);
    xhr.send();
  }


    // Menampilkan Konten Halaman
  let page = window.location.hash.substr(1);
  if (page === "") page = "home";
  loadPage(page);
   
  function loadPage(page) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        let contents = document.querySelector("#contents");
        if (this.status === 200) {
          contents.innerHTML = xhr.responseText;
        } else if (this.status === 404) {
          contents.innerHTML = 
                    `<div class="container" style="width: 60%;">
                      <div class="card-panel red accent-3">
                        <h5 class="white-text">Hmm.. Page Not Pound !!</h5>
                      </div>
                    </div>`;
        } else {
          contents.innerHTML = 
                    `<div class="container" style="width: 60%;">
                      <div class="card-panel yellow accent-1">
                        <h5 class="amber-text text-accent-3">Unfortunately, The Page Cannot Be Accessed !!</h5>
                      </div>
                    </div>`;
        }
      }
    };
    xhr.open("GET", "pages/" + page + ".html", true);
    xhr.send();
  }


});





// XMLHttpRequest bisa diganti dengan Fetch dari gaya penulisan ES6
// fetch("pages"/ + page + ".html")
//   .then(response => response.text().then(text => console.log(text)));