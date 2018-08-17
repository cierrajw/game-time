const Game = require('./Game');


module.exports = class GamePiece {
  constructor(x, y, height, width, color) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = 1;
    this.dy = 0;
    this.dxv = 1;
    this.dyv = 1;
  }

  isCollidingWith(object) {
    return (
      this.x < object.x + object.width && 
      this.x + this.width > object.x &&
      this.y < object.y + object.height &&
      this.y + this.height > object.y
    );
  }

  isCollidingWithWall(canvasWidth, canvasHeight) {
    return (
      this.x < 0 ||
      this.x + this.width > canvasWidth ||
      this.y < 0 || 
      this.y + this.height > canvasHeight
    )
  }

  // draw(ctx) {
  //   const { x, y, height, width, color } = this;

  //   let player1 = new Game();
  //   let player2 = new Game();

  //   player1.draw(this);
  //   player2.draw(this);

  //   ctx.fillStyle = color;
  //   ctx.fillRect(x, y, width, height);

  //   ctx.fillRect(this.trail[i].x, this.trail[i].y);
  // }

  move() {
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dyv;
  }

  changeDirection(direction) {
    this.dx = direction.dx;
    this.dy = direction.dy;
  }

}