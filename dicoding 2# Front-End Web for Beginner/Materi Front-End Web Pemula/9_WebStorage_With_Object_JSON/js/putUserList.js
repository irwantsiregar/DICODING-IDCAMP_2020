function putUserList(data){
    if(checkForStorage()){
        let userData = [];
        if (localStorage.getItem(storageKey) === null) {
            userData = [];
        } else {
            userData = JSON.parse(localStorage.getItem(storageKey));
        }     
        userData.unshift(data); 
        if (userData.length > 5) {
            userData.pop();
        }
        localStorage.setItem(storageKey, JSON.stringify(userData));   
    }
}