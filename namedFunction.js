// console.log(test());

// // 1. named funtion also does hoisting
// function test() {
//   let a = 10;
//   return a;
// }

// 2. anonymous function
// let consoleShow = function () {
//   console.log("checking anonymous function");
// };
// console.log(consoleShow());

// 3. Constructor way Function
// use new Function
// let addFunction = new Function("a", "b", "console.log(a+b); return a+b");

// addFunction(5, 4);

// self-invoking function
(function () {
  console.log("It works");
})();
