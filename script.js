let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
const maxRounds = 5;

const buttons = document.querySelectorAll(".choices button");
const playerChoiceEl = document.getElementById("player-choice");
const computerChoiceEl = document.getElementById("computer-choice");
const winnerEl = document.getElementById("winner");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const roundEl = document.getElementById("round");
const finalMessageEl = document.getElementById("final-message");
const playAgainBtn = document.getElementById("play-again");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (roundCount < maxRounds) {
      playRound(button.dataset.choice);
    }
  });
});

function playRound(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  playerChoiceEl.textContent = "Your Choice: " + playerChoice;
  computerChoiceEl.textContent = "Computer's Choice: " + computerChoice;

  let result = "";
  if (playerChoice === computerChoice) {
    result = "It's a Draw!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You Win! 🎉";
    playerScore++;
  } else {
    result = "Computer Wins! 🤖";
    computerScore++;
  }

  winnerEl.textContent = "Result: " + result;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;

  roundCount++;
  roundEl.textContent = `Round: ${roundCount} / ${maxRounds}`;

  if (roundCount === maxRounds) {
    endGame();
  }
}

function endGame() {
  let message = "";
  if (playerScore > computerScore) {
    message = "🎉 Congratulations! You Won The Game!";
  } else if (computerScore > playerScore) {
    message = "💀 Game Over! Computer Wins The Game!";
  } else {
    message = "🤝 It's a Tie Game! Try Again!";
  }

  finalMessageEl.textContent = message;
  playAgainBtn.style.display = "inline-block";
}

playAgainBtn.addEventListener("click", resetGame);

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundCount = 0;
  playerScoreEl.textContent = "0";
  computerScoreEl.textContent = "0";
  roundEl.textContent = "Round: 0 / 5";
  playerChoiceEl.textContent = "Your Choice: -";
  computerChoiceEl.textContent = "Computer's Choice: -";
  winnerEl.textContent = "Result: -";
  finalMessageEl.textContent = "";
  playAgainBtn.style.display = "none";
}
