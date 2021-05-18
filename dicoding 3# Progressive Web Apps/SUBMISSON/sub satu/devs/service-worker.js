// Menyimpan Aset ke Cache
  const CACHE_NAME = "Devs_v1.9.1";
  const urlCache = [
    "/",
    "/navbar.html",
    "/index.html",
    "/manifest.json",

    "/image/fb.png",
    "/image/github.png",
    "/image/ig.png",
    "/image/twitter.png",
    "/image/c++.jpg",
    "/image/c1.jpg",
    "/image/java.jpg",
    "/image/js.jpg",
    "/image/mysql.jpg",
    "/image/php.jpg",
    "/image/phy.jpg",
    "/image/jumbo.jpg",

    "/image/card/1.jpg",
    "/image/card/2.jpg",
    "/image/card/3.jpg",
    "/image/card/4.jpg",
    "/image/card/5.jpg",
    "/image/card/6.jpg",
    "/image/card/7.jpg",
    "/image/card/8.jpg",
    "/image/card/9.jpg",
    "/image/card/10.jpg",

    "/image/favicon/favicon.ico",
    "/image/favicon/favicon-16x16.png",
    "/image/favicon/favicon-32x32.png",
    "/image/favicon/android-chrome-192x192.png",
    "/image/favicon/android-chrome-512x512.png",
    "/image/favicon/apple-touch-icon.png",

    "/pages/home.html",
    "/pages/php.html",
    "/pages/javascript.html",
    "/pages/python.html",
    "/pages/mysql.html",
    "/css/materialize.min.css",
    "/css/style.css",
    "/css/fonts.woff2",
    "/js/materialize.min.js",
    "/js/navbar.js"
    "/js/navigator.js"
  ];
   
  self.addEventListener("install", function(evn) {
    evn.waitUntil(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.addAll(urlCache);
      })
    );
  });


// Menggunakan Aset dari Cache
self.addEventListener("fetch", function(evn) {
  evn.respondWith(
    caches
      .match(evn.request, { cacheName: CACHE_NAME })
      .then(function(response) {
        if (response) {
          console.log("ServiceWorker -> Use Assets From Cache: ", response.url);
          return response;
        }
 
        console.log("ServiceWorker -> Load Assets From The Server: ", evn.request.url);

        return fetch(evn.request);
      })
  );
});


// Mekanisme Penghapusan Cache yg lama
self.addEventListener("activate", function(evn) {
  evn.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker -> cache " + cacheName + " has deleted");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});