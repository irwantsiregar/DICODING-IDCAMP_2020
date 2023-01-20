window.addEventListener("load", function(){
    if (typeof(Storage) !== "undefined") {
        // inisialisasi semua item web storage yang kita akan gunakan jika belum ada
        if (sessionStorage.getItem(sessionAnswerKey) === null){
            sessionStorage.setItem(sessionAnswerKey, "");
        }if (sessionStorage.getItem(sessionUserAttempsKey) === null){
            sessionStorage.setItem(sessionUserAttempsKey, 0);
        }if (sessionStorage.getItem(sessionUserIsPlayingKey) === null){
            sessionStorage.setItem(sessionUserIsPlayingKey, false);
        }if (localStorage.getItem(localTotalVictoryKey) === null){
            localStorage.setItem(localTotalVictoryKey, 0);
        }if (localStorage.getItem(localMaximumAttempsKey) === null){
            localStorage.setItem(localMaximumAttempsKey, 0)
        }
    }else{
        alert("Browser yang Anda gunakan tidak mendukung Web Storage")
    }

    //inisialisasi semua nilai field pada dokumen yang menggunakan nilai dari web storage
    sessionUserAttempsField.innerText = sessionStorage.getItem(sessionUserAttempsKey);
    localTotalVictoryField.innerText = localStorage.getItem(localTotalVictoryKey);
    localMaximumAttempField.innerText = localStorage.getItem(localMaximumAttempsKey);
});