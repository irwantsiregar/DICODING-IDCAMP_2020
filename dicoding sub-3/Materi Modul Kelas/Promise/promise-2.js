helloWorld("Kresna Galuh")
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.log(error);
  });
// output: Hello world, Kresna Galuh


// helloWorld("")
//   .then(function(result) {
//     console.log(result);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
 
// output: You have to provide the name!