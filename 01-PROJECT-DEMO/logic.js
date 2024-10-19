document.addEventListener("keydown", (e) => {

  switch (e.key) {
    case "ArrowLeft":
    case "a":
      player.direction = "left";
      break;
    case "ArrowRight":
    case "d":
      player.direction = "right";
      break;
    case " ":
      new Bullet(player.positionLeft + player.width/2);
      break;
    default:
      break;
  }
});

document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowLeft":
    case "a":
      if (player.direction === "left") {
        player.direction = null;
      }
      break;
    case "ArrowRight":
    case "d":
      if (player.direction === "right") {
        player.direction = null;
      }

      break;
  }
});

let frames = 0;

// básicamente creamos un loop infinito
// le decimos a nuestra app que queremos reproducir código en cada frame
function gameLoop() {
  requestAnimationFrame(gameLoop);
  frames++;

  Bullet.bulletsArray.forEach((bullet) => {
    bullet.move();
  });
  crashTest();

  enemyArea.move();
  player.move(player.direction);
}

requestAnimationFrame(gameLoop);

function crashTest() {
  Enemy.enemiesArray.forEach((enemy) => {
    const enemyLeftEdge = enemy.getPositionLeft();
    const enemyRightEdge = enemy.getPositionLeft() + enemy.width;
    const enemyTopEdge = enemy.getPositionBottom() - enemy.height;
    const enemyBottomEdge = enemy.getPositionBottom();

    Bullet.bulletsArray.forEach((bullet) => {
      const bulletLeftEdge = bullet.element.getBoundingClientRect().left;
      const bulletRightEdge =
        bullet.element.getBoundingClientRect().left + bullet.width;
      const bulletTopEdge =
        bullet.element.getBoundingClientRect().bottom - bullet.height;
      const bulletBottomEdge = bullet.element.getBoundingClientRect().bottom;

      if (
        bulletLeftEdge < enemyRightEdge &&
        bulletRightEdge > enemyLeftEdge &&
        bulletTopEdge < enemyBottomEdge &&
        bulletBottomEdge > enemyTopEdge
      ) {
        bullet.destroy();
        enemy.destroy();
      }
    });
  });
}
