/*
Spreading operator dituliskan dengan three consecutive dots (....).
Sesuai namanya “Spread”, fitur baru ES6 ini digunakan untuk membentangkan nilai array
atau lebih tepatnya iterable objectmenjadi beberapa elements. Mari kita lihat contoh kode berikut:
*/

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
console.log(favorites);
 
/* output:
[ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
*/


const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];
 
console.log(...favorites2);
 
/* output:
Seafood Salad Nugget Soup
*/