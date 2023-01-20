/*Method
Untuk menambahkan method pada class, kita juga cukup menuliskannya pada body class,
tidak perlu melalui prototype seperti menggunakan constructor function.*/
class Car {
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }
    
    startEngines() {
        console.log("Mesin dinyalakan");
        this.enginesActive = true;
    }
    
    info() {
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Color: ${this.color}`);
        console.log(`Engines: ${this.manufacture ? "Active" : "Inactive"}`);
    }
}
 
const johnCar = new Car("Honda", "Red");
 
johnCar.startEngines();
johnCar.info();
 
 
/* output:
Mesin dinyalakan
Manufacture: Honda
Color: Red
Engines: Active
*/

/*
Dengan menggunakan class, walaupun kita menuliskan method pada body class,
namun method tersebut tetap berada pada prototype chain miliki instance yang terbuat.
Kita bisa melihat bagaimana objek yang dibuat menggunakan class pada console browser.
*/