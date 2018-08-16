const GamePiece = require('../lib/GamePiece.js');


module.exports = class Player extends GamePiece{
  constructor(x, y, height, width, color, borderColor, lives = 3){
    super(x, y, height, width, color);

    this.lives = lives;

    this.borderColor = borderColor;
  }
}
