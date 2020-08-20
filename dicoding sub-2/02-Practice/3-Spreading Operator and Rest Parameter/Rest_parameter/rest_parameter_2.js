/*
Rest parameter juga dapat digunakan pada array destructuring, di mana kita dapat mengelompokkan
nilai-nilai array yang terdestruksi pada variabel dalam bentuk array yang lain.
Sedikit bingung? Mari lihat contoh kode berikut ini:
*/

const refrigenerator = ["Samsung", 50, 2, "milk", "cheese", "milk", "butter"];

const [manufacture, weight, door, ...items] = refrigenerator;

console.log(manufacture);
console.log(weight);
console.log(door);
console.log(items);

/* output:
Samsung
50
2
[ 'milk', 'cheese', 'egg', 'butter' ]
*/