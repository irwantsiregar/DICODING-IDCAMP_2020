// // Destructuring Array & Object

const foods = ['Pie', 'Cake', 'Honey'];

const myFood = foods[0];
const yourFood = foods[1];
const ourFood = foods[2];

console.log(myFood, yourFood, ourFood);



/*
Perhatikan kode pada destructuring object di atas, Kode tersebut akan mengekstraksi nilai yang berada di dalam objek profile dan menyimpannya pada variabel lokal yang memiliki nama sama dengan properti di dalam objek profile. Mungkin mengekstraksi nilai dari objek dengan langkah ini terlihat mudah, namun bayangkan jika objek memiliki banyak properti dan harus melakukan hal tersebut secara manual satu persatu. Terlalu banyak kode yang dituliskan berulang kan?

Itulah alasan ES6 menambahkan fitur yang memudahkan kita untuk destructuring objek maupun array. Ketika kita ingin memecah struktur data menjadi bagian-bagian yang lebih kecil, kita akan dipermudah untuk mendapatkan data yang diinginkan.

Lantas bagaimana cara melakukan destructuring objek dan array pada ES6?
*/