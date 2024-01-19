const gameContainer = document.getElementById("game");
const startBtn = document.querySelector("#start");
const buttonsDiv = document.querySelector("#buttonsDiv");
const lowestScoreSpan = document.querySelector("#lowest-score");
const restartBtn = document.querySelector("#restart");
const scoreSpan = document.querySelector("#score");
let clickedCardCount = 0;
let clickedCardsArray = [];
let score = 0;
let match = 0;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "pink",
  "yellow",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "pink",
  "yellow"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

function doublicateArray(value, len) {
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr.push(value);
  }
  return arr;
}


// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);


    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  if (clickedCardCount < 2) {
    console.log(event.target);
    switch (event.target.classList[0]) {
      
      case 'red':
        event.target.style.backgroundImage="none";
        event.target.style.backgroundColor = "red";
        break;
      case 'blue':
        event.target.style.backgroundImage="none";
        event.target.style.backgroundColor = "blue";
        break;
      case 'green':
        event.target.style.backgroundImage="none";
        event.target.style.backgroundColor = "green";
        break;
      case 'orange':
        event.target.style.backgroundImage="none";
        event.target.style.backgroundColor = "orange";
        break;
      case 'purple':
        event.target.style.backgroundImage="none";
        event.target.style.backgroundColor = "purple";
        break;
      case 'pink':
        event.target.style.backgroundImage="none";
        event.target.style.backgroundColor = "pink";
        break;
      case 'yellow':
        event.target.style.backgroundImage="none";
        event.target.style.backgroundColor = "yellow";
        break;
    }
    cardClicked(event.target);
  }
}

function cardClicked(element) {
  score++;
  scoreSpan.innerText = "Your Score is " + score;
  // if (!element.classList.contains('clicked')) {
  //   element.classList.add('     ');
  //   clickedCardsArray.push(element);
  //   clickedCardCount++;
  // }
  clickedCardsArray.push(element);
  clickedCardCount++;
  if (clickedCardsArray.length === 2) {
    setTimeout(function () {
      if (clickedCardsArray[0].classList[0] != clickedCardsArray[1].classList[0]) {
        // console.log(clickedCardCount);
        // console.log("length is two and different colors");
        for (let diff of clickedCardsArray) {
          diff.style.backgroundColor = "";
          diff.style.backgroundImage="url(images/stars.jfif)";
          // diff.classList.remove('clicked');
        }
      }
      else {
        match++;
        if (match === 7) {
          if (localStorage.getItem("lowestScore") === null) {
            localStorage.setItem("lowestScore", score);
          } else if (score < parseInt(localStorage.getItem("lowestScore"))) {
            localStorage.setItem("lowestScore", score);
          }
          restartBtn.style.visibility = 'visible';
        }
      }
      clickedCardCount = 0;
      clickedCardsArray = [];
    }, 1000);
  }
}



buttonsDiv.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target === startBtn) {
    startBtn.style.visibility = 'hidden';
    createDivsForColors(shuffledColors);

    if (localStorage.getItem("lowestScore") != null) {
      const lowestScoreSaved = parseInt(localStorage.getItem("lowestScore"));
      lowestScoreSpan.innerText = "Best Score:" + lowestScoreSaved;
    }
  } else if (e.target === restartBtn) {
    console.log("clicked restart");
    location.reload();
    restartBtn.style.visibility = 'hidden';
  }
})

