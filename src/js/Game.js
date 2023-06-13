export default class Game {
  constructor() {
    this.board = document.getElementById('board');
    const goblin = document.getElementById('goblin');
    goblin.className = '';
    this.goblin = goblin;
    this.curTileIndex = -1;
    this.generateMatrix();
  }

  generateMatrix() {
    const newIndex = Math.floor(Math.random() * 16);
    this.matrix = [
      undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined,

    ];

    this.matrix.forEach((item, index, arr) => {
      const tile = document.createElement('span');
      tile.className = 'tile';
      this.board.appendChild(tile);
      if (index === newIndex) {
        tile.appendChild(this.goblin);
      }
      // item = tile;
      arr[index] = tile;
    });

    this.curTileIndex = newIndex;
  }
}
