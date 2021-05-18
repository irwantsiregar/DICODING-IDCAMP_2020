## Multiple export value in Node.js
Pada pengenalan modul disebutkan dalam satu modul kita dapat mengekspor banyak nilai. Lantas bagaimana cara melakukannya?

Sebenarnya nilai yang diekspor tetaplah satu, namun jika terdapat kasus di mana kita ingin mengekspor lebih dari satu nilai, kita dapat memanfaatkan objek literals { }. Contohnya, mari kita kita tambahkan variabel isCoffeeMakerReady pada berkas state.js.

const coffeeStock = {
  arabica: 100,
  robusta: 150,
  liberica: 200
}
 
const isCoffeeMakerReady = true;
Lantas untuk mengeksport kedua nilai (coffeeStock, isCoffeeMakerReady) kita tidak melakukannya dengan seperti ini:

module.exports = coffeeStock;
module.exports = isCoffeeMakerReady;
Namun dengan memanfaatkan objek literal seperti ini:

module.exports = {coffeeStock, isCoffeeMakerReady};
Sehingga jika kita lihat nilai module pada console, nilai dari properti exports merupakan sebuah objek yang menampung nilai dari objek coffeeStock dan variabel isCoffeeMakerReady:

Module {
  id: '.',
  exports:
   { coffeeStock: { arabica: 100, robusta: 150, liberica: 200 },
     isCoffeeMakerReady: true },
  parent: null,
  filename: '/home/runner/163-02-multiple-export-nodejs/state.js',
  loaded: false,
  children: [],
  paths:
   [ '/home/runner/163-02-multiple-export-nodejs/node_modules',
     '/home/runner/node_modules',
     '/home/node_modules',
     '/node_modules' ] }
Lalu bagaimana cara melakukan impor kedua nilai tersebut? Masih ingat dengan materi destructuring object? Pada berkas index.js, kita gunakan teknik destructuring object dalam mendapatkan kedua nilainya seperti ini:

#index.js
const {coffeeStock, isCoffeeMakerReady} = require('./state.js');

console.log(coffeeStock);
console.log(isCoffeeMakerReady);
 
/* output
{ arabica: 100, robusta: 150, liberica: 200 }
true
*/


# state.js
const coffeeStock = {
arabica: 100,
robusta: 150,
liberica: 200
}
 
const isCoffeeMakerReady = true;
module.exports = {coffeeStock, isCoffeeMakerReady};

Namun ingat, ketika menggunakan destructuring object, pastikan penamaan lokal variabelnya sesuai dengan properti objeknya. Jika tidak, maka variabel tersebut akan menghasilkan undefined.

