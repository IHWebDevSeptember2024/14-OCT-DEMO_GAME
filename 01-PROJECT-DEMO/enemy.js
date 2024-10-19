class Enemy {
  static enemiesArray = [];
  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("enemy");
    enemyArea.element.appendChild(this.element);
    Enemy.enemiesArray.push(this);
    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
    this.positionBottom = this.element.getBoundingClientRect().bottom;
  }

  getPositionLeft() {
    return this.element.getBoundingClientRect().left;
  }

  getPositionBottom() {
    return this.element.getBoundingClientRect().bottom;
  }

  destroy() {
    // this.element.remove();
    this.element.style.position = "relative";
    this.element.style.top = -10000 + "px"
    const enemyIndex = Enemy.enemiesArray.indexOf(this);

    Enemy.enemiesArray.splice(enemyIndex, 1);
  }
}

for (let index = 0; index < 30; index++) {
  new Enemy();
}
