function saveDataBook() {
   const parsedDataBook = JSON.stringify(books);
   localStorage.setItem(STORAGE_KEY, parsedDataBook);
   document.dispatchEvent(new Event('onDataSaved'));
}
 
function loadDataFromStorage() {
   const serializedDataBook = localStorage.getItem(STORAGE_KEY);
   let dataBook = JSON.parse(serializedDataBook);
   
   if(dataBook !== null)
       books = dataBook;
 
   document.dispatchEvent(new Event('onDataLoaded'));
}
 
function updateDataToStorage() {
   if(isStorageExist())
       saveDataBook();
}
 
function composeBookObject(title, author, year, isFinished) {
   return {
       id: +new Date(),
       title,
       author,
       year,
       isFinished
   };
}