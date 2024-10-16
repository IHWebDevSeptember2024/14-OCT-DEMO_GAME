class Enemy {
  static enemiesArray = [];
  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("enemy");
    enemyArea.element.appendChild(this.element);
    Enemy.enemiesArray.push(this);
  }
}

for (let index = 0; index < 30; index++) {
  new Enemy();
}
