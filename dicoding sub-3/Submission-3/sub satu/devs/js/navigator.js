// Mendaftarkan Service Worker
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(function() {
          console.log("ServiceWorker Registration Successful");
        })
        .catch(function() {
          console.log("ServiceWorker Registration Failed");
        });
    });
  } else {
    console.log("ServiceWorker is not yet Supported on this browser.");
  }