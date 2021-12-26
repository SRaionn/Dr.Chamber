function next0() {
  document.getElementById("next").addEventListener("click", function () {
    document.getElementById("p1").style.display = "none";
    document.getElementById("p2").style.display = "block";
  });
}

window.addEventListener("load", function () {
  next0();
});
