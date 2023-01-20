/* # Callback Hell
Kita sudah mengetahui bahwa callback dibutuhkan untuk mendapatkan nilai yang berasal dari
asynchronous function. Lantas bagaimana jika terdapat proses satu sama lain yang saling
bergantungan? Contohnya, untuk membuat kue tahapan yang perlu kita lakukan adalah:
- Mempersiapkan bahan
- Membuat adonan
- Menyiapkan adonan ke cetakan
- Memanggang adonan

Tahapan tersebut sangat tergantung satu sama lain. Kita tidak bisa memanggang adonan sebelum
membuat adonannya, dan kita tidak bisa membuat adonan tanpa mempersiapkan bahannya terlebih
dahulu. Jika seluruh tahapan tersebut berjalan secara synchronous, mungkin kita bisa
melakukanya seperti ini:
*/

function makeACake(...rawIngredients) {
 const ingredients = gatheringIngredients(rawIngredients),
 dough = makeTheDough(ingredients),
 pouredDough = pourDough(dough),
 cake = bakeACake(pourDough),
 console.log(cake);
}

/*Namun jika fungsi-fungsi tersebut berjalan secara asynchronous, maka kita akan membuat
yang namanya callback hell. Callback hell terjadi karena banyak sekali callback function
yang bersarang karena saling membutuhkan satu sama lain, sehingga kode akan tampak
seperti ini:*/

function makeACake(...rawIngredients) {
 gatheringIngredients(rawIngredients, function(ingridients) {
   makeTheDough(ingridients, function(dough) {
     pourDough(dough, function(pouredDough) {
       bakeACake(pouredDough, function(cake) {
         console.log(cake);
       });
     });
   });
 });
}

/*
Melihat kode seperti ini saja, kepala jadi pusing. Terbayang sulitnya memelihara kode ini
di masa yang akan datang.

Lantas apa solusi agar kita dapat menghindari callback hell? Salah satunya adalah dengan
menggunakan Promise. */

function makeACake(...rawIngredients) {
 gatheringIngredients(rawIngredients)
 .then(makeTheDough)
 .then(pourDough)
 .then(bakeACake)
 .then(console.log);
}

/*
Dengan Promise, kita dapat meminimalisir callback hell dan mengubahnya menjadi kode yang
sangat mudah dibaca. Bahkan dengan kode seperti itu, non-developer pun dapat mengerti apa
maksud dari kode tersebut. 
*/