import MenuComponent from '../Components/MenuComponent.js'


class Menu extends Phaser.State {

  constructor() {
    super();
    this.components = [new MenuComponent(['Attack', 'Magic', 'OTHER COOL STUFF'])]
  }

  preload() {
    this.components.forEach( (item) => {
      item.preload(this)
    })
  }

  create() {
    this.components.forEach( (item) => {
      item.create(this)
    })
  }

  update() {
    this.components.forEach( (item) => {
      item.update(this)
    })

    this.game.debug.text('Elapsed seconds: ' + this.game.time.totalElapsedSeconds().toFixed(3), 32, 32);

  }

}

export default Menu;
