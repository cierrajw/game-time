const GamePiece = require('./GamePiece');
const Player = require('./Player');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    this.players = [
      new Player(50, 50, 10, 10, 'red', 'black', 3),
      new Player(50, 50, 10, 10, 'blue', 'black', 3)
    ];
  }

  // draw one frame of our game
  animate() {

    this.players.forEach( player => {

    this.handlePlayer(player);
    player.draw(this.ctx);
      
    });
  };

  handlePlayer(player){

    const { canvas } = this.ctx;

    if (player.isCollidingWithWall(canvas.width, canvas.height)) {
        // this.endGame();  
        console.log('haiii');
        const newDirection = {
          dx: player.dx * -1,
          dy: 0
        }

        player.changeDirection(newDirection);
        player.move();

      } else {
        player.move();
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
      dx: 1,
      dy: 0
    };

      //right arrow
    if (e.keyCode === 39) {
      direction.dx = 1;

      this.players[0].changeDirection(direction);
      

      console.log("moved right!");

      //left arrow
    } else if (e.keyCode === 37) {
      direction.dx = -1;

      this.players[0].changeDirection(direction);

      console.log("moved left!");

      //down arrow
    } else if (e.keyCode === 40) {
      direction.dy = 1;
      this.players[0].changeDirection(direction);

      console.log("moved down!");

      //up arrow
    } else if (e.keyCode === 38) {
      direction.dy = -1;
      this.players[0].changeDirection(direction);

      console.log("moved up!");
    } 

    //move up with W//
    if(e.keyCode === 'w'){
      direction.dy = -1;

      this.players[1].changeDirection(direction);

      console.log("moved up with w!!!");
    }

    //move left with A//
    else if(e.keyCode === 'a'){
      direction.dx = -1;

      this.players[1].changeDirection(direction);

      console.log("moved left with a!!!");
    }

    //move down with S//
    else if(e.keyCode === 's'){
      direction.dy = 1;

      this.players[1].changeDirection(direction);

      console.log("moved down with s!!!");
    }

    //move right with D//
    else if(e.keyCode === 'd'){
      direction.dx = 1;

      this.players[1].changeDirection(direction);

      console.log("moved right with d!!!");
    }


    console.log('key pressed!');

    this.players.forEach( player => player.changeDirection(direction) );
  }

}