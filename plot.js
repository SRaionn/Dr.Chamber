function next0() {
  document.getElementById("next").addEventListener("click", function () {
    document.getElementById("p1").style.display = "none";
    document.getElementById("p2").style.display = "block";
  });
}

window.addEventListener("load", function () {
  next0();
});

function password(pwd) {
  if (pwd == "玉山") {
    alert("真不愧是你呢");
    location.href = ".";
  } else {
    alert("Denied !");
  }
}
