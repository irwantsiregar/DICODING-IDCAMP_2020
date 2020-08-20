const webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BIGMF4bWoovCxHqfX0vDDGByZCDJwU9qtNYhya5I_cUvo3McADID5_vmMa1CTOXP-BBhBdUI4p1Ng7TdXlCxBqI",
   "privateKey": "QnYr1Wq6ryQDGB4C8GjGkqVWKH0Qmi92TPILdlEs6X8"
};
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)

const pushSubscription = {
   "endpoint": " https://fcm.googleapis.com/fcm/send/ddew62TqCYY:APA91bE7bbRtCMXLedQheSw_nDG6bRZyfk_SEHTFMMf9lSyQYGHgsDyFz-adhiw0OuzutDYPDV1igqRE9nTlo5ZaiFEz-M67RXQnvdymogha67Y5RT0G4d7fX8PCeBNWmaW62ub6WsaJ",
   "keys": {
       "p256dh": "BNZ3515Yn2BFyVYwouEQBn+kqNN83PPq4lXE/G+iFeJtZ71eiX/6xfZOZUJi/anwQPuv7m2wzmFb+iUkooP4YJU=",
       "auth": "vuCIVdvFYWYdbLOlyIUFCQ=="
   }
};

const payload = "Very good, Your application can do receive push notification.";
 
const options = {
   gcmAPIKey: '182654674244',
   TTL: 60
};


webPush.sendNotification(
   pushSubscription,
   payload,
   options
);