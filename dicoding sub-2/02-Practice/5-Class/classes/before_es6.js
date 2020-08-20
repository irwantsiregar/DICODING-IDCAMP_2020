/*
Sebelum ES6, Hal yang paling mendekati dengan class yaitu membuat sebuah objek menggunakan
constructor function dan keyword new, lalu untuk menambahkan method kita gunakan konsep prototype.
*/

function Car (manufacture, color) {
	this.manufacture = manufacture;
	this.color = color;
	this.engineActive = false ;
}

Car.prototype.startEngines = function () {
	console.log("Mobil dinyalakan...");
	this.engineActive = true;
}

Car.prototype.info = function () {
	console.log("Manufacture : " + this.manufacture);
	console.log("Color : " + this.color);
	console.log("Engines : " + (this.engineActive ? "Active" : "Inactive"));
}

var jhonCar = new Car("Honda", "Red");
jhonCar.startEngines();
jhonCar.info();


/*
Pada kode di atas Car merupakan constructor function yang akan membuat instance Car baru
setiapkan kode new Car() dieksekusi. Melalui Car.prototype, method startEngines() dan
carInfo()  diwarisi pada setiap instance Car yang dibuat, sehingga johnCar (sebagai
instance Car) dapat mengakses kedua method tersebut.

*Teknik dasar ini yang digunakan dalam membuat class di JavaScript sebelum ES6.

“ Mengapa method pada instance harus disimpan pada prototype atau __proto__ ? Mengapa tidak
disimpan pada constructor sama seperti properti? 

Alasannya adalah jika kita menyimpan method pada constructor maka method tersebut akan
selalu dibuat ketika instance dibuat. Ini bukan pendekatan yang baik karena jika method
memiliki kode yang banyak, maka akan memakan memori yang banyak.

Sedangkan jika menggunakan prototype, method hanya dibuat satu kali. Dan method tersebut
diwarisi kepada setiap instance yang dibuat.”
*/