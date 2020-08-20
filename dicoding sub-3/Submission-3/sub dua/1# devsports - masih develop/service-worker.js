const CACHE_NAME = "Devsports-player v.4.5";
const urlsToCache = [
  "/",
  "/index.html",
  "/nav.html",
  "/team.html",
  "/pages/standings.html",
  "/pages/matches.html",
  "/pages/favorites.html",

  "/css/style.css",
  "/css/materialize.min.css",
  "/js/materialize.min.js",
  "/manifest.json",
  
  "/js/nav.js",
  "/js/api.js",
  "/image/favicon-32x32.png",
  "/image/sports.png",
  "/image/icon.png"
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





