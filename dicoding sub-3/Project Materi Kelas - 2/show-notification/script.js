
 // Periksa service worker
    if (!('serviceWorker' in navigator)) {
      console.log("Service worker tidak didukung browser ini.");
    } else {
      registerServiceWorker();
    }

    // Register service worker
    function registerServiceWorker() {
      return navigator.serviceWorker.register('service-worker.js')
        .then(function (registration) {
          console.log('Registrasi service worker berhasil.');
          return registration;
        })
        .catch(function (err) {
          console.error('Registrasi service worker gagal.', err);
        });
    }

    // Periksa fitur Notification API
    if ("Notification" in window) {
      requestPermission();
    } else {
      console.error("Browser tidak mendukung notifikasi.");
    } 

    // Meminta ijin menggunakan Notification API
    function requestPermission() {
      Notification.requestPermission().then(function (result) {
        if (result === "denied") {
          console.log("Fitur notifikasi tidak diijinkan.");
          return;
        } else if (result === "default") {
          console.error("Pengguna menutup kotak dialog permintaan ijin.");
          return;
        }
        
        console.log("Fitur notifikasi diijinkan.");
      });
    }



// Menampilkan notifikasi sederhana
function showNotifikasiSederhana() {
	const title  = 'Notifikasi Sederhana';
	const options = {
		'body' : 'Ini adalah konten notifikasi. \nBisa menggunakan baris baru'
	}

	if (Notification.permission === 'granted') {
		navigator.serviceWorker.ready.then(function(registration){
			registration.showNotification(title, options);
		});
	} else {
		console.error('Fitur Notifikasi tidak diijinkan.');
	}
}



// Menampilkan notifikasi require interaction
function showNotifikasiRequireInteraction() {
	const title  = 'Notifikasi yang meminta interaksi pengguna';
	const options = {
		requireInteraction : true
	};

	if (Notification.permission === 'granted') {
		navigator.serviceWorker.ready.then(function(registration){
			registration.showNotification(title, options);
		});
	} else {
		console.error('Fitur Notifikasi tidak diijinkan.');
	}
}



// Menampilkan notifikasi dengan gambar Icon
function showNotifikasiIcon() {
	const title  = 'Notifikasi Sederhana';
    const options = {
        'body': 'Ini adalah konten notifikasi dengan gambar ikon.',
        'icon': 'img/logo.png'
    };

	if (Notification.permission === 'granted') {
		navigator.serviceWorker.ready.then(function(registration){
			registration.showNotification(title, options);
		});
	} else {
		console.error('Fitur Notifikasi tidak diijinkan.');
	}
}



// Menampilkan notifikasi dengan gambar badge
function showNotifikasiBadge() {
    const title = 'Notifikasi dengan Badge';
    const options = {
        'body': 'Ini adalah konten notifikasi dengan gambar badge.',
        'badge': 'img/logo.png'
    };
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification(title, options);
        });
    } else {
        console.error('Fitur notifikasi tidak diijinkan.');
    }
}



// Menampilkan notifikasi dengan Action ke pengguna
function showNotifikasiActions() {
    const title = 'Notifikasi dengan Actions';
    const options = {
        'actions': [
            {
                'action': 'yes-action',
                'title': 'Ya'
                // 'icon': '/img/yes.png'
            },
            {
                'action': 'no-action',
                'title': 'Tidak'
                // 'icon': '/img/no.png'
            }
        ]
    };

    if (Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification(title, options);
        });
    } else {
        console.error('Fitur notifikasi tidak diijinkan.');
    }
}



// Opsi tag berguna untuk mengelompokkan notifikasi-notifikasi yg sejenis
function showNotifikasiTag() {
    const title1 = 'Notifikasi dengan Tag - 1';
    const options1 = {
        body: 'Anggota tag 1',
        tag: 'message-group-1'
    };
    // notifikasi kedua
    const title2 = 'Notifikasi dengan Tag - 2';
    const options2 = {
        body: 'Anggota tag 2',
        tag: 'message-group-2'
    };
    // notifikasi ketiga
    const title3 = 'Notifikasi dengan Tag - 3';
    const options3 = {
        body: 'Anggota tag 1',
        tag: 'message-group-1'
    };
    if (Notification.permission === 'granted') {
    navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification(title1, options1);
            registration.showNotification(title2, options2);
            registration.showNotification(title3, options3);
        });
    } else {
    console.error('Fitur notifikasi tidak diijinkan.');
    }
}



// Agar notifikasi baru dengan tag yang sama masih membunyikan suara atau bergetar
function showNotifikasiRenotify() {
    const title = 'Notifikasi dengan Renotify';
    const options = {
        body: 'Renotify',
        tag: 'message-group-1',
        renotify: true,
    };

    if (Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification(title, options);
        });
    } else {
        console.error('Fitur notifikasi tidak diijinkan.');
    }
}



// Utk memastikan notifikasi muncul tanpa suara, getaran, atau menghidupkan layar, kita bisa menonaktifkan fitur-fitur tsb.
function showNotifikasiSilent() {
    const title = 'Notifikasi Senyap';
    const options = {
        silent: true
    };
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification(title, options);
        });
    } else {
        console.error('Fitur notifikasi tidak diijinkan.');
    }
}



// Menampilkan gambar sebagai bagian dari notifikasi itu sendiri, mirip seperti Badge & Icon
function showNotifikasiGambar() {
    const title = 'Notifikasi dengan Gambar';
    const options = {
        'body': 'Ini adalah konten notifikasi dengan gambar latar.',
        'image': 'img/2.jpg'
    };
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification(title, options);
        });
    } else {
        console.error('Fitur notifikasi tidak diijinkan.');
    }
}