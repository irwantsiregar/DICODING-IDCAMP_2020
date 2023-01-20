importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
 
if (workbox) {
  // Precaching AppShell
  workbox.precaching.precacheAndRoute([
      { url: '/', revision: '1' },
      { url: '/index.html', revision: '1' },
      { url: '/nav.html', revision: '1' },
      { url: '/manifest.json', revision: '1' },

      { url: '/pages/home.html', revision: '1' },
      { url: '/pages/standings.html', revision: '1' },
      { url: '/pages/matches.html', revision: '1' },
      { url: '/pages/favorites.html', revision: '1' },
      { url: '/pages/scorers.html', revision: '1' },
      { url: '/pages/detail/team.html', revision: '1' },

      { url: '/js/materialize.min.js', revision: '1' },
      { url: '/js/nav.js', revision: '1' },
      { url: '/js/api.js', revision: '1' },
      { url: '/js/registration.js', revision: '1' },
      { url: '/js/standings.js', revision: '1' },
      { url: '/js/matches.js', revision: '1' },
      { url: '/js/scorers.js', revision: '1' },
      { url: '/js/teambyid.js', revision: '1' },
      { url: '/js/team.js', revision: '1' },

      { url: '/js/db/api-db.js', revision: '1' },
      { url: '/js/db/db.js', revision: '1' },
      { url: '/js/db/idb.js', revision: '1' },

      { url: '/css/materialize.min.css', revision: '1' },
      { url: '/css/style.css', revision: '1' },
      { url: '/image/android-chrome-512x512.png', revision: '1' },
      { url: '/image/android-chrome-192x192.png', revision: '1' },
      { url: '/image/apple-touch-icon.png', revision: '1' },
      { url: '/image/android-chrome-192x192.png', revision: '1' },
      { url: '/image/favicon-32x32.png', revision: '1' },
      { url: '/image/fb.png', revision: '1' },
      { url: '/image/ig.png', revision: '1' },
      { url: '/image/twitter.png', revision: '1' },
      { url: '/image/github.png', revision: '1' },

      { url: '/image/content/1.jpg', revision: '1' },
      { url: '/image/content/2.jpg', revision: '1' },
      { url: '/image/content/3.jpg', revision: '1' },
      { url: '/image/content/4.jpg', revision: '1' },
      { url: '/image/content/5.jpg', revision: '1' },
      { url: '/image/content/6.jpg', revision: '1' },
      { url: '/image/content/7.jpg', revision: '1' },
      { url: '/image/content/card-1.jpg', revision: '1' },
      { url: '/image/content/card-2.jpg', revision: '1' },
      { url: '/image/content/card-3.jpg', revision: '1' },
      { url: '/image/content/slider_1.jpg', revision: '1' },
      { url: '/image/content/slider_2.jpg', revision: '1' },
      { url: '/image/content/slider_3.jpg', revision: '1' },
      { url: '/image/content/parallax.jpg', revision: '1' },
  ]);

  // Membuat batasan penyimpanan data & penghapusan otomatis 
  // utk data" lama yg sudah tdk digunakan
    workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
      cacheName: 'Devsports-image',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 5 * 24 * 60 * 60
        }),
        new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
        }), 
      ],
    }),
  );

  // Caching halaman
    workbox.routing.registerRoute(
      new RegExp('/pages/'),
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'Devsports-pages'
        })
    );

    workbox.routing.registerRoute(
      new RegExp('/pages/detail/'),
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'Devsports-pages-detail'
        })
    );

  // Menyimpan Football-data ke dalam cache
    workbox.routing.registerRoute(
      new RegExp('https://api.football-data.org/v2/'),
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'Devsports-fetch',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }) ]
        })
    );
    console.log('Workbox loaded successfully.');
} else {
    console.log(`Opss.. Workbox failed to load!!`);
}


// Menerapkan PUSH NOTIFICATION
self.addEventListener('push', function(event) {
  const title = "New notification";
  let body;

  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push messages do not payload properly';
  }

  const options = {
    body: body,
    badge: '/image/badge.jpg',
    icon: './image/favicon-32x32.png',
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
      clients.openWindow('https://devsports-af8ea.web.app');
      break;
    case 'no-action':
      console.log('No-action is selected');
      break;
    default:
      console.log(`User-selected action is unknown: '${event.action}'`);
      break;
   }
});