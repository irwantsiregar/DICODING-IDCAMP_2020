/*
Fitur lainnya pada ES6 yang sangat bermanfaat adalah kita dapat menetapkan nilai default
pada parameter fungsi. Dengan menggunakan default parameters, nilai pada parameter tidak
akan menghasilkan undefined walaupun kita tidak memberikan nilai ketika fungsi tersebut
dipanggil. Default parameter dapat digunakan pada regular function ataupun arrow function.
*/

// # Regular Function
function sayHello(name = "Stranger", greet = "Hello") {
    console.log(`${greet} ${name}!`);
}
 
sayHello("Dimas", "Hai");
sayHello();
 

// # Arrow Function
const sayHello = (name = "Stranger", greet = "Hello") => console.log(`${greet} ${name}!`);
 
sayHello("Dimas", "Hai");
sayHello();
 
/* output:
Hai Dimas!
Hello Stranger!
*/