/*
Karena arrow function merupakan sebuah expression, maka ia hanya dapat digunakan untuk
disimpan pada variabel (seperti contoh kode di atas), sebagai argumen pada sebuah fungsi,
dan sebagai nilai dari properti objek.
*/

// Stored in Variable
const sayName = name1 => console.log(`Nama saya ${name1}`);


// Passed as An Argument
["Dimas", "Widdy", "Buchori"].forEach(name2 => console.log(`Nama saya ${name2}`));


// Stored in Object Property
const user = {
    introduce: name3 => console.log(`Nama saya ${name3}`)
}