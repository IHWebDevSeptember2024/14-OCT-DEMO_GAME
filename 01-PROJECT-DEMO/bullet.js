class Bullet {
  static bulletsArray = [];
  constructor(positionLeft) {
    this.element = document.createElement("div");
    this.element.classList.add("bullet");
    this.positionLeft = positionLeft;
    this.positionBottom = 0;
    this.element.style.left = this.positionLeft + "px";
    this.velocity = 10;
    myGame.element.appendChild(this.element);
    this.height = this.element.getBoundingClientRect().height;
    this.width = this.element.getBoundingClientRect().width;
    Bullet.bulletsArray.push(this);
  }

  move() {
    this.positionBottom += this.velocity;
    this.element.style.bottom = this.positionBottom + "px";

    if (this.positionBottom >= myGame.height - this.height) {
      // eliminar del HTML
      this.element.remove();
      // eliminar del array
      // localizar la bullet en concreto (la que acaba de chocar)
      const index = Bullet.bulletsArray.indexOf(this);
      Bullet.bulletsArray.splice(index, 1);
    }
  }

  destroy() {
    const bulletIndex = Bullet.bulletsArray.indexOf(this);
    Bullet.bulletsArray.splice(bulletIndex, 1);
    this.element.remove();
  }
}
