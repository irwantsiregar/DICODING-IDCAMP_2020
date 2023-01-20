// # Destructuring Assignment
 // var a = 1;
 // var b = 2;
 // var temp;

 // console.log("Sebelum swap");
 // console.log("nilai a :" + a);
 // console.log("nilai b :" + b);

 // temp = a;
 // a = b;
 // b = temp;

 // console.log("Setelah swap");
 // console.log("Nilai a :" + a);
 // console.log("Nilai b :" + b);

// # Destructuring Assignment
 var a = 1;
 var b = 2;
 var temp;

 console.log("Sebelum swap");
 console.log("nilai a :" + a);
 console.log("nilai b :" + b);

 [a, b] = [b, a];
 console.log("Setelah swap");
 console.log("Nilai a :" + a);
 console.log("Nilai b :" + b);
