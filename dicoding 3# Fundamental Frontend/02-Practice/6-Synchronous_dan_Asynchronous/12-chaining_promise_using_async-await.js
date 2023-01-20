/*
# Chaining Promise using async/await
Pertanyaan selanjutnya adalah bagaimana melakukan promise berantai bila menggunakan
async/await? Jawabannya adalah sama seperti ketika kita mendapatkan nilai dari function
yang berjalan secara synchronous.

Jika sebelumnya kita melakukan chaining promise dengan method .then() seperti ini:
*/

function reserveACoffee(type, miligrams) {
 getSeeds(type, miligrams)
 .then(makeCoffee)
 .then(servingToTable)
 .then(resolvedValue => {
   console.log(resolvedValue);
 })
 .catch(rejectedReason => {
   console.log(rejectedReason);
 })
}
 
reserveACoffee("liberica", 80);
 
/* output:
Pesanan kopi sudah selesai!
*/
// Dengan pendekatan async/await, kita dapat melakukannya dengan cara seperti ini:

async function reserveACoffee(type, miligrams) {
 try {
   const seeds = await getSeeds(type, miligrams);
   const coffee = await makeCoffee(seeds);
   const result = await servingToTable(coffee);
   console.log(result);
 } catch(rejectionReason) {
   console.log(rejectionReason);
 }
}
 
reserveACoffee("liberica", 80);
 
/* output:
Pesanan kopi sudah selesai!

Async/await ini menjadi fitur baru yang sangat berguna. Terlebih untuk kita yang lebih nyaman
menangani proses asynchronous dengan menggunakan gaya synchronous.
*/