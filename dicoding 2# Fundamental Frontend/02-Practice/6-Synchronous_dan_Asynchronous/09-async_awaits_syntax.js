 /*# Async-Await Syntax
Pembahasan terakhir mengenai asynchronous operator kali ini adalah penggunaan sintak 
async/await. Apa itu? 

Seperti yang sudah kita ketahui, pada JavaScript callback dan Promise merupakan teknik 
ng digunakan selama kita berurusan dengan proses asynchronous. Namun penulisan kode akan
sedikit berbeda dari proses synchronous. Contohnya, untuk mendapatkan nilai coffee dari
sebuah proses asynchronous, kita tidak dapat melakukannya dengan teknik seperti ini:  
*/

// * Promise Approach
function makeCoffee() {
 getCoffee()
 .then(coffee => {
   console.log(coffee)
 })
} 
makeCoffee();

// * Callback Approach
function makeCoffee() {
 getCoffee(function(coffee) {
   console.log(coffee)
 })
}
 
makeCoffee();


/*Namun semenjak ES8 (ECMAScript 2017) kita dapat menuliskan asynchronous process layaknya
synchronous process dengan bantuan keyword async dan await. 

Fitur async/await sebenarnya hanya syntactic sugar. Itu berarti secara fungsionalitas bukan
merupakan sebuah fitur baru dalam JavaScript. Namun hanya gaya penulisan baru yang dikembangkan
dari kombinasi penggunaan Promise dan generator (pembahasan mengenai generator bisa Anda
	pelajari di sini). Sehingga async/await ini tidak dapat digunakan jika tidak ada Promise.
	*/