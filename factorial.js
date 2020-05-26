// You define an integer number using parseInt(Casting)
let n = parseInt(prompt("Tell me a numbwer"));

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    //   recursive way to calculate
    return factorial(n - 1) * n;
  }
}

// BOM and DOM
// BOM:Browser Object Model-window, screen, navigator
// DOM:Document Object Model- hrml, body, document, h1
// . notation
document.getElementById("output").innerHTML =
  n + " factorial is " + factorial(n);
