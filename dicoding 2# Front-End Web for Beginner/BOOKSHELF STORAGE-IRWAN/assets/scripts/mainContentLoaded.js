document.addEventListener('DOMContentLoaded', function () {
    const submitForm = document.getElementById('formInput');
    const searchBook = document.getElementById('searchBook');

    submitForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addBook();
    });

    searchBook.addEventListener('keyup', function() {
        searchBooks();
    });


    if (isStorageExist()) {
    	loadDataFromStorage();
    }
});

document.addEventListener('onDataSaved', () => {
   console.log('Data saved successfully');
});

document.addEventListener('onDataLoaded', () => {
   refreshDataFromBooks();
});


const checkboxFinish = document.getElementById('checkboxFinish');
checkboxFinish.addEventListener('click', function() {
    checkboxFinish.setAttribute('checked', 'checked');
});