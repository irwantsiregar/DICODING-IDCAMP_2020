Node.js Export and Import Modules
Sebelumnya sudah dijelaskan bahwa module bekerja dengan cara exporting atau importing nilai baik itu variabel, fungsi, array, objek ataupun class agar dapat digunakan pada berkas JavaScript lain. Dalam satu berkas JavaScript terdiri dari satu module, dan di dalamnya kita dapat melakukan export lebih dari satu nilai.

Dalam environment Node.js, untuk melakukan import dan export module kita gunakan module.exports. Setiap berkas JavaScript yang berjalan pada Node, memiliki objek module lokal yang memiliki properti exports. Properti tersebut digunakan untuk mendefinisikan nilai apa yang akan diekspor dari berkas tersebut.

Kode di bawah ini merupakan contoh bagaimana cara melakukan export nilai dengan menggunakan module.exports.

const coffeeStock = {
 arabica: 100,
 robusta: 150,
 liberica: 200
}
 
module.exports = coffeeStock;
Berkas state.js



Kode module.exports = coffeeStock membuat object coffeeStock diterapkan sebagai nilai dari module.exports. Di mana nanti nilai properti exports ini akan digunakan (import) pada berkas JavaScript lain.

Jika mencoba melihat nilai module yang ada pada berkas state.js dengan menambahkan kode console.log(module) di akhir berkasnya. Maka kita akan melihat objek coffeeStock menjadi nilai dari properti exports.

Module {
  id: '.',
  exports: { arabica: 100, robusta: 150, liberica: 200 },
  parent: null,
  filename: '/home/runner/163-02-export-import/state.js',
  loaded: false,
  children: [],
  paths:
   [ '/home/runner/163-02-export-import/node_modules',
     '/home/runner/node_modules',
     '/home/node_modules',
     '/node_modules' ] }
Lalu bagaimana caranya untuk melakukan import atau menggunakan objek yang sudah di-export pada berkas lain? Caranya adalah dengan menggunakan method require().

#index.js
const coffeeStock = require('./state.js');
 
console.log(coffeeStock);
 
/* output
{ arabica: 100, robusta: 150, liberica: 200 }
*/

#state.js
const coffeeStock = {
 arabica: 100,
 robusta: 150,
 liberica: 200
}
 
module.exports = coffeeStock;


Dalam inisialisasi variabel coffeeStock (nama variabel bebas kita tentu), kita gunakan method require() dengan memberikan parameter lokasi dari berkas state.js. Dengan begitu variabel coffeeStock akan memiliki nilai module.exports yang sama pada berkas state.js. Setelah mendapatkan nilainya, kita bebas menggunakannya layaknya variabel lokal pada biasanya.

index.js
const coffeeStock = require('./state.js');
 
 
const makeCoffee = (type, miligrams) => {
 if(coffeeStock[type] >= miligrams) {
   console.log("Kopi berhasil dibuat!")
 } else {
   console.log("Biji kopi habis!")
 }
}
makeCoffee("robusta", 80);
 
 
/* output:
Kopi berhasil dibuat!
*/

#state.js
const coffeeStock = {
 arabica: 100,
 robusta: 150,
 liberica: 200
}
 
module.exports = coffeeStock;


“Tips dalam memberikan lokasi pada method require(): Jika kita gunakan lokasi yang relatif (dapat berubah/dipindahkan), pastikan awali dengan menuliskan ./. Contohnya, berkas index.js dan state.js berada pada folder yang sama, maka kita cukup menuliskannya dengan ./state.js.”

