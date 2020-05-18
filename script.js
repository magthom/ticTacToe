const cells = document.querySelectorAll('div.row > div');
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

let play = "X";
let gameWon = false;
let numMoves = 0;

function cellClicked() {
  if (gameWon) {
    return
  }
  if (event.target.textContent > " ") {
    return
  }
  numMoves += 1;
  event.target.textContent = play;
  if (play === "X") {
    play = 'O';
  } else {
    play = 'X';
  }

  for (let i = 0; i < wins.length; i++) {
    if (cells[wins[i][0]].textContent === cells[wins[i][1]].textContent &&
      cells[wins[i][1]].textContent === cells[wins[i][2]].textContent &&
      (cells[wins[i][0]].textContent === "X" ||
        cells[wins[i][0]].textContent === "O")) {
      document.querySelector("h2").innerHTML = cells[wins[i][0]].textContent.toUpperCase() + " HAS WON THE GAME!";
      gameWon = true;
      document.querySelector("button").style.display = "block";
    }
  }
  if (gameWon === false && numMoves === 9) {
    document.querySelector("h2").innerHTML = "CAT! PLAY AGAIN!";
    document.querySelector("button").style.display = "block";
  }
}

function restartGame() {
  document.location.reload();
}