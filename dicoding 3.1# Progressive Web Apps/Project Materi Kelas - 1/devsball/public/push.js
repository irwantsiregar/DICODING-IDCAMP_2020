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
   "endpoint": " https://fcm.googleapis.com/fcm/send/d01gSdiZUP0:APA91bEJEEDimJwgbQu1B78UAG2GXYXI9ypj2Hq97nhMDtGODdjyhDoBOXhbCwii7UITKk1BYibBIZ9Oy61dnm8jmG1l1Zf1_tDTJn-HnP44RAFBwm5puPm-BKNMENo1P9mjCKoYYt00",
   "keys": {
       "p256dh": "BHzAsWHduVpF+x9utu70ie/wjF4c+Rlerx8nzx2Nhf4Vc8/ujpl7aQBSC9oh+duOp3gBXiLaD70r9cSZuKJkrJ0=",
       "auth": "qmX9P6r9p0DId883kKkBng=="
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