// Object destructuring.
// dengan memberi nilai default pada properti yg tidak dikenali oleh objek

const profile = {
	firstName : "John",
	lastName : "Doe",
	age : 18
}

const {firstName, lastName, isMale= false} = profile;

console.log(firstName);
console.log(lastName);
console.log(isMale);