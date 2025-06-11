function play(userChoice) {
  const playerChoice = ["Rock", "Paper", "Scissors"];
  const computerChoice = playerChoice[Math.floor(Math.random() * 3)];
  const resultElement = document.getElementById("result");
  let result = " ";
  if (userChoice === computerChoice) {
    result = "it's draw";
    resultElement.style.color = "black";
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result = `You win! ${userChoice} beats ${computerChoice}`;
    resultElement.style.color = "green";
  } else {
    result = `Computer wins! ${computerChoice} beat ${userChoice}`;
    resultElement.style.color = "red";
  }
  resultElement.textContent = result;
}
