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

// Ball state (its "memory")
let x = window.innerWidth / 2;  // start in the middle
let y = window.innerHeight / 2;        // start height
let radius = 30;
let leftPressed = false;
let rightPressed = false;
let niggaPressed = false;
let speedP = 0.01;
let p = 0;
let speedX = 5; // horizontal speed

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


function draw() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * p);
  ctx.fill();
}

function update() {
  p = p + speedP;
  if (p > Math.PI * 2) {
    p = 0;
  }
  if (leftPressed) {
    x -= speedX;
  }
  if (rightPressed) {
    x += speedX;
  }
  if (niggaPressed) {
    alert("Nigga!");
   niggaPressed = false
  }
  // Keep ball within bounds
  if (x - radius < 0) x = radius;
  if (x + radius > window.innerWidth) x = window.innerWidth - radius;
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  x = window.innerWidth / 2;
  y = window.innerHeight / 2;
}

window.addEventListener('resize', resizeCanvas);

loop();