/*
ES6 Classes
Dengan hadirnya class pada ES6, pembuatan class di JavaScript menjadi lebih mudah dan
juga penulisannya mirip seperti bahasa pemrograman lain berbasis class. Pembuatan class
pada ES6 menggunakan keyword class itu sendiri kemudian diikuti dengan nama class-nya. 
*/
class Car {
	// sama seperti function Constructor
	constructor (manufacture, color) {
		this.manufacture = manufacture;
		this.color = color;
		this.enginesActive = false;
	}

	// sama seperti Car.prototype.startEngines
	startEngines(){
		console.log('Mobile dinyalakan...');
		this.enginesActive = true;
	}

	// sama seperti Car.prototype.info
	info(){
		console.log(`Manufacture : ${this.manufacture}`);
		console.log(`Color : ${this.color}`);
		console.log(`Engines : ${this.enginesActive ? "Active" : "Inactive"}`);
	}
}

const jhonCar = new Car("Honda", "Red");
jhonCar.startEngines();
jhonCar.info();

/*
Jika Anda terbiasa dengan bahasa pemrograman berbasis class, pasti penulisannya sangat
serupa bukan? Walaupun dari segi sintaksis pembuatan class antara keduanya cukup berbeda,
namun perilaku dari objek yang dibuat dengan keduanya sama. Inilah mengapa class pada ES6
hanya sebuah syntactic sugar dari konsep prototype yang sudah ada.

Mari kita bahas class pada ES6 lebih lanjut.

“Ketika kita hendak membuat sebuah constructor function ataupun class. Secara code
convention (aturan penulisan), gunakan CamelCase dalam penamaannya. Contohnya Car daripada car,
SportCar daripada sportCar atau Sportcar”
*/