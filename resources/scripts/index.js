// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById('game-screen');
const startGameButton = document.getElementById('start-game-button');
const userName = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph.innerHTML = (game.username + ": " + game.score.username + " v "+ "CPU: " + game.score.cpu);
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph.innerHTML = '';
  gameHistoryParagraph.innerHTML= gameHistoryLog.ToString(); //TODO: get game history to show up.
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function (e) {
  e.preventDefault();
  const username = userName; //TODO: Get username to show up correctly.
  game = new RockPaperScissors(username);
  welcomeScreen.classList.add('d-none');
  gameScreen.classList.remove('d-none');
  // Complete
});

// go-button EventListener
goButton.addEventListener(`submit`, function (e) {
  e.preventDefault();
  const selection = userSelection.selectedIndex;
  game.play(selection);
  updateScoreTallyUI();
  updateGameHistoryUI();
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });