/*# onFulfilled and onRejected Functions
Untuk menangani nilai yang dikirimkan oleh resolve() ketika Promise onFulfilled,
kita gunakan method .then() pada objek promise yang kita buat. Lalu di dalam method
.then() kita berikan parameter berupa function yang berguna sebagai handle callback.
Contohnya seperti ini:*/

const executorFunction = (resolve, reject) => {
 const isCoffeeMakerReady = true;
  if(isCoffeeMakerReady) {
    resolve("Kopi berhasil dibuat");
  } else {
    reject("Mesin Kopi tidak bisa digunakan!")
  }
}
 
const handlerSuccess = resolvedValue => {
 console.log(resolvedValue);
}
 
const makeCoffee = new Promise(executorFunction);
makeCoffee.then(handlerSuccess)
 
/* output:
Kopi berhasil dibuat
*/
/*
Mari kita bedah kode yang ada di atas:

makeCoffee merupakan objek promise yang akan menghasilkan resolve() dengan membawa
nilai‘Kopi berhasil dibuat’. Lalu kita mendeklarasikan fungsi handlerSuccess() yang
mencetak nilai dari parameternya. Kemudian kita memanggil method .then() dari makeCoffee
dan memberikan handlerSuccess sebagai parameternya.
Ketika makeCoffee terpenuhi (fulfilled), maka handlerSuccess() akan terpanggil dengan
parameter nilai yang dibawa oleh resolve(). Sehingga output akan menghasilkan
“Kopi berhasil dibuat”.