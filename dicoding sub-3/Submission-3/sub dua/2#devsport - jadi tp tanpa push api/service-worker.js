const CACHE_NAME = "Devsports-player v.1.1";
const urlsToCache = [
  "/",
  "/index.html",
  "/nav.html",
  "/team.html",
  "/manifest.json",
  "/pages/standings.html",
  "/pages/matches.html",
  "/pages/favorites.html",

  "/js/materialize.min.js",
  "/js/registration.js",
  "/js/nav.js",
  "/js/api.js",
  "/js/standings.js",
  "/js/matches.js",
  "/js/team.js",
  "/js/teambyid.js",
  "/js/scorers.js",

  "/js/db/api-db.js",
  "/js/db/db.js",
  "/js/db/idb.js",

  "/css/style.css",
  "/css/materialize.min.css",
  "/image/android-chrome-512x512.png",
  "/image/android-chrome-192x192.png",
  "/image/favicon-32x32.png",
  "/image/fb.png",
  "/image/ig.png",
  "/image/twitter.png",

  "/image/content/1.jpg",
  "/image/content/2.jpg",
  "/image/content/3.jpg",
  "/image/content/4.jpg",
  "/image/content/5.jpg",
  "/image/content/6.jpg",
  "/image/content/7.jpg",
  "/image/content/card-1.jpg",
  "/image/content/card-2.jpg",
  "/image/content/card-3.jpg",
  "/image/content/slider_1.jpg",
  "/image/content/slider_2.jpg",
  "/image/content/slider_3.jpg",
  "/image/content/parallax.jpg"
];



self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});


self.addEventListener("fetch", function(event) {
   const BASE_URL = "https://api.football-data.org/v2/";

  if (event.request.url.indexOf(BASE_URL) > -1) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return fetch(event.request).then(function(response) {
          cache.put(event.request.url, response.clone());
          return response;
        })
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request, { ignoreSearch: true }).then(function(response) {
        return response || fetch (event.request);
      })
    )
  }
});


self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " telah dihapus");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});





