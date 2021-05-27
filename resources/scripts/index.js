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
  scoreParagraph.innerHTML(game.username.user + ": " + game.score.user + " v "+game.username.cpu + ": " + game.score.cpu)
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph.innerHTML('');
  gameHistoryParagraph.innerHTML(gameHistoryLog.ToString());
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  const username = userName;
  game = new RockPaperScissors(username);
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  const select = userSelection;
  game.play(select);
  updateScoreTallyUI();
  updateGameHistoryUI();
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });