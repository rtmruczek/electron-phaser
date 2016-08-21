class MenuComponent {


  constructor(choices, currentIndex = 0) {
    this.choices = choices
    this.currentIndex = currentIndex
  }

  preload(phaser) {
    phaser.game.load.image('pointer', 'assets/pointer.png');

  }

  create(phaser) {
    this.pointer = phaser.game.add.sprite(500, 200, 'pointer');
    this.cursors = phaser.game.input.keyboard.createCursorKeys();

    this.startPos = {x: this.pointer.x, y: this.pointer.y}

    let y = this.pointer.y + 5
    let x = this.pointer.x - 115


    this.choices.forEach((choice) => {
      let text = phaser.game.add.text(x, y, choice, { font: "32px Arial", fill: "#ffffff",  boundsAlignH: 'right'})
      text.setTextBounds(0, 0, 100, 50)
      console.log(text.left, text.top, text.right, text.bottom)
      this.lastPos = {x: x, y: y - 5}
      y += 50
    })

    this.cursors.down.onDown.add(this.moveDown, this);
    this.cursors.up.onDown.add(this.moveUp, this);

  }

  moveDown() {
    this.currentIndex += 1
    if(this.currentIndex == this.choices.length) {
      this.pointer.y = this.startPos.y
      console.log(this.pointer.y)
      this.currentIndex = 0
    }
    else
      this.pointer.y += 50;

  }

  moveUp() {
    this.currentIndex -= 1
    if(this.currentIndex == -1) {
      this.pointer.y = this.lastPos.y
      this.currentIndex = this.choices.length - 1
    }
    else
      this.pointer.y -= 50;
  }

  update() {

  }

}

export default MenuComponent
