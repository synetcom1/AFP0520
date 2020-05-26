var numbering = function () {
  var text = "";
  var i = 0;
  do {
    text += "<br> the number is " + i;
    i++;
  } while (i < 10);
  document.getElementById("output").innerHTML = text;
};

numbering();
