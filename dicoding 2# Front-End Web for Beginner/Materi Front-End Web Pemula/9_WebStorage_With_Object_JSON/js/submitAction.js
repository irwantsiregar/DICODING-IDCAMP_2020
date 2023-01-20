const submitAction = document.getElementById("form-data-user");

submitAction.addEventListener("submit", function(event){
    const inputNama = document.getElementById("nama").value;
    const inputUmur = document.getElementById("umur").value;
    const inputDomisili = document.getElementById("domisili").value;
    const newUserData = {
        nama: inputNama,
        umur: inputUmur,
        domisili: inputDomisili,
    }
    putUserList(newUserData);
    renderUserList();
});