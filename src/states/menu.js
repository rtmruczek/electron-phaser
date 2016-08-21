class Menu extends Phaser.State {

  constructor() {
    super();
  }

  preload() {
    this.game.load.image('pointer', 'assets/pointer.png');

  }

  create() {
    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'MENU', {
      font: '42px Arial', fill: '#ffffff', align: 'center'
    });
    text.anchor.set(0.5);
    this.pointer = this.game.add.sprite(200, 200, 'pointer');
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.ok = true;
    //this.input.onDown.add(this.startGame, this);

  }

  update() {
    this.game.debug.text('Elapsed seconds: ' + this.game.time.totalElapsedSeconds().toFixed(3), 32, 32);


    if (this.cursors.down.isDown) {
      if(this.ok)
        this.pointer.y += 64;

      this.ok = false
    }

    if(this.cursors.down.isUp) {
      this.ok = true
    }

    if (this.cursors.up.isDown) {
      this.pointer.y -= 16;
    }

    var wasDown = this.cursors.down.isDown;
  }

  startGame () {
    this.game.state.start('game');
  }

}

export default Menu;
