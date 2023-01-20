/*
Spread operator dapat digunakan untuk menggabungkan dua buah array dalam objek
array baru. Jika tidak menggunakan spread operator ini maka hasilnya seperti ini:
*/

const favorites = ["seafood", "Salad", "Nugget", "Soup"];

const others = ["cake", "Pie", "Donut"];

const allFavorites = [favorites, others];

console.log(allFavorites);

/*Sayang sekali, nilai array tidak akan tergabung. Alih-alih menggabungkan nilainya,
variabel allFavorite menjadi objek array baru yang menampung dua array di dalamnya.
Nah lantas bagaimana jika kita mencoba menggunakan spread operator? */

const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];
const others2 = ["Cake", "Pie", "Donut"];
 
const allFavorites2 = [...favorites2, ...others2]
 
console.log(allFavorites2);
 
/* output:
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/