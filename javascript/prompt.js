let yourName = function () {
  let person = prompt("What is your name?", "John Mackenji");
  if (person != null) {
    document.getElementById(
      "insert",
    ).innerHTML = `Hello, ${person} How are you today?`;
  }
};

// call the function
yourName();
