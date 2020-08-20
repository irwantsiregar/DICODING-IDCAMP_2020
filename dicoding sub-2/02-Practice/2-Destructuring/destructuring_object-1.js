// Object destructuring

const profile = {
	firstName : "John",
	lastName : "Doe",
	age : 18
}

const {firstName, lastName, isMale} = profile;

console.log(firstName);
console.log(lastName);
console.log(isMale);