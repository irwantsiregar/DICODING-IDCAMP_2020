function refreshDataFromBooks() {
  for(book of books){
     const newBook = makeBook(book.title, book.author, book.year, book.isFinished);
     newBook[BOOK_ITEMID] = book.id;

     if(book.isFinished){
         finishedBookList.append(newBook);
     } else {
         notFinishedBookList.append(newBook);
     }
  }
}


function tabContentBook(statusBook, element ,color) {
    const tabContentBook = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabContentBook.length; i++) {
      tabContentBook[i].style.display = 'none';
    }
     
    const tabNavContent = document.getElementsByClassName('tabnavcontent');
    for (let i = 0; i < tabNavContent.length; i++) {
      tabNavContent[i].style.backgroundColor = '';
    }

    document.getElementById(statusBook).style.display = 'block';
    element.style.backgroundColor = color;
}