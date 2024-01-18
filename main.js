// //cnv setup
// let cnv = document.getElementById("canvas");
// let ctx = cnv.getContext("2d");
// cnv.width = 600;
// cnv.height = 400;

// //global variables
// let player = {
//   x: 400,
//   y: 400,
//   w: 25,
//   h: 25,
//   dx: 5,
//   dy: 0,
//   a: 1, // acc
//   jumpSpeed: -15,
//   onGround: false,
//   color: "blue",
// };

// let platform = {
//   x: 150,
//   y: 300,
//   w: 300,
//   h: 20,
//   color: "grey",
// };

// let leftPressed = false;
// let rightPressed = false;
// let upPressed = false;
// let downPressed = false;

// //draw func
// window.addEventListener("load", draw);

// function draw() {
//   //logic
//   // Horizontal move
//   if (rightPressed) {
//     player.x += player.dx;
//   } else if (leftPressed) {
//     player.x -= player.dx;
//   }

//   // Vertical move (jumping)
//   if (upPressed && player.onGround) {
//     player.dy = player.jumpSpeed;
//     player.onGround = false;
//   }

//   // Move down from the platform
//   if (downPressed && player.y + player.h < cnv.height) {
//     player.y += player.dx;
//   }

//   // Update player's vertical position
//   player.dy += player.a; // Acceleration
//   player.y += player.dy; // Move

//   // Land on the ground
//   if (player.y + player.h > cnv.height) {
//     player.y = cnv.height - player.h;
//     player.dy = 0;
//     player.onGround = true;
//   }

//   // Check for platform collision
//   if (
//     player.y + player.h > platform.y &&
//     player.y < platform.y + platform.h &&
//     player.x + player.w > platform.x &&
//     player.x < platform.x + platform.w
//   ) {
//     player.y = platform.y - player.h;
//     player.dy = 0;
//     player.onGround = true;
//   }

//   // Drawing
//   // Background
//   ctx.fillStyle = "white";
//   ctx.fillRect(0, 0, cnv.width, cnv.height);

//   // Draw platform
//   ctx.fillStyle = platform.color;
//   ctx.fillRect(platform.x, platform.y, platform.w, platform.h);

//   // Draw player
//   ctx.fillStyle = player.color;
//   ctx.fillRect(player.x, player.y, player.w, player.h);

//   // Animation loop
//   requestAnimationFrame(draw);
// }

// // Event stuff
// document.addEventListener("keydown", keyDownHandler);
// document.addEventListener("keyup", keyUpHandler);

// function keyDownHandler(e) {
//   if (e.code === "ArrowLeft") {
//     leftPressed = true;
//   } else if (e.code === "ArrowRight") {
//     rightPressed = true;
//   } else if (e.code === "ArrowUp") {
//     upPressed = true;
//   } else if (e.code === "ArrowDown") {
//     downPressed = true;
//   }
// }

// function keyUpHandler(e) {
//   if (e.code === "ArrowLeft") {
//     leftPressed = false;
//   } else if (e.code === "ArrowRight") {
//     rightPressed = false;
//   } else if (e.code === "ArrowUp") {
//     upPressed = false;
//   } else if (e.code === "ArrowDown") {
//     downPressed = false;
//   }
// }

//cnv setup
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

//global variables
let player = {
  x: 400,
  y: 400,
  w: 25,
  h: 25,
  dx: 5,
  dy: 0,
  a: 1, // Acc
  jumpSpeed: -15,
  onGround: false,
  color: "blue",
};

let platform = {
  x: 150,
  y: 300,
  w: 300,
  h: 20,
  color: "grey",
};

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

//draw func
window.addEventListener("load", draw);

function draw() {
  //logic
  // Horizontal move
  if (rightPressed) {
    player.x += player.dx;
  } else if (leftPressed) {
    player.x -= player.dx;
  }

  // Vertical move (jumping)
  if (upPressed && player.onGround) {
    player.dy = player.jumpSpeed;
    player.onGround = false;
  }

  // Move down from the platform
  if (downPressed && player.y + player.h < cnv.height) {
    player.y += player.dx;
  }

  // Check for platform collision
  if (
    player.y + player.h > platform.y &&
    player.y < platform.y + platform.h &&
    player.x + player.w > platform.x &&
    player.x < platform.x + platform.w
  ) {
    // Teleport to the top of the platform
    player.y = platform.y - player.h;
    player.dy = 0;
    player.onGround = true;
  }

  // Update player's vertical position
  player.dy += player.a; // Acceleration
  player.y += player.dy; // Move

  // Land on the ground
  if (player.y + player.h > cnv.height) {
    player.y = cnv.height - player.h;
    player.dy = 0;
    player.onGround = true;
  }

  // Drawing
  // Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw platform
  ctx.fillStyle = platform.color;
  ctx.fillRect(platform.x, platform.y, platform.w, platform.h);

  // Draw player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);

  // Animation loop
  requestAnimationFrame(draw);
}

// Event stuff
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
  if (e.code === "ArrowLeft") {
    leftPressed = true;
  } else if (e.code === "ArrowRight") {
    rightPressed = true;
  } else if (e.code === "ArrowUp") {
    upPressed = true;
  } else if (e.code === "ArrowDown") {
    downPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.code === "ArrowLeft") {
    leftPressed = false;
  } else if (e.code === "ArrowRight") {
    rightPressed = false;
  } else if (e.code === "ArrowUp") {
    upPressed = false;
  } else if (e.code === "ArrowDown") {
    downPressed = false;
  }
}
