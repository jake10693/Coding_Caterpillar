// What I believe to be a properly written setTimeout loop function.
function myLoop() {
    setTimeout(function () {
      for (let i = 0; i < array.length; i++) {
        if ('statement') {
          // Instructions to be executed
      }
      
    }, // Time in milliseconds);
  }

  // Project Use-Case
  function myLoop() {
    setTimeout(function () {
      for (let i = 0; i < directions.length; i++) {
        if (directions[i].pos === "x") {
          if (directions[i].operator === "+") {
            moveRight = xPos += 20;
          }
          if (directions[i].operator === "-") {
            moveLeft = xPos -= 20;
          }
        }
        if (directions[i].pos === "y") {
          if (directions[i].operator === "+") {
            moveUp = yPos += 20;
          }
          if (directions[i].operator === "-") {
            moveDown = yPos -= 20;
          }
        }
        context.rect(xPos, yPos, 50, 50);
      }
    }, 3000);
  }