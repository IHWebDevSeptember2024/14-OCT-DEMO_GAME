class Player {
  constructor() {
    this.element = document.createElement("div");
    this.gameArea = document.querySelector("#game-area");
    this.element.setAttribute("id", "player");
    this.gameArea.appendChild(this.element);

    this.positionBottom = 0;
    this.positionLeft = 0;
    this.velocity = 5;
    this.direction = null;
  }

  move(direction) {
    if (direction === "left") {
      this.positionLeft -= this.velocity;
    } else if (direction === "right") {
      this.positionLeft += this.velocity;
    }
    this.element.style.left = this.positionLeft + "px";
  }
}

const player = new Player();
