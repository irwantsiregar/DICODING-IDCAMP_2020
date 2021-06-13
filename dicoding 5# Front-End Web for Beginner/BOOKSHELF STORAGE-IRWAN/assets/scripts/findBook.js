function findBook(bookId) {
   for(book of books){
       if(book.id === bookId)
           return book;
   }
   return null;
}
 
 
function findBookIndex(bookId) {
   let index = 0;
   for(book of books){
       if(book.id === bookId)
           return index;
 
       index++;
   }
   return -1;
}


function searchBooks() {
  const filter = searchBook.value.toUpperCase();
  const itemBook = document.querySelectorAll(".item");

  for (let i = 0; i < itemBook.length; i++) {
    const titleBook = itemBook[i].getElementsByTagName("h1")[0];
    if (titleBook.innerHTML.toUpperCase().indexOf(filter) > -1) {
      itemBook[i].style.display = "";
    } else {
      itemBook[i].style.display = "none";
    }
  }
}