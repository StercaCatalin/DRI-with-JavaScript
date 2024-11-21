let x = document.getElementById("numar").textContent;

document.getElementById("++").onclick = function () {
  document.getElementById("numar").textContent = ++x;
};
document.getElementById("reset").onclick = function () {
  document.getElementById("numar").textContent = 0;
  x = 0;
};
document.getElementById("--").onclick = function () {
  document.getElementById("numar").textContent = --x;
};
