const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Set canvas to full screen with proper pixel ratio
const dpr = window.devicePixelRatio || 1;
canvas.width = window.innerWidth * dpr;
canvas.height = window.innerHeight * dpr;
canvas.style.width = window.innerWidth + 'px';
canvas.style.height = window.innerHeight + 'px';
ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

// Image state
let imageX = 50;  // start position
let imageY = 50;
let leftPressed = false;
let rightPressed = false;
let niggaPressed = false;
let speedX = 5; // horizontal speed

// Get the image element
const movableImage = document.getElementById('movableImage');

// Button event listeners
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const niggaButton = document.getElementById('niggaButton');

leftButton.addEventListener('pointerdown', (e) => { e.preventDefault(); leftPressed = true; });
leftButton.addEventListener('pointerup', () => leftPressed = false);
leftButton.addEventListener('pointerleave', () => leftPressed = false);

rightButton.addEventListener('pointerdown', (e) => { e.preventDefault(); rightPressed = true; });
rightButton.addEventListener('pointerup', () => rightPressed = false);
rightButton.addEventListener('pointerleave', () => rightPressed = false);

niggaButton.addEventListener('pointerdown', (e) => { e.preventDefault(); niggaPressed = true; });
niggaButton.addEventListener('pointerup', () => niggaPressed = false);
niggaButton.addEventListener('pointerleave', () => niggaPressed = false);


function update() {
  if (leftPressed) {
    imageX -= speedX;
  }
  if (rightPressed) {
    imageX += speedX;
  }
  if (niggaPressed) {
    alert("Nigga!");
   niggaPressed = false
  }
  // Keep image within bounds
  const imgWidth = movableImage.offsetWidth;
  if (imageX < 0) imageX = 0;
  if (imageX + imgWidth > window.innerWidth) imageX = window.innerWidth - imgWidth;

  // Update image position
  movableImage.style.left = imageX + 'px';
  movableImage.style.top = imageY + 'px';
}

function loop() {
  update();
  requestAnimationFrame(loop);
}

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  imageX = 50;
  imageY = 50;
  movableImage.style.left = imageX + 'px';
  movableImage.style.top = imageY + 'px';
}

window.addEventListener('resize', resizeCanvas);

loop();