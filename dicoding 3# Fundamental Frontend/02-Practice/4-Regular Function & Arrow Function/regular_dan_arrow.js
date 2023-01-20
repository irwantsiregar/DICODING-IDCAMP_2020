/*
Sekilas kita sudah tahu seperti apa arrow function, namun mungkin bila kita sama sekali
belum pernah mencobanya kita akan dibuat bingung. Pasalnya, penulisannya dibandingkan reguler
function jauh berbeda. 

Selain perbedaan dari segi sintaksis, terdapat juga perbedaan perilaku antara keduanya. Regular
function dapat berupa function declaration atau function expression, namun arrow function hanya
berupa function expression saja. Itu sebabnya arrow function memiliki nama lengkap 
“arrow function expressions”.
*/

// function declaration
function sayHello(greet) {
    console.log(`${greet}!`);
}
  
// function expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`)
}



// function expression
// const sayHello = greet => console.log(`${greet}!`);
// const sayName = name => console.log(`Nama saya ${name}`);