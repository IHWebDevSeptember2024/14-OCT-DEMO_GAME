class EnemyArea {
  constructor() {
    this.positionLeft = 0;
    this.positionTop = 0;
    this.element = document.querySelector("#enemy-area");
    this.width = this.element.getBoundingClientRect().width;
    this.velocity = 1;
    this.direction = "right";
  }

  move() {
    if (this.direction === "right") {
      this.positionLeft += this.velocity;
      if (this.positionLeft >= myGame.width - this.width) {
        this.direction = "left";
      }
    } else if (this.direction === "left") {
        this.positionLeft -= this.velocity;
        if (this.positionLeft <= 0 ) {
          this.direction = "right";
        }
    }
    this.element.style.left = this.positionLeft + "px";
  }
}

const enemyArea = new EnemyArea();
