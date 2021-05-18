class Car {
	// ini constructor
	 constructor (manufacture, color){
	 	this.manufacture = manufacture;
	 	this.color = color;
	 	this.angineActive = false;
	 }
}

// ini instance/instansiasi objek
const jhonCar = new Car("Honda", "Red");
const adamCar = new Car("Tesla", "Black");

console.log(jhonCar.manufacture);
console.log(adamCar.manufacture);


/* # Constructor
Deklarasi class menggunakan ES6 memiliki sifat yang sama seperti pembuatan class menggunakan
function constructor (seperti contoh sebelumnya). Namun alih-alih menggunakan function
constructor dalam menginisialisasi propertinya, class ini memisahkan constructornya dan
ditempatkan pada body class menggunakan method spesial yang dinamakan constructor. 
--This--
Kita juga melihat penggunaan this pada constructor. Konteks dalam class,
keyword this merujuk pada  instance dari class tersebut. Sehingga this dapat digunakan
untuk mengelola properti yang terdapat pada instance.
*/

/* # Instance
Setelah kita membuat class pada JavaScript, lantas bagaimana cara membuat instance dari
class tersebut? Tapi sebelumnya, apa itu instance? Instance merupakan objek yang memiliki
properti dan method yang telah ditentukan oleh blueprint-nya (class), atau singkatnya adalah
objek yang merupakan hasil realisasi dari sebuah blueprint.
*/