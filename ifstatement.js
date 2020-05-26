var age = parseInt(prompt(" How old ar you?"));

// isNaN a boolean to check the varialbe is not a number(if you use negate symbol(!))
if (!isNaN(age)) {
  if (age < 0) {
    document.write("You don't exist");
  } else if (age < 20) {
    document.write("Study hard");
  } else if (age < 40) {
    document.write("Make money a lot");
  } else if (age < 60) {
    document.write("Still you are supposed to work more");
  } else if (age < 100) {
    document.write("You need to take a rest");
  } else {
    document.write("How come you are in that age? ");
  }
} else {
  document.write("Please type your age, not weird string ");
}
// what if you string or others
