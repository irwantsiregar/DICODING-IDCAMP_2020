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
   "endpoint": "https://fcm.googleapis.com/fcm/send/dO23iMaI4uc:APA91bHcYozqrOXrGWmVoO0uDxfv0hFOFhCBbt4Tyu35UANj7bED-i4GUWlfadILokRz0YKl3SUAx6uI3ddDbGym1pLX2nid-YSKDqUAHWpYi6ib0r6F5q0CbEIUHj7BA2J4JbiQVoW9",
   "keys": {
       "p256dh": "BI2tzwiTYe8mGIUlxZdGCJ52nT9QQsXhtXGLJHPszYkQ5f2nR1ltLo3352t7HAl3ts9p1AHW9w7YlrmGoNwK0JY=",
       "auth": "YX8DFIAd2QsCUnjd2hpcxA=="
   }
};

const payload = "The latest information from the world of football is here for you";
 
const options = {
   gcmAPIKey: '182654674244',
   TTL: 60
};


webPush.sendNotification(
   pushSubscription,
   payload,
   options
);