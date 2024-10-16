class Game {
  constructor() {
    this.score = 0;
    this.lives = 5;
    this.element = document.querySelector("#game-area");
    this.width = this.element.getBoundingClientRect().width;
  }
}

const myGame = new Game()