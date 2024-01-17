const gameContainer = document.getElementById("game");
let clickedCardCount = 0;
let clickedCardsArray=[];
const matched=false;
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
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
  // you can use event.target to see which element was clicked
  //console.log("you just clicked", event.target);
  
  const cardClicked = event.target;
  if (clickedCardCount <=2) {
    switch (event.target.classList[0]) {
      case 'red':
        clickedCardCount++;
        event.target.style.backgroundColor = "red";
        break;
      case 'blue':
        clickedCardCount++;
        event.target.style.backgroundColor = "blue";
        break;
      case 'green':
        clickedCardCount++;
        event.target.style.backgroundColor = "green";
        break;
      case 'orange':
        clickedCardCount++;
        event.target.style.backgroundColor = "orange";
        break;
      case 'purple':
        clickedCardCount++;
        event.target.style.backgroundColor = "purple";
        break;

      default:
        event.target.style.backgroundColor = "grey";
    }
    if(clickedCardsArray.length!=2 && clickedCardsArray[0]!=event.target){
      clickedCardsArray.push(event.target);
    }
    
    if(clickedCardCount===2 && clickedCardsArray[0]!=clickedCardsArray[1]){
      console.log("different divs");
      setTimeout(function(){
        console.log(clickedCardCount);
        if(clickedCardsArray[0].classList[0]!=clickedCardsArray[1].classList[0]){
          clickedCardsArray[0].style.backgroundColor="";
          clickedCardsArray[1].style.backgroundColor="";
          
        
        
        }
        clickedCardCount=0;
        clickedCardsArray=[];
      },1000);
      
    }
  }  
}





  // when the DOM loads
  createDivsForColors(shuffledColors);


