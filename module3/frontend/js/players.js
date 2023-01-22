const playerTemp = document.querySelector('#player').content.querySelector('.result');
const playersContainer = document.querySelector('.results');

const addPlayer = (datum) => {
  const playerItem = playerTemp.cloneNode(true);
  playerItem.querySelector('.player').textContent = datum.name;
  playerItem.querySelector('.time').textContent = datum.time;
  return playerItem;
}

const addPlayers = (items) => {
  while (playersContainer.firstChild) {
    playersContainer.removeChild(playersContainer.firstChild);
  }
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < items.length; i++) {
    const playerItem = addPlayer(items[i]);
    fragment.appendChild(playerItem);
  }
  playersContainer.appendChild(fragment);
}


export {addPlayers};