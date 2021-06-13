function renderUserList() {
    const userData = getUserList();
    const userList = document.querySelector("#user-list-detail");
       
    userList.innerHTML = "";
   
    for (let user of userData) {
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + user.nama + "</td>";
        row.innerHTML += "<td>" + user.umur + "</td>";
        row.innerHTML += "<td>" + user.domisili + "</td>";
   
        userList.appendChild(row);
    }
}