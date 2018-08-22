const GamePiece = require('../lib/GamePiece.js');


module.exports = class Player extends GamePiece {
  constructor(x, y, height, width, color, borderColor, dx, dy, lives = 3, score = 0){
    super(x, y, height, width, color, borderColor, dx, dy);
    this.borderColor = borderColor;
    this.lives = lives;
    this.score = score;
  }

  draw(ctx) {
    const { x, y, height, width, color } = this;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }
}

