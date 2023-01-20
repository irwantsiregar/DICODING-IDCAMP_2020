function getUserList() {
    if (checkForStorage()) {
        return JSON.parse(localStorage.getItem(storageKey)) || [];
    } else {
        return [];
    }
}