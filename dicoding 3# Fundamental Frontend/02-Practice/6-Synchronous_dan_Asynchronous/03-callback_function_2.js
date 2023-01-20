
/*
Apa itu callback function? Mari kita bayangkan kembali melalui pandangan dunia nyata.
Kita menunggu pesanan kopi datang di meja kita tapi , pada saat itu juga kita tidak bisa
berada terus di tempat itu karena ada urusan mendadak. Pada kasus ini mungkin terdapat
dua aksi yang bisa kita lakukan:

(Synchronous) Kita tetap menunggu di meja hingga kopi itu datang dan kemudian meninggalkan
kedai kopi.
(Asynchronous) Kita meminta tolong kepada teman kita untuk menerima kopi itu, dan bertemu
nanti untuk memberikan kopinya. Sehingga kita tidak perlu menunggu untuk meninggalkan kedai
kopi.

Nah pada JavaScript, teman kita berperan layaknya callback function. Ia diperintahkan pada
sebuah fungsi asynchronous kemudian akan dipanggil/digunakan ketika tugas itu selesai.
Bagaimana cara melakukannya? Yang pertama kita tambahkan parameter dengan nama callback
pada fungsi asynchronous.
*/

const getCake = callback => {
	let cake = null;
	console.log(`Sedang membuat kue silahkan tunggu`);

	setTimeout( () => {
		cake = `Kue Selesai !`;
		callback(cake);
	}, 3000);
}

getCake(cake => {
	console.log(cake);
});