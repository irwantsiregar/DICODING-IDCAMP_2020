var promises = Promise.all([
  helloWorld("Kresna Galuh"),
  helloWorld(""),
  helloWorld("Ahmad Oriza")
    .then(function(result) {
      return result;
    })
    .then(function(result2) {
      var message = addCodepolitan(result2);
      return message;
    })
]);
promises.then(function(results) {
  console.log(results);
});