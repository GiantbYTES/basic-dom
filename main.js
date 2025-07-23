// console.log(document)
const playingField = document.getElementById("playing-field");
const down = document.getElementById("down");
down.innerHTML = "Down";
const ball = document.getElementById("ball");
ball.style.backgroundColor = "yellow";

const moveRight = function () {
  let curPos = parseInt(document.getElementById("ball").style.left) || 0;
  console.log(curPos);
  let newPos = curPos + 15;
  console.log(newPos);
  document.getElementById("ball").style.left = `${newPos}px`;
};

const moveLeft = function () {
  let curPos = parseInt(document.getElementById("ball").style.left) || 0;
  console.log(curPos);
  let newPos = curPos - 15;
  console.log(newPos);
  document.getElementById("ball").style.left = `${newPos}px`;
};

const moveUp = function () {
  let curPos = parseInt(document.getElementById("ball").style.top) || 0;
  console.log(curPos);
  let newPos = curPos - 15;
  console.log(newPos);
  document.getElementById("ball").style.top = `${newPos}px`;
};

const moveDown = function () {
  let curPos = parseInt(document.getElementById("ball").style.top) || 0;
  console.log(curPos);
  let newPos = curPos + 15;
  console.log(newPos);
  document.getElementById("ball").style.top = `${newPos}px`;
};

const header = document.createElement("h1");
header.innerHTML = "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
document.body.appendChild(header);

const subHeader = document.createElement("h2");
subHeader.innerHTML = "Game by: ~The Creator~";
subHeader.setAttribute("class", "centered");
document.body.appendChild(subHeader);

const box = document.getElementById("box");

const enterColor = function () {
  box.style.backgroundColor = "#c0392b";
  box.innerHTML = "AHH GO AWAY";
};

const leaveColor = function () {
  box.style.backgroundColor = "#1abc9c";
  box.innerHTML = "Hover over me!";
};

const changeColor = function () {
  playingField.style.backgroundColor = "#8e44ad";
};
