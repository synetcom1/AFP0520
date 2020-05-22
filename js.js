// From ES6, we use only let and const
var maximum;
// var firstNmuber; //using camelcase
// var secondNumber;
// var thirdNumber;
//  var maximum, firstNumber, secondNumber, thirdNumber;
var number1, number2, number3;
number1 = parseInt(prompt("Type the first number"));
number2 = parseInt(prompt("Type the second number"));
number3 = parseInt(prompt("Type the third number"));

// number1 = parseInt(firstNumber); //forcing the number as integer
// number2 = parseInt(secondNumber);
// number3 = parseInt(thirdNumber);

maximum = Math.max(number1, number2, number3); //Math.max() will get the maximum value
document.write("<h1> The biggest number is " + maximum + " </h1>");
