window.addEventListener("load", function(){
    if (checkForStorage) {
        if (localStorage.getItem(storageKey) !== null){
            const userData = getUserList();
            renderUserList(userData);
        	console.log("Berhasil menampilkan data");
        } else {
        	console.log("User belum pernah input data");        	
        }
    }else {
        alert("Browser yang Anda gunakan tidak mendukung Web Storage")
    }
});












