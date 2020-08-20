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

const johnCar = new Car("H121S", "Honda", 4);
johnCar.info();


/* NB key: "value", 
 pada constructor class Car, kita melihat penggunaan super(), apa itu maksudnya? 
 Keyword super digunakan untuk mengakses properti dan method yang ada pada induk class
 ketika berada pada child class. Jadi super(lisencePlate, manufacture) di atas berarti
 kita mengakses constructor dari parent class dan mengirimkan lisencePlate, dan manufacture
 sebagai data yang dibutuhkan olehnya agar objek (instance) Car berhasil dibuat.

Penggunaan super sangat berguna ketika kita hendak menjalankan method overriding pada
method parent. Contohnya kita akan melakukan method overriding pada method info() dengan
menambahkan informasi jumlah roda pada mobil, maka kita dapat melakukannya dengan seperti ini:
*/