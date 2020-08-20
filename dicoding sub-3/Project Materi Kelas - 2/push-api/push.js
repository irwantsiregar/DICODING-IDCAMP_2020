  var webPush = require('web-push');
   
  const vapidKeys = {
     "publicKey": "BFAyUbPp1ZENGi-gYb-l7QL24DdNjWUVyK6dCUJAdZ_2_6qi4kbwT68YrgmbBZ0zCJvd95nQuSXJncsQfn9uNdY",
     "privateKey": "LyzRXjifjOJeUUgCCYmLvmFSqxP0BRik-JddKXfelow"
  };
   
   
  webPush.setVapidDetails(
     'mailto:example@yourdomain.org',
     vapidKeys.publicKey,
     vapidKeys.privateKey
  )

  var pushSubscription = {
     "endpoint": " https://fcm.googleapis.com/fcm/send/eIjVgAu0obs:APA91bENqlPswHfji8eJm4nZY2KF7wpGhD5Oe9jm3PDB4WejrGxWR4IciwFQneKddfP2RY32xchr5ol7xt72DYnhHD-eyFzT_p9ICfGkoo0NpV0eFU-zv04x4K6p_e0GLD-byuCgX_Y6",
     "keys": {
         "p256dh": "BPat8KQBD3gitx4K8Hck0xgJJJHa21OmgPRxI2+BU6oorisRMvzqGCZsrIOz+0M+zL5UePPxvpLtH3UbAnE/Uo8=",
         "auth": " U0yA3OhAJohonvDPwxlErQ=="
     }
  };

  var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
   
  var options = {
     gcmAPIKey: '1017332371356',
     TTL: 60
  };

  webPush.sendNotification(
     pushSubscription,
     payload,
     options
  );