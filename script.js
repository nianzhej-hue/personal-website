const button = document.getElementById("changeColorBtn");
let changed = false;

button.addEventListener("click", function () {
  if (changed) {
    document.body.style.backgroundColor = "#f4f4f4";
    button.textContent = "點我換背景顏色";
  } else {
    document.body.style.backgroundColor = "#dff6ff";
    button.textContent = "點我換回原本顏色";
  }

  changed = !changed;
});
