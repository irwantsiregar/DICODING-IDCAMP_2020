 /* # Static method
Seluruh kendaraan pasti butuh yang namanya perawatan bukan? Jika iya, tentu kita perlu 
membuat method repair untuk memperbaiki kendaraan tersebut. Dalam analogi dunia nyata, 
ketika kendaraan mengalami kerusakan maka kendaraan tersebut akan diperbaiki di bengkel
(factory), sehingga kita perlu membuat class baru yang berperan sebagai factory, sebutlah
class tersebut VehicleFactory. Di dalam kelas VehicleFactory terdapat satu method repair()
yang dapat menerima banyak kendaraan sebagai parameternya. 
*/

class Vechile {
	constructor (licensePlate, manufactur) {
		this.licensePlate = licensePlate;
		this.manufacture = manufacture;
		this.engineActive = false;
	}

	startEngines() {
		consoole.log(`Mensin kendaraan ${licensePlate} dinyalakan!`);
	}

	info() {
		console.log(`Nomor kendaraan : ${this.licensePlate}`);
		console.log(`Manufacture : ${this.manufacture}`);
		console.log(`Mesin: ${this.engineActive ? "Active" : "Inactive"}`);
	}

	parking() {
		console.log(`Kendaraan $this.licensePlate` Parkir!);
	}
}


class Car extends Vechile {
	constructor(licensePlate, manufacture, wheels) {
		super(licensePlate, manufacture);
		this.wheels = wheels;
	}

	driveOff() {
		console.log(`Kendaraan ${this.licensePlate} melaju!`);
	}

	openDoor(){
		console.log(`Membuka Pintu`);
	}

	/* overriding method info dari parent class */
	info(){
		super.info();
		console.log(`Jumlah Roda : ${this.wheels}`);
	}
}


class VechileFactory{
	static repair(Vechiles) {
		Vechiles.forEach( vechile => {
			console.log(`Kendaraan ${vechile.licensePlate} sedang melakukan perawatan`);
		})
	}
}


const johnCar = new Car("H121S", "Honda", 4);
const tomMotor = new Motorcycle("GF121J", "Yamaha", "2");
const dimasCar = new Car("TA1408K", "Tesla", 4);

// Pemanggilan method repair langsung dari class-nya
vechileFactory.repair([johnCar, tomMotor, dimasCar]);



/*
 Static method merupakan method yang tidak dapat dipanggil oleh instance dari class,
 namun dapat dipanggil melalui class-nya sendiri.

Pada ES6 class kita dapat membuat static method dengan menambahkan keyword static sebelum
deklarasi method-nya:

*