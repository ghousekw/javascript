// function youSayGoodbye() {
//   console.log("Goodbye!");

//   function andISayHello() {
//     console.log("Hello!");
//   }
//   return andISayHello;
// }
// var something = youSayGoodbye();
// console.log(something());
function stopWatch() {
  var startTime = Date.now();
  function getDelay() {
    console.log(startTime);
    var elapsedTime = Date.now() - startTime;
    console.log(elapsedTime);
  }
  return getDelay;
}
// stopWatch();
var timer = stopWatch();

// do something that takes some time
// for (var i = 0; i < 1000000; i++) {
// var foo = Math.random() * 1000000;
// }
// call the returned function
// console.log(timer());
timer();
