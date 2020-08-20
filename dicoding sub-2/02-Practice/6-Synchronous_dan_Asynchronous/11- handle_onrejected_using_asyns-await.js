 /* # Handle onRejected using async/await
Perlu jadi catatan bahwa await hanya akan mengembalikan nilai jika promise berhasil dilakukan
(onFulfilled). Lantas bagaimana jika promise gagal dilakukan (onRejected)? Kembali lagi
kepada prinsip synchronous code. Kita dapat menangani sebuah eror atau tolakan dengan
menggunakan try...catch.

Ketika menggunakan async/await, biasakan ketika mendapatkan resolved value dari sebuah
promise, untuk menempatkannya di dalam block try seperti ini:
*/

async function makeCoffee() {
 try {
   const coffee = await getCoffee();
   console.log(coffee);
 }
}

/*
Dengan begitu kita dapat menggunakan block catch untuk menangani jika promise gagal
dilakukan(onRejected).
*/

async function makeCoffee() {
 try {
   const coffee = await getCoffee();
 console.log(coffee);
 } catch(rejectedReason) {
   console.log(rejectedReason);
 }
}
 
makeCoffee();
 
/* output
Biji kopi habis!
*/