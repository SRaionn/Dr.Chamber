async function password(pwd) {
  if (pwd == "玉山") {
    await setTimeout(function () {
      alert("真不愧是你呢");
    }, 1);
    page();
  } else {
    alert("Denied !");
  }
}

function page() {
  window.location.replace = "https://cyouo.github.io/Dr.Chamber/RingBell.html";
}
