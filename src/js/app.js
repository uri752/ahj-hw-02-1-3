import Game from './Game';

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();

  const interval = setInterval(() => {
    const index = Math.floor(Math.random() * 16);
    game.curTileIndex = index;
    game.matrix[game.curTileIndex].appendChild(game.goblin);
  }, 1000);
});
