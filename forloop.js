subjects = new Array(
  "Pre-WMAD",
  "Intro to Computing",
  "Algorithms and Flowchart",
);
// marks = new Array();
msg = "";
for (var i = 0; i < subjects.length; i++) {
  num = prompt("Enter your mark for " + subjects[i] + " subject");
  //   marks[i] = parseInt(num);
  msg += subjects[i] + " marks: " + num + "\n";
}

document.getElementById("output").innerText = msg;
// += augmented operator
console.log(typeof subjects);
