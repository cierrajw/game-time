const GamePiece = require('./GamePiece');
const Player = require('./Player');
const Trail = require('./Trail');

let player1lives = document.querySelector('#player1-lives');
let player2lives = document.querySelector('#player2-lives');

let scorep1 = document.querySelector('#scorep1');
let scorep2 = document.querySelector('#scorep2');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.trails = []; 
    this.isLevelRunning = true;
    this.players = [
      new Player(1, 300, 5, 5, 'red', 'black', 1, 0, 3, 0),
      new Player(795, 300, 5, 5, 'yellow', 'black', -1, 0, 3, 0)
    ] 
  }

  animate() {

    if (this.isLevelRunning) {

      this.players.forEach( player => {
        this.trails.push(new Trail(player.x, player.y, player.height, player.width, player.color, player.borderColor)) 
        this.handlePlayer(player);
        player.draw(this.ctx);
      });
    }
  }

  goToNextLevel(){
    // goToNextLevel
    // reset player positions & direction
    // empty trails
    // set isLevelRunning to true
  }

  handlePlayer( player, trails ) {
    const { canvas } = this.ctx;
    let player1 = this.players[0];
    let player2 = this.players[1];
    let player1Collides = player1.isCollidingWith(player2);
    let player2Collides = player2.isCollidingWith(player1);

    let playerCollidesTrail = player.isCollidingWithTrail(this.trails);
    let playerCollidesWall = player.isCollidingWithWall(canvas.width, canvas.height);

    let player1CollidesTrail = player1.isCollidingWithTrail(this.trails);
    let player2CollidesTrail = player2.isCollidingWithTrail(this.trails);

    let player1CollidesWall = player1.isCollidingWithWall(canvas.width, canvas.height);
    let player2CollidesWall = player2.isCollidingWithWall(canvas.width, canvas.height);


    if(player1Collides || player1CollidesTrail || player1CollidesWall){

      player1.lives --;
      player2.score ++;

      player1lives.innerHTML = player1.lives --;
      scorep2.innerHTML = player2.score ++;

      this.displayGameOver();

      this.isLevelRunning = false;

    }else if(player2Collides || player2CollidesTrail || player2CollidesWall){

      // debugger;
      let p2lives = player2.lives --;
      let p1score = player1.score ++;

      player2lives.innerHTML = p2lives;
      scorep1.innerHTML = p1score;

      this.displayGameOver();

      this.isLevelRunning = false;

    }else if (playerCollidesTrail || playerCollidesWall){

        const newDirection = {
          dx: 0,
          dy: 0
        }

        this.isLevelRunning = false;

        player.changeDirection(newDirection);
        player.move();
        
        this.displayGameOver();

        this.endGame(); 
      }else{
        player.move();
      }

  }

  displayGameOver(){
    this.ctx.font = "90px Orbitron, sans-serif";
    this.ctx.fillStyle = 'white';
    this.ctx.fillText("Game Over",130,330);
    console.log("collided wth other player!");
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
      this.players[0].changeDirection(direction);
      //left arrow
    } else if (e.keyCode === 37) {
      direction.dx = -1;
      this.players[0].changeDirection(direction);
      //down arrow
    } else if (e.keyCode === 40) {
      direction.dy = 1;
      this.players[0].changeDirection(direction);
      //up arrow
    } else if (e.keyCode === 38) {
      direction.dy = -1;
      this.players[0].changeDirection(direction);
    } 
    //move up with W//
    if(e.key === 'w'){
      direction.dy = -1;
      this.players[1].changeDirection(direction);
    }
    //move left with A//
    else if(e.key === 'a'){
      direction.dx = -1;
      this.players[1].changeDirection(direction);
    }
    //move down with S//
    else if(e.key === 's'){
      direction.dy = 1;
      this.players[1].changeDirection(direction);
    }
    //move right with D//
    else if(e.key === 'd'){
      direction.dx = 1;
      this.players[1].changeDirection(direction);
    }
  }
}