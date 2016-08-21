class MenuComponent {

  constructor() {
  }

  preload(phaser) {
    phaser.game.load.image('pointer', 'assets/pointer.png');

  }

  create(phaser) {
    this.pointer = phaser.game.add.sprite(200, 200, 'pointer');
    this.cursors = phaser.game.input.keyboard.createCursorKeys();
    //fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    this.cursors.down.onDown.add(this.moveDown, this);
    this.cursors.up.onDown.add(this.moveUp, this);
  }

  moveDown() {
    this.pointer.y += 64;
  }

  moveUp() {
    this.pointer.y -= 64;
  }

  update() {

  }

}

export default MenuComponent
