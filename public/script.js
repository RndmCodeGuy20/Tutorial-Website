const targetDiv = document.getElementById("out");
const btn = document.getElementById("runBtn");
btn.onclick = function () {
  if (targetDiv.style.display === "none") {
    targetDiv.style.display = "inline";
  }
};

const resbtn = document.getElementById("resBtn");

resbtn.onclick = function () {
  if (targetDiv.style.display === "inline") {
    targetDiv.style.display = "none";
  }
};
