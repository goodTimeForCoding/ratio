import { equalArrays, showAlert, generateNum } from './util.js';
import { StartStop, Start } from './timer.js';
import { MoveType } from './const.js';

const startGameBtn = document.querySelector('#start-game');
const playerName = document.querySelector('#player-name');
const gridDisplay = document.querySelector('.grid');
const scoreDispaly = document.querySelector('.score');
const resultDisplay = document.querySelector('.status');
const resultTemp = document.querySelector('#results-template');
const resultsList = document.querySelector('.results');
const width = 5;

let squares = [];
let score;
let isChange;
let endMouseX;
let endMouseY;
let mouseX;
let mouseY;
let startX;
let startY;

const startGame = () => {
  if (playerName.checkValidity()) {
    document.userData.stopwatch.value = '00:00:00.00';
    score = 0;
    scoreDispaly.innerHTML = 0;
    createBoard();
    Start();
    startGameBtn.textContent = `Начать заново`;
  } else {
    showAlert('Введите имя!');
  }
}

const addListeners = () => {
  gridDisplay.addEventListener('mousedown', mouseDown);
  document.addEventListener('keydown', keyControl);
  gridDisplay.addEventListener('touchstart', startTouchControl);
  gridDisplay.addEventListener('touchend', endTouchControl);
  gridDisplay.addEventListener('mouseup', mouseUp);
}

const removeListeners = () => {
  gridDisplay.removeEventListener('mousedown', mouseDown);
  document.removeEventListener('keydown', keyControl);
  gridDisplay.removeEventListener('touchstart', startTouchControl);
  gridDisplay.removeEventListener('touchend', endTouchControl);
  gridDisplay.removeEventListener('mouseup', mouseUp);
}

const createBoard = () => {
  resultDisplay.innerHTML = null;
  gridDisplay.innerHTML = null;
  gridDisplay.style = 'opacity: 1';
  squares.splice(0, width * width);
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement('div');
    square.innerHTML = 0;
    gridDisplay.appendChild(square);
    squares.push(square);
  }
  generate();
  generate();
  addListeners();
}

const draw = () => {
  for (let i = 0; i < width * width; i++) {
    squares[i].removeAttribute('class');
    if (squares[i].textContent !== "0") {
      if (squares[i].textContent === "2" || squares[i].textContent === "4") {
        squares[i].classList.add("x2-4");
      } else {
        squares[i].classList.add("x8-2048");
      }
      squares[i].classList.add("x" + squares[i].textContent);
    }
  }
};

const generate = () => {
  const randomSquare = Math.floor(Math.random() * squares.length);
  if (squares[randomSquare].innerHTML == 0) {
    squares[randomSquare].innerHTML = generateNum();
  } else {
    generate();
  }
  draw();
}

const moveRow = (moveType) => {
  for (let i = 0; i < 25; i++) {
    if (i % 5 === 0) {
      const row = [
        parseInt(squares[i].innerHTML),
        parseInt(squares[i + 1].innerHTML),
        parseInt(squares[i + 2].innerHTML),
        parseInt(squares[i + 3].innerHTML),
        parseInt(squares[i + 4].innerHTML)
      ];
      const filteredRow = row.filter(num => num);
      const missing = 5 - filteredRow.length;
      const zeros = Array(missing).fill(0);
      let newRow;

      switch (moveType) {
        case 'Right':
          newRow = zeros.concat(filteredRow);
          break;
        case 'Left':
          newRow = filteredRow.concat(zeros);
          break;
        default:
          break;
      };

      if (!(equalArrays(row, newRow))) {
        isChange = true;
        squares[i].innerHTML = newRow[0];
        squares[i + 1].innerHTML = newRow[1];
        squares[i + 2].innerHTML = newRow[2];
        squares[i + 3].innerHTML = newRow[3];
        squares[i + 4].innerHTML = newRow[4];
      };
    }
  }
}

const moveColumn = (moveType) => {
  for (let i = 0; i < 5; i++) {
    const column = [
      parseInt(squares[i].innerHTML),
      parseInt(squares[i + width].innerHTML),
      parseInt(squares[i + (width * 2)].innerHTML),
      parseInt(squares[i + (width * 3)].innerHTML),
      parseInt(squares[i + (width * 4)].innerHTML)
    ];
    const filteredColumn = column.filter(num => num);
    const missing = 5 - filteredColumn.length;
    const zeros = Array(missing).fill(0);
    let newColumn;

    switch (moveType) {
      case 'Down':
        newColumn = zeros.concat(filteredColumn);
        break;
      case 'Up':
        newColumn = filteredColumn.concat(zeros);
        break;
      default:
        break;
    };

    if (!(equalArrays(column, newColumn))) {
      isChange = true;
      squares[i].innerHTML = newColumn[0];
      squares[i + width].innerHTML = newColumn[1];
      squares[i + (width * 2)].innerHTML = newColumn[2];
      squares[i + (width * 3)].innerHTML = newColumn[3];
      squares[i + (width * 4)].innerHTML = newColumn[4];
    }
  }
}

const combineRowLeft = () => {
  for (let i = 0; i < 24; i++) {
    if (
      squares[i].innerHTML === squares[i + 1].innerHTML 
      && squares[i].innerHTML != 0 
      && squares[i + 1].innerHTML != 0
      ) {
      const combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i + 1].innerHTML);
      squares[i].innerHTML = combinedTotal;
      squares[i + 1].innerHTML = 0;
      score += combinedTotal;
      scoreDispaly.innerHTML = score;
      isChange = true;
    }
  }
  checkForWin()
}

const combineRowRight = () => {
  for (let i = 24; i > 0; i--) {
    if (
      squares[i].innerHTML === squares[i - 1].innerHTML 
      && squares[i].innerHTML != 0 
      && squares[i - 1].innerHTML != 0
      ) {
      const combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i - 1].innerHTML);
      squares[i].innerHTML = combinedTotal;
      squares[i - 1].innerHTML = 0;
      score += combinedTotal;
      scoreDispaly.innerHTML = score;
      isChange = true;
    }
  }
  checkForWin();
}

const combineColumnUp = () => {
  for (let i = 0; i < 20; i++) {
    if (
      squares[i].innerHTML === squares[i + width].innerHTML 
      && squares[i].innerHTML != 0 
      && squares[i + width].innerHTML != 0
      ) {
      const combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i + width].innerHTML);
      squares[i].innerHTML = combinedTotal;
      squares[i + width].innerHTML = 0;
      score += combinedTotal;
      scoreDispaly.innerHTML = score;
      isChange = true;
    }
  }
  checkForWin();
}

const combineColumnDown = () => {
  for (let i = 24; i > 4; i--) {
    if (
      squares[i].innerHTML === squares[i - width].innerHTML 
      && squares[i].innerHTML != 0 
      && squares[i - width].innerHTML != 0
      ) {
      const combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i - width].innerHTML);
      squares[i].innerHTML = combinedTotal;
      squares[i - width].innerHTML = 0;
      score += combinedTotal;
      scoreDispaly.innerHTML = score;
      isChange = true;
    }
  }
  checkForWin();
}

const keyControl = (evt) => {
  if (evt.keyCode === 39) {
    evt.preventDefault();
    keyRight();
  } else if (evt.keyCode === 37) {
    evt.preventDefault();
    keyLeft();
  } else if (evt.keyCode === 38) {
    evt.preventDefault();
    keyUp();
  } else if (evt.keyCode === 40) {
    evt.preventDefault();
    keyDown();
  }
}

const addResult = () => {
  const tempContent = resultTemp.content;
  const newResult = tempContent.cloneNode(true);
  const player = newResult.querySelector('.player');
  const time = newResult.querySelector('.time');
  player.textContent = playerName.value;
  time.textContent = document.userData.stopwatch.value;
  resultsList.appendChild(newResult);
}

const checkForWin = () => {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].innerHTML == 2048) {
      StartStop();
      addResult();
      resultDisplay.innerHTML = 'Ты выиграл!';
      gridDisplay.style = 'opacity: 0.5'
      removeListeners();
    }
  }
}

const checkForGameOver = () => {
  let zeros = 0;
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].innerHTML == 0) {
      zeros++;
    }
  }

  for (let i = 0; i < (squares.length - 1); i++) {
    if (squares[i].innerHTML === squares[i + 1].innerHTML) {
      zeros++;
    }
  }

  for (let i = 0; i < 20; i++) {
    if (squares[i].innerHTML === squares[i + width].innerHTML) {
      zeros++;
    }
  }
  if (zeros === 0) {
    StartStop();
    resultDisplay.innerHTML = 'Ты проиграл!';
    gridDisplay.style = 'opacity: 0.5';
    removeListeners();
  }
}

const keyRight = () => {
  isChange = false;
  moveRow(MoveType.RIGHT)
  combineRowRight();
  if (isChange) {
    generate();
  }
  moveRow(MoveType.RIGHT)
  draw();
  checkForGameOver();
}

const keyLeft = () => {
  isChange = false;
  moveRow(MoveType.LEFT)
  combineRowLeft();
  if (isChange) {
    generate();
  }
  moveRow(MoveType.LEFT)
  draw();
  checkForGameOver();
}

const keyDown = () => {
  isChange = false;
  moveColumn(MoveType.DOWN)
  combineColumnDown();
  if (isChange) {
    generate();
  }
  moveColumn(MoveType.DOWN)
  draw();
  checkForGameOver();
}

const keyUp = () => {
  isChange = false;
  moveColumn(MoveType.UP)
  combineColumnUp();
  if (isChange) {
    generate();
  }
  moveColumn(MoveType.UP)
  draw();
  checkForGameOver();
}

const mouseDown = (evt) => {
  mouseX = evt.pageX;
  mouseY = evt.pageY;
  if (evt.which == 1) {
    addMouseMove();
  }
}

const addMouseMove = () => {
  gridDisplay.addEventListener('mousemove', evt => {
    evt.preventDefault();
    endMouseX = evt.pageX;
    endMouseY = evt.pageY;
  });
}

const removeMouseMove = () => {
  endMouseX = 0;
  endMouseY = 0;
  gridDisplay.removeEventListener('mousemove', evt => {
    evt.preventDefault();
    endMouseX = evt.pageX;
    endMouseY = evt.pageY;
  });
}

const mouseUp = (evt) => {
  if (evt.which == 1) {
    evt.preventDefault();
    const diffX = endMouseX - mouseX;
    const diffY = endMouseY - mouseY;
    const absX = Math.abs(diffX) > Math.abs(diffY);
    const absY = Math.abs(diffY) > Math.abs(diffX);
    if (diffX > 0 && absX) {
      keyRight();
    }
    else if (diffX < 0 && absX) {
      keyLeft();
    }
    else if (diffY > 0 && absY) {
      keyDown();
    }
    else if (diffY < 0 && absY) {
      keyUp();
    }
    removeMouseMove();
  }
}

const startTouchControl = (evt) => {
  if (evt.cancelable) {
    evt.preventDefault();
    startX = evt.touches[0].pageX;
    startY = evt.touches[0].pageY;
  }
}

const endTouchControl = (evt) => {
  if (evt.cancelable) {
    evt.preventDefault();
    const endX = evt.changedTouches[0].pageX;
    const endY = evt.changedTouches[0].pageY;
    const diffX = endX - startX;
    const diffY = endY - startY;
    const absX = Math.abs(diffX) > Math.abs(diffY);
    const absY = Math.abs(diffY) > Math.abs(diffX);
    if (diffX > 0 && absX) {
      keyRight();
    }
    else if (diffX < 0 && absX) {
      keyLeft();
    }
    else if (diffY > 0 && absY) {
      keyDown();
    }
    else if (diffY < 0 && absY) {
      keyUp();
    }
  }
}

startGameBtn.addEventListener('click', startGame);