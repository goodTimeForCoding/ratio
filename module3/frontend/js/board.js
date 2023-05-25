import {equalArrays, showAlert} from './util.js';
import {StartStop, Start} from './timer.js';
import {getData, setPlayer} from './fetch';
import {addPlayers} from './players';

let startGameBtn = document.querySelector('#start-game');
let playerName = document.querySelector('#player-name');
let gridDisplay = document.querySelector('.grid');
let scoreDispaly = document.querySelector('.score');
let resultDisplay = document.querySelector('.status');

let width = 5;
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

const createBoard = () => {
  resultDisplay.innerHTML = null;
  gridDisplay.innerHTML = null;
  gridDisplay.style = 'opacity: 1';
  squares.splice(0, width * width);
  for (let i = 0; i < width * width; i++) {
    let square = document.createElement('div');
    square.innerHTML = 0;
    gridDisplay.appendChild(square);
    squares.push(square);
  }
  generate();
  generate();
  gridDisplay.addEventListener('mousedown', mouseDown);
  document.addEventListener('keydown', keyControl);
  gridDisplay.addEventListener('touchstart', startTouchControl);
  gridDisplay.addEventListener('touchend', endTouchControl);
  gridDisplay.addEventListener('mouseup', mouseUp);
}

const generateNum = () => {
  let number = Math.random();
  if (number >= 0.9) {
    return 4;
  } else {
    return 2;
  }
}

const draw = () => {
  for (let i = 0; i < width * width; i++) {
    squares[i].removeAttribute('class');
    if (squares[i].textContent !== '0') {
      squares[i].classList.add('x' + squares[i].textContent);
    }
  }
}

const generate = () => {
  let randomSquare = Math.floor(Math.random() * squares.length);
  if (squares[randomSquare].innerHTML == 0) {
    squares[randomSquare].innerHTML = generateNum();
  } else {
    generate();
  }
  draw();
}

const moveRight = () => {
  for (let i = 0; i < 25; i++) {
    if (i % 5 === 0) {
      let totalOne = squares[i].innerHTML;
      let totalTwo = squares[i + 1].innerHTML;
      let totalThree = squares[i + 2].innerHTML;
      let totalFour = squares[i + 3].innerHTML;
      let totalFive = squares[i + 4].innerHTML;
      let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour), parseInt(totalFive)];
      let filteredRow = row.filter(num => num);
      let missing = 5 - filteredRow.length;
      let zeros = Array(missing).fill(0);
      let newRow = zeros.concat(filteredRow);
      if (!(equalArrays(row, newRow))) {
        isChange = true;
        squares[i].innerHTML = newRow[0];
        squares[i + 1].innerHTML = newRow[1];
        squares[i + 2].innerHTML = newRow[2];
        squares[i + 3].innerHTML = newRow[3];
        squares[i + 4].innerHTML = newRow[4];
      }
    }
  }
}

const moveLeft = () => {
  for (let i = 0; i < 25; i++) {
    if (i % 5 === 0) {
      let totalOne = squares[i].innerHTML;
      let totalTwo = squares[i + 1].innerHTML;
      let totalThree = squares[i + 2].innerHTML;
      let totalFour = squares[i + 3].innerHTML;
      let totalFive = squares[i + 4].innerHTML;
      let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour), parseInt(totalFive)];
      let filteredRow = row.filter(num => num);
      let missing = 5 - filteredRow.length;
      let zeros = Array(missing).fill(0);
      let newRow = filteredRow.concat(zeros);
      if (!(equalArrays(row, newRow))) {
        isChange = true;
        squares[i].innerHTML = newRow[0];
        squares[i + 1].innerHTML = newRow[1];
        squares[i + 2].innerHTML = newRow[2];
        squares[i + 3].innerHTML = newRow[3];
        squares[i + 4].innerHTML = newRow[4];
      }
    }
  }
}

const moveDown = () => {
  for (let i = 0; i < 5; i++) {
    let totalOne = squares[i].innerHTML;
    let totalTwo = squares[i + width].innerHTML;
    let totalThree = squares[i + (width * 2)].innerHTML;
    let totalFour = squares[i + (width * 3)].innerHTML;
    let totalFive = squares[i + (width * 4)].innerHTML;
    let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour), parseInt(totalFive)];
    let filteredColumn = column.filter(num => num);
    let missing = 5 - filteredColumn.length;
    let zeros = Array(missing).fill(0);
    let newColumn = zeros.concat(filteredColumn);
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

const moveUp = () => {
  for (let i = 0; i < 5; i++) {
    let totalOne = squares[i].innerHTML;
    let totalTwo = squares[i + width].innerHTML;
    let totalThree = squares[i + (width * 2)].innerHTML;
    let totalFour = squares[i + (width * 3)].innerHTML;
    let totalFive = squares[i + (width * 4)].innerHTML;
    let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour), parseInt(totalFive)];
    let filteredColumn = column.filter(num => num);
    let missing = 5 - filteredColumn.length;
    let zeros = Array(missing).fill(0);
    let newColumn = filteredColumn.concat(zeros);
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
    if (squares[i].innerHTML === squares[i + 1].innerHTML && squares[i].innerHTML != 0 && squares[i + 1].innerHTML != 0) {
      let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i + 1].innerHTML);
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
    if (squares[i].innerHTML === squares[i - 1].innerHTML && squares[i].innerHTML != 0 && squares[i - 1].innerHTML != 0) {
      let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i - 1].innerHTML);
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
    if (squares[i].innerHTML === squares[i + width].innerHTML && squares[i].innerHTML != 0 && squares[i + width].innerHTML != 0) {
      let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i + width].innerHTML);
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
    if (squares[i].innerHTML === squares[i - width].innerHTML && squares[i].innerHTML != 0 && squares[i - width].innerHTML != 0) {
      let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i - width].innerHTML);
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

const checkForWin = () => {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].innerHTML == 2048) {
      let playerValue = playerName.value;
      let timeValue = document.userData.stopwatch.value;
      StartStop();
      setPlayer(playerValue, timeValue, addPlayers);
      resultDisplay.innerHTML = 'Ты выиграл!';
      gridDisplay.style = 'opacity: 0.5'
      startGameBtn.addEventListener('click', startGame);
      gridDisplay.removeEventListener('mousedown', mouseDown);
      document.removeEventListener('keydown', keyControl);
      gridDisplay.removeEventListener('touchstart', startTouchControl);
      gridDisplay.removeEventListener('touchend', endTouchControl);
      gridDisplay.removeEventListener('mouseup', mouseUp);
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
    startGameBtn.addEventListener('click', startGame);
    gridDisplay.removeEventListener('mousedown', mouseDown);
    document.removeEventListener('keydown', keyControl);
    gridDisplay.removeEventListener('touchstart', startTouchControl);
    gridDisplay.removeEventListener('touchend', endTouchControl);
    gridDisplay.removeEventListener('mouseup', mouseUp);
  }
}

const keyRight = () => {
  isChange = false;
  moveRight();
  combineRowRight();
  if (isChange) {
    generate();
  }
  moveRight();
  draw();
  checkForGameOver();
}

const keyLeft = () => {
  isChange = false;
  moveLeft();
  combineRowLeft();
  if (isChange) {
    generate();
  }
  moveLeft();
  draw();
  checkForGameOver();
}

const keyDown = () => {
  isChange = false;
  moveDown();
  combineColumnDown();
  if (isChange) {
    generate();
  }
  moveDown();
  draw();
  checkForGameOver();
}

const keyUp = () => {
  isChange = false;
  moveUp();
  combineColumnUp();
  if (isChange) {
    generate();
  }
  moveUp();
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
    let x = endMouseX - mouseX;
    let y = endMouseY - mouseY;
    let absX = Math.abs(x) > Math.abs(y);
    let absY = Math.abs(y) > Math.abs(x);

    if (x > 0 && absX) {
      keyRight();
    }
    else if (x < 0 && absX) {
      keyLeft();
    }
    else if (y > 0 && absY) {
      keyDown();
    }
    else if (y < 0 && absY) {
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
    let endX = evt.changedTouches[0].pageX;
    let endY = evt.changedTouches[0].pageY;
    let x = endX - startX;
    let y = endY - startY;
    let absX = Math.abs(x) > Math.abs(y);
    let absY = Math.abs(y) > Math.abs(x);
    if (x > 0 && absX) {
      keyRight();
    }
    else if (x < 0 && absX) {
      keyLeft();
    }
    else if (y > 0 && absY) {
      keyDown();
    }
    else if (y < 0 && absY) {
      keyUp();
    }
  }
}

getData(addPlayers);
startGameBtn.addEventListener('click', startGame);