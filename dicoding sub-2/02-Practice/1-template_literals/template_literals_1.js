/*
ES6 menawarkan kemudahan bagi developer dalam mengelola nilai string.
Bagaimana menggunakannya? Gunakanlah tanda backticks (`) untuk menggantikan tanda
single quotes (‘) atau double quotes (“) yang digunakan sebelumnya. Template literals
juga dapat mengandung sebuah expression dengan menuliskannya di dalam tanda ${expression}.
Hal ini sungguh membantu sekali dalam pembuatan nilai string yang kompleks menjadi
jauh lebih mudah.
Template literals juga dapat membaca line space secara langsung tanpa harus
menggunakan escape character. 
*/

const user = {
    firstName: "Dimas",
    lastName: "Saputra",
    age: 18
}
 
console.log(`Nama: ${user.firstName} ${user.lastName}, Umur: ${user.age}`);
 
/* output:
Nama: Dimas Saputra, Umur: 18
*/