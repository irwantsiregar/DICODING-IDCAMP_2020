function isStorageExist() /* boolean */ {
   if(typeof(Storage) === undefined){
       alert('Your Browser does not support local storage');
       return false;
   }
   return true;
}