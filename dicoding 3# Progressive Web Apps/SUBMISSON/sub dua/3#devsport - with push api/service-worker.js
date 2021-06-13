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
    caches.open(CACHE_NAME)
    .then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});


self.addEventListener("fetch", function(event) {
   const BASE_URL = "https://api.football-data.org/v2/";

  if (event.request.url.indexOf(BASE_URL) > -1) {
    event.respondWith(
      caches.open(CACHE_NAME)
      .then( cache => {
        return fetch(event.request)
        .then( response => {
          cache.put(event.request.url, response.clone());
          return response;
        })
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request, { ignoreSearch: true })
      .then( response => {
        return response || fetch (event.request);
      })
    )
  }
});


self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then( cacheNames => {
      return Promise.all(
        cacheNames.map( cacheName => {
          if (cacheName != CACHE_NAME) {
            console.log(`ServiceWorker: ${cacheName} cache has been deleted`);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});



// Menerapkan PUSH NOTIFICATION
self.addEventListener('push', function(event) {
  const title = "Football Notifications";
  let body;

  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push messages do not payload properly';
  }


  const options = {
    body: body,
    icon: 'image/android-chrome-192x192.png',
    vibrate: [200, 70, 300, 150],
    actions: [
        {
          action: 'yes-action',
          title: 'Yes'
        },
        {
          action: 'no-action',
          title: 'No'
        }
       ],
    data: {
      dateOfArrival: Date.now()
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );

});


self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  if (!event.action) {
    console.log('Notification is clicked in the outer area.');
    return;
  }

  switch (event.action) {
    case 'yes-action':
      console.log('Action yes is selected.');
      clients.openWindow('http://127.0.0.1:8887');
      break;
    case 'no-action':
      console.log('No-action is selected');
      break;
    default:
      console.log(`User-selected action is unknown: '${event.action}'`);
      break;
   }
});