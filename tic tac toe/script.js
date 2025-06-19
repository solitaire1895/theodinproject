const Player = (name, marker) => {
  return { name, marker };
};

const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const render = () => {
    const boardContainer = document.querySelector("#board");
    boardContainer.innerHTML = "";
    board.forEach((cell, index) => {
      const cellDiv = document.createElement("div");
      cellDiv.classList.add("cell");
      cellDiv.dataset.index = index;
      cellDiv.textContent = cell;
      boardContainer.appendChild(cellDiv);
    });
  };

  const updateCell = (index, marker) => {
    if (board[index] === "") {
      board[index] = marker;
      return true;
    }
    return false;
  };

  const getBoard = () => board;

  const reset = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    render();
  };

  return { render, updateCell, getBoard, reset };
})();

const gameController = (() => {
  const player1 = Player("Player 1", "X");
  const player2 = Player("Player 2", "O");
  let currentPlayer = player1;
  let gameOver = false;

  const startGame = () => {
    gameBoard.render();
    gameOver = false;
    currentPlayer = player1;
    const boardContainer = document.querySelector("#board");

    boardContainer.addEventListener("click", handleClick);
    document.querySelector("#reset").addEventListener("click", resetGame);
  };

  const handleClick = (e) => {
    if (gameOver || !e.target.classList.contains("cell")) return;

    const index = e.target.dataset.index;
    if (gameBoard.updateCell(index, currentPlayer.marker)) {
      gameBoard.render();
      if (checkWin(currentPlayer.marker)) {
        alert(`${currentPlayer.name} wins!`);
        gameOver = true;
      } else if (checkDraw()) {
        alert("It's a draw!");
        gameOver = true;
      } else {
        switchPlayer();
      }
    }
  };

  const switchPlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  const checkWin = (marker) => {
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winCombos.some((combo) =>
      combo.every((i) => gameBoard.getBoard()[i] === marker)
    );
  };

  const checkDraw = () => {
    return gameBoard.getBoard().every((cell) => cell !== "");
  };

  const resetGame = () => {
    gameBoard.reset();
    currentPlayer = player1;
    gameOver = false;
  };

  return { startGame };
})();

document.addEventListener("DOMContentLoaded", () => {
  gameController.startGame();
});
