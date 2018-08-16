const Block = require('./Block');
const Player = require('./Player');
const GamePiece = require('./GamePiece');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    this.blocks = [
      new Block(50, 50, 10, 10, 'red', 'black')
    ];
  }

  // draw one frame of our game
  animate() {
    const { canvas } = this.ctx;

    this.blocks.forEach( block => {
      
      block.draw(this.ctx);
    });
  }

  handleBlock(block){
    if (block.isCollidingWithWall(canvas.width, canvas.height)) {
        // this.endGame();  
        console.log('haiii');
        const newDirection = {
          // dx: -1,
          // dy: 0
          dx: block.dx * -1,
          dy: 0
        }

        block.changeDirection(newDirection);
        block.move();

      } else {
        block.move();
      }
  }

  endGame() {
    this.gameOver = true;
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  handleKeyPress(e) {
    const direction = {
      dx: 0,
      dy: 0
    };

      //right arrow
    if (e.keyCode === 39) {
      direction.dx = 1;

      console.log("moved right!");

      //left arrow
    } else if (e.keyCode === 37) {
      direction.dx = -1;

      console.log("moved left!");

      //down arrow
    } else if (e.keyCode === 40) {
      direction.dy = 1;
      console.log("moved down!");

      //up arrow
    } else if (e.keyCode === 38) {
      direction.dy = -1;
      console.log("moved up!");
    } 

    console.log('key pressed!');

    this.blocks.forEach( block => block.changeDirection(direction) );
  }

}