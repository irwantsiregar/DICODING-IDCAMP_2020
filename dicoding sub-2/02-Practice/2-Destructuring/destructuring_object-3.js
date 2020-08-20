// Object destructuring
// Assigning to Different Local Variable Names
/*
Sampai saat ini kita tahu bahwa untuk mendekstruksikan objek pada variabel lokal kita
perlu menyeragamkan penamaan lokal variabel dengan properti objeknya. Namun sebenarnya
dalam mendestruksikan objek kita bisa menggunakan penamaan variabel lokal yang berbeda.
ES6 menyediakan sintaks tambahan yang membuat kita dapat melakukan hal tersebut.
Penulisannya mirip seperti ketika kita membuat properti beserta nilainya pada objek.
*/

const profile = {
	firstName : "John",
	lastName : "Doe",
	age : 18
}

const {firstName: localFirstName, lastName: localLastName, age : localAge} = profile;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);