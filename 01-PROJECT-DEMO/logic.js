console.log(player);
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    player.direction = "left";
  } else if (e.key === "ArrowRight") {
    player.direction = "right";
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

  player.move(player.direction);
}

requestAnimationFrame(gameLoop);