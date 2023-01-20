const btnAdd = document.getElementById('btnAdd');
const btnSearch = document.getElementById('btnSearch');
const modalForm = document.getElementById('modalForm');
const modalFormSearch = document.getElementById('modalFormSearch');
const closeAdd = document.getElementById('closeAdd');
const closeSearch = document.getElementById('closeSearch');
const btnNotFinished = document.querySelector('.btn_notfinished');
const btnFinished = document.querySelector('.btn_finished');

btnAdd.addEventListener('click', function () {
    modalForm.style.display = 'block';
});

btnSearch.addEventListener('click', function () {
    modalFormSearch.style.display = "block";
});

closeAdd.addEventListener('click', function () {
    modalForm.style.display = 'none';
});

closeSearch.addEventListener('click', function () {
    modalFormSearch.style.display = 'none';
});

btnNotFinished.click();
btnNotFinished.addEventListener('click', function () {
    tabContentBook('notFinishedReading', this, '#d6e6f2');
});

btnFinished.addEventListener('click', function () {
    tabContentBook('finishedReading', this, '#d6e6f2');
});

window.addEventListener('click', function (event) {
    if (event.target == modalForm) {
        modalForm.style.display = 'none';
    }
    if (event.target == modalFormSearch) {
        modalFormSearch.style.display = 'none';
    }
});

