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

  player.move(player.direction);
}

requestAnimationFrame(gameLoop);
