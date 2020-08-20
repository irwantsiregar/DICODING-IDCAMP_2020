/*
Pada penggunaan arrow function kita melihat bahwa variabel yang diletakan sebelum
tanda panah (=>) adalah merupakan parameter dari fungsi. 

// name merupakan parameter dari fungsi
	const sayName = name => console.log(`Nama saya ${name}`);

Namun penulisan tersebut hanya berlaku jika fungsi memiliki satu parameter saja. Lantas bagaimana
jika kita ingin membuat fungsi yang memiliki lebih dari satu parameter atau tanpa sebuah parameter?
Hal itu sangat biasa dilakukan bukan? 

Pada arrow function jika terdapat dua atau lebih parameter fungsi kita perlu membungkusnya dengan
tanda kurung seperti ini: 
*/

const sayHello1 = (name1, greet1) => console.log(`${greet1}, ${name1}!`);
 
sayHello1("Dimas", "Selamat Pagi");
 
/* output:
Selamat Pagi, Dimas!
*/

const sayHello = () => console.log("Selamat pagi semuanya!");
 
sayHello();
 
/* output:
Selamat pagi semuanya!
*/

/*Atau beberapa developer biasanya mengubah tanda kurung menjadi garis bawah (_)
agar penulisannya lebih simpel.*/