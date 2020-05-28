let changeColor = function () {
  let x = document.getElementById("change");
  let y = x.getElementsByClassName("child");
  let i;
  for (i = 0; i < y.length; i++) {
    y[i].style.backgroundColor = "skyblue";
  }
};
