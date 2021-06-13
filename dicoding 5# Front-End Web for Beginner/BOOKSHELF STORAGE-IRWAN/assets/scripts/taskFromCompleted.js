function addTaskBookToFinished(taskBookElement) {
	const taskBookTitle = taskBookElement.querySelector('.inner > h1').innerText;
    const taskBookAuthor = taskBookElement.querySelector('.inner > h2').innerText;
	const taskBookYear = taskBookElement.querySelector('.inner > p').innerText;	

	const newBook = makeBook(taskBookTitle, taskBookAuthor, taskBookYear, true);
	const book = findBook(taskBookElement[BOOK_ITEMID]);
	book.isFinished = true;

	newBook[BOOK_ITEMID] = book.id;
	finishedBookList.append(newBook);
    taskBookElement.remove();

    updateDataToStorage();
} 

function removeTaskBookFromFinished(taskBookElement) {
    const bookPosition = findBookIndex(taskBookElement[BOOK_ITEMID]);
    books.splice(bookPosition, 1);

    taskBookElement.remove();
    updateDataToStorage();
}


function undoTaskBookFromFinished(taskBookElement){
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
