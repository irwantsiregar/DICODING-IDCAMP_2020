function addTaskBookToFinished(taskBookElement) {
    const taskBookTitle = taskBookElement.querySelector('.inner > h1').innerText;
    const taskBookAuthor = taskBookElement.querySelector('.inner > h2').innerText;
    const taskBookYear = taskBookElement.querySelector('.inner > p').innerText;

    console.log(taskBookTitle);
    console.log(taskBookAuthor);
    console.log(taskBookYear);

    const newBook = makeBook(taskBookTitle, taskBookAuthor, taskBookYear, true);
    const book = findBook(taskBookElement[BOOK_ITEMID]);
    book.isFinished = true;

    newBook[BOOK_ITEMID] = book.id;
    finishedBookList.append(newBook);
    taskBookElement.remove();

    updateDataToStorage();
}

function editTaskBookToFinished(taskBookElement) {
    const taskBookTitle = taskBookElement.querySelector('.inner > h1').innerText;
    const taskBookAuthor = taskBookElement.querySelector('.inner > h2').innerText;
    const taskBookYear = taskBookElement.querySelector('.inner > p').innerText;
    
    const editButton = document.querySelector('.edit-button');
    
    editButton.addEventListener('click', function () {
        modalForm.style.display = 'block';
        
        const titleBook = document.getElementById('titleBook');
        const authorBook = document.getElementById('authorBook');
        const yearBook = document.getElementById('yearBook');
        const checked = checkboxFinish.getAttribute('checked') === 'checked' ? true : false;

        titleBook.value = taskBookTitle;
        authorBook.value = taskBookAuthor;
        yearBook.value = taskBookYear;
        console.log(titleBook.value);
        // console.log('OK');
    });




    // const newBook = makeBook(taskBookTitle, taskBookAuthor, taskBookYear, true);
    // const book = findBook(taskBookElement[BOOK_ITEMID]);
    // book.isFinished = true;

    // newBook[BOOK_ITEMID] = book.id;
    // finishedBookList.append(newBook);
    // taskBookElement.remove();

    // updateDataToStorage();
}







function removeTaskBookFromFinished(taskBookElement) {
    const bookPosition = findBookIndex(taskBookElement[BOOK_ITEMID]);
    books.splice(bookPosition, 1);

    taskBookElement.remove();
    updateDataToStorage();
}


function undoTaskBookFromFinished(taskBookElement) {
    const taskBookTitle = taskBookElement.querySelector('.inner > h1').innerText;
    const taskBookAuthor = taskBookElement.querySelector('.inner > h2').innerText;
    const taskBookYear = taskBookElement.querySelector('.inner > p').innerText;

    const newBook = makeBook(taskBookTitle, taskBookAuthor, taskBookYear, false);
    const book = findBook(taskBookElement[BOOK_ITEMID]);
    book.isFinished = false;

    newBook[BOOK_ITEMID] = book.id;
    notFinishedBookList.append(newBook);
    taskBookElement.remove();

    updateDataToStorage();
}
