/* Callback Function
Hal yang membuat bingung ketika kita bekerja dengan synchronous dan asynchronous program adalah
bagaimana menangani suatu nilai yang didapatkan secara asynchronous pada program yang berjalan
secara synchronous. Contohnya seperti kode berikut:
*/
const getCake = () => {
 let cake = null;
 console.log("Sedang membuat kue, silakan tunggu ....")
 setTimeout(() => {
   cake = "Kue Selesai!"
 }, 3000)
 return cake;
}
 
const cake = getCake();
console.log(cake);
 
/*output:
Sedang membuat kue, silakan tunggu ....
null
*/

/*
Jika kita melakukan hal seperti ini untuk mencetak nilai cake yang sesungguhnya,
maka hal tersebut tidak akan pernah terjadi. Karena seperti yang sudah kita ketahui 
fungsi setTimeout() tidak akan menghentikan JavaScript untuk mengeksekusi kode yang ada
selanjutnya. Jadi fungsi getCake() akan selalu mengembalikan nilai null, karena kode 
return cake akan dieksekusi terlebih dahulu dibandingkan dengan cake = “Kue Selesai!”. 
Kode asynchronous perlu disusun dengan cara yang berbeda dari synchronous code. Cara
paling dasar adalah dengan menggunakan callback function.
*/