const { assert } = require('chai');
const Game = require('../lib/Game.js');
const Player = require('../lib/Player.js');

describe('GamePiece', () => {
  let gamepiece;

  beforeEach(() => {
    game = new Game(ctx, direction, playerLives);
    player = new Player(ctx, direction, playerLives);
  });

  it('should take properties', () => {
    // Assertion
    assert.deepEqual(gamepiece, {
      ctx: ,
      direction:
    });
    // Teardown
  });

 it('if gamepiece collides with wall, player number of lives should decrease by 1', () => {

    const player = new Player();

    const colliding = gamepiece.isCollidingWithWall(this.canvasWidth, this.canvasHeight);

    gamepiece.move();

    assert.isTrue(colliding);

    assert.equal(player.lives, player.lives - 1);

    
  });


 it('if gamepiece collides with other player, game is over', () => {

  gamepiece.move();

  assert.equal(game.players[0].isCollidingWith(game.players[1]), true);

  assert.equal(game.gameOver, true);

    
  });


  it('when player collides with wall, decrease score', () => {
    // player = new Player(this.x, this.y, this.height, this.width, this.color, this.borderColor);


    assert.equal(player.isCollidingWithWall, true);

    for(){

    }

    assert.equal(game.playerLives, game.playerLives - 1);




  });


const ctx = {
  canvas: {
    width: 500,
    height: 500
  }
}