/* # Using async/await
Lantas bagaimana cara menggunakan async/await ini? Oke kembali lagi pada contoh kode 
sebelumnya. Namun kita perlihatkan juga fungsi getCoffee() bagaimana ia dibuat menggunakan promise.
*/

const getCoffee = () => {
 return new Promise((resolve, reject) => {
   const seeds = 100;
   setTimeout(() => {
     if(seeds >= 10) {
       resolve("Coffee didapatkan!");
     } else {
       reject("Biji kopi habis!")
     }
   }, 1000)
 })
}

// Fungsi getCoffee() yang dibangun menggunakan promise.

function makeCoffee() {
 getCoffee()
 .then(coffee => {
   console.log(coffee)
 })
}
 
makeCoffee();
 
/* output
Coffee didapatkan!

Kode di atas merupakan cara biasa kita menggunakan sebuah promise. Untuk mendapatkan nilai
coffee, kita dapat memperolehnya di dalam method .then() dari hasil yang dikirimkan oleh
resolve.
*/

// Dengan async/await, kita dapat menggunakan promise dengan cara seperti ini:

function makeCoffee() {
 const coffee = getCoffee();
 console.log(coffee);
}
 
makeCoffee();
Namun, tentu dengan menambahkan keyword async dan await seperti ini:

async function makeCoffee() {
 const coffee = await getCoffee();
 console.log(coffee);
}
 
makeCoffee();
 
/* output
Coffee didapatkan!

Keyword async digunakan untuk memberitahu JavaScript untuk menjalankan fungsi makeCoffee()
secara asynchronous. Lalu keyword await digunakan untuk menghentikan proses pembacaan kode
selanjutnya sampai fungsi getCoffee() mengembalikan nilai promise resolve.


“Walaupun await menghentikan proses pembacaan kode selanjutnya pada fungsi makeCoffee. 
Tapi ini tidak akan mengganggu proses runtime sesungguhnya pada JavaScript (global). 
Karena fungsi makeCoffee berjalan secara asynchronous. Kita tidak dapat menggunakan await
tanpa membuat function dalam scope-nya berjalan secara asynchronous.”
*/