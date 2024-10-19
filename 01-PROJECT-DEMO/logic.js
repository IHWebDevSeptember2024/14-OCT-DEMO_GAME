document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      player.direction = "left";
      break;
    case "ArrowRight":
      player.direction = "right";
      break;
    case " ":
      new Bullet(player.positionLeft);
      break;
    default:
      break;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    player.direction = null;
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
