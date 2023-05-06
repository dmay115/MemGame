const gameContainer = document.getElementById("game");
let c1 = null
let c2 = null
let matched = 0
let wait = false

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
  if (wait) return
  fc = event.target
  if (fc.classList.contains('flipped')) return;
  fc.classList.add('flipped')
  fc.style.backgroundColor=fc.classList[0]
  if (c1) c2 = fc.classList[0];
  if (!c1) c1 = fc.classList[0];
  console.log(wait)
  

  

  if (c1 === c2){
    console.log("match!")
    wait = true
    let match = document.querySelectorAll('.flipped');
    for (let cards of match){
      cards.classList.add('match');
      cards.classList.remove('flipped')
    }
    matched += 2
    c1 = null
    c2 = null
    wait = false
    console.log(matched)
  }

  if (c1 != c2){

    if (c1 && !c2)return
    else {
      wait = true
    setTimeout(function() {
        let noMatch = document.querySelectorAll('.flipped');
        for (let cards of noMatch)
          cards.style.backgroundColor = ''
          let unflip = document.querySelectorAll('.flipped')
      for (let cards of unflip)
        cards.classList.remove('flipped')
        let unflipAgain = document.querySelectorAll('.flipped')
      for (let cards of unflipAgain)
        cards.classList.remove('flipped')
        wait = false
      }, 1000);
      c1 = null
      c2 = null
    }
    console.log('no match')
    }  
    if (matched === 10){
      alert("you win!")
    }
    
}
 
createDivsForColors(shuffledColors);
