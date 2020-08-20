/* # Promise All
Materi sebelumnya kita belajar bagaimana promise dapat menangani situasi di mana terdapat
asynchronous process yang saling membutuhkan untuk melaksanakan tugasnya. Namun bagaimana
jika kita ingin menjalankan banyak promise sekaligus namun tidak memperdulikan urutan?

Kita sering pergi ke cafe untuk menikmati secangkir kopi bersama teman kuliah ataupun rekan
kerja. Ketika memesan kopi, biasanya kita lakukan secara bersamaan. Meskipun kopi yang kita
pesan berbeda, tak jarang pelayan menghidangkannya berbarengan dengan kopi yang teman kita
pesan. Nah pada kasus inilah pelayan menggunakan teknik Promise.all().

Method Promise.all() dapat menerima banyak promise (dalam bentuk array) pada parameternya.
Kemudian method tersebut akan mengembalikan nilai seluruh hasil dari promise yang kita tetapkan
dalam bentuk array.
Contohnya seperti berikut ini:
*/


const arabicaOrder = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve("Kopi Arabica selesai!")
		}, 4000 )
	})
}


const robustaOrder = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve("Kopi Robusta selesai!")
		}, 2000)
	})
}

const libericaOrder = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve("Kopi Liberica selesai!")
		}, 3000)
	})
}


const promises = [arabicaOrder(), robustaOrder(), libericaOrder()];

Promise.all(promises)
	.then(resolvedValue => {
		console.log(resolvedValue);
	})




/*
Ketika kode di atas dieksekusi, kita perlu menunggu 4 detik sebelum akhirnya output
pada console ditampilkan. Ini menunjukan bahwa Promise.all() akan mengembalikan nilai
jika seluruh proses promise di dalamnya selesai dijalankan.

Urutan nilai yang dihasilkan oleh method ini sesuai dengan urutan promise yang kita 
tentukan pada parameternya

Nilai kopi arabika akan tetap berada di posisi pertama, meskipun proses pembuatannya 
memakan waktu paling lama. 


*/