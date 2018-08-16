
const { assert } = require('chai');
const Player = require('../lib/Player.js');


describe('Player', () => {
  let player;

  beforeEach(() => {

    player = new Player(this.lives);

  });


  it('if player collides with wall, decrease score', () => {


  });

  it('if player collides with other player, decrease score', () => {
  

  });

  it('should have trail path?', () => {
 

  });

  it('should start out with 3 lives', () => {
    assert.isDefined(this.lives);
    assert.equal(this.lives, 3);



  });


});


module.exports = Player;