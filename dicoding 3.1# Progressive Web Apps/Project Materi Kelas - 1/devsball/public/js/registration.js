 // MENDAFTARKAN SERVICE WORKER

if ('serviceWorker' in navigator) {
  registerServiceWorker();
  requestPermission();
} else {
  console.log("Service workers are not supported by this browser.");
}


function registerServiceWorker() {
  return navigator.serviceWorker.register('../service-worker.js')
    .then( registration => {
      console.log('Service worker registration is successful.');
      return registration;
    })
    .catch( err => {
      console.error('Opps.. Service worker registration has failed.', err);
    });
}


function requestPermission() {
  if ('Notification' in window) {
    Notification.requestPermission().then( result => {
      if (result === "denied") {
        console.log("Notification feature is not allowed to be used.");
        return;
      } else if (result === "default") {
        console.error("User closes the feature permission request dialog box.");
        return;
      }

      // Berlangganan pesan push
      if ('PushManager' in window) {
        navigator.serviceWorker.getRegistration().then( function (registration) {
          registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: urlBase64ToUint8Array("BIGMF4bWoovCxHqfX0vDDGByZCDJwU9qtNYhya5I_cUvo3McADID5_vmMa1CTOXP-BBhBdUI4p1Ng7TdXlCxBqI")
          })
          .then( subscribe => {
              console.log('Successfully subscribeb with an endpoint: ', subscribe.endpoint);
              console.log('Successfully subscribeb with an p256dh key: ', btoa(String.fromCharCode.apply(null, new Uint8Array(subscribe.getKey('p256dh'))) ));
              console.log('Successfully subscribeb with an auth key: ', btoa(String.fromCharCode.apply(null, new Uint8Array(subscribe.getKey('auth'))) ));
          })
          .catch( mess => {console.error('Opps.. unable to subscribe ', mess.message)} );
       });
      }

   });      
  }
}


// Mengubah publicKey ke dalam bentuk Uint8Array
function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}