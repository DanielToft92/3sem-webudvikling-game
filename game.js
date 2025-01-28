const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'billeder/stordiamant.png';

let xPos = Math.random() * canvas.width;
let yPos = 0;
let fallSpeed = 2;
let increaseRate = 1;
let lastUpdateTime = Date.now();

// Paddle properties
const paddleWidth = 100;
const paddleHeight = 20;
let paddleX = (canvas.width - paddleWidth) / 2;

// Track mouse movement for paddle
canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    paddleX = mouseX - paddleWidth / 2; // Center the paddle on the mouse
    // Keep the paddle within the canvas bounds
    if (paddleX < 0) paddleX = 0;
    if (paddleX + paddleWidth > canvas.width) paddleX = canvas.width - paddleWidth;
});

function draw() {
    ctx.fillStyle = '#74CFF6';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the diamond
    if (img.complete) {
        ctx.drawImage(img, xPos - 25, yPos - 25, 50, 50);
    }

    // Draw the paddle
    ctx.fillStyle = '#000';
    ctx.fillRect(paddleX, canvas.height - paddleHeight - 10, paddleWidth, paddleHeight);

    // Update diamond position
    yPos += fallSpeed;

    // Check if the diamond hits the paddle
    if (
        yPos + 25 >= canvas.height - paddleHeight - 10 && // Diamond reaches paddle height
        xPos >= paddleX && // Diamond is within paddle's left edge
        xPos <= paddleX + paddleWidth // Diamond is within paddle's right edge
    ) {
        yPos = 0; // Reset diamond position
        xPos = Math.random() * canvas.width; // Randomize X position
    }

    // Reset diamond if it falls past the paddle
    if (yPos > canvas.height) {
        yPos = 0;
        xPos = Math.random() * canvas.width;
    }

    // Increase fall speed every 10 seconds
    if (Date.now() - lastUpdateTime >= 10000) {
        fallSpeed += increaseRate;
        lastUpdateTime = Date.now();
    }

    requestAnimationFrame(draw);
}

draw();
