function addBook() {
	const titleBook = document.getElementById('titleBook').value.toUpperCase();
	const authorBook = document.getElementById('authorBook').value.toUpperCase();
	const yearBook = document.getElementById('yearBook').value;
	const checked = checkboxFinish.getAttribute('checked') === 'checked' ? true : false;
	console.log(checked);

	const book = makeBook(titleBook, authorBook, yearBook, checked);
	const bookObject = composeBookObject(titleBook, authorBook, yearBook, checked);

	book[BOOK_ITEMID] = bookObject.id;
	books.push(bookObject);

	modalForm.style.display = "none";
	if (checked) {
		finishedBookList.append(book);
		updateDataToStorage();
		return;
	}
	notFinishedBookList.append(book);
	updateDataToStorage();
}


function makeBook(title, author, year, isFinished) {
	const textTitleBook = document.createElement('h1');
	textTitleBook.innerText = title;

	const textAuthorBook = document.createElement('h2');
	textAuthorBook.innerText = author;

	const textYearBook = document.createElement('p');
	textYearBook.innerText = year;

	const textContainer = document.createElement('div');
	textContainer.classList.add('inner');
	textContainer.append(textTitleBook, textAuthorBook, textYearBook);

	const containerBooks = document.createElement('div');
	containerBooks.classList.add('item', 'shadow');
	containerBooks.append(textContainer);

	if (isFinished) {
		containerBooks.append(
			createUndoButton(),
			createTrashButton()
		);
	} else {
		containerBooks.append(
			createCheckButton(),
			createEditButton(),
			createTrashButton(),
		);
	}

	return containerBooks;
}

