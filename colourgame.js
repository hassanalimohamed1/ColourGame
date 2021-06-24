/*eslint-env browser*/

var numSquares = 6;
var colours = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourdisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("resetButton");
var modeButtons = document.getElementsByClassName("mode");


init();


function init() {
  setUpModeButtons();
  setupSquareButtons();
  reset();
}


function setupSquareButtons() {
  for (var i = 0; i < squares.length; i++) {
    //add click listeners
    squares[i].addEventListener("click", function () {
      var clickedColour = this.style.backgroundColor;
      if (clickedColour === pickedColour) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        h1.style.backgroundColor = clickedColour;
        changeColours(clickedColour);
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
    reset();
  }
}

function setUpModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

function reset() {
  colours = generateRandomColours(numSquares);
  pickedColour = pickColour();
  colourDisplay.textContent = pickedColour;
  resetButton.textContent = "New Colours";
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    if (colours[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colours[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function () {
  reset();
  reset();
});

function changeColours(colour) {
  //loop thru all sqaures
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colour;
  }
}

function pickColour() {
  var random = Math.floor(Math.random() * colours.length);
  return colours[random];
}

function generateRandomColours(num) {
  //make array
  var arr = [];
  //add num rand colors to arry
  for (var i = 0; i < num; i++) {
    arr.push(randomColour());
  }
  //return array
  return arr;
}

function randomColour() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  //string
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

