function addBox(container) {
  for (let i = 0; i < 10; i++) {
    const newBox = document.createElement("div");
    const container = document.getElementById("container");
    container.appendChild(newBox);
    newBox.setAttribute("class", "box");
    newBox.setAttribute("onmouseenter", "colorBox(this)");
  }
}

function colorBox(box) {
  box.style.backgroundColor = getRandomColor();
}
const getRandomColor = function () {
  const niceColors = [
    "#8e44ad",
    "#3498db",
    "#c0392b",
    "#f1c40f",
    "#d35400",
    "#2ecc71",
    "#1abc9c",
    "#2c3e50",
    "#7f8c8d",
  ];

  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
};

addBox();
