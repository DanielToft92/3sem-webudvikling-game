const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'billeder/stordiamant.png';

let xPos = Math.random() * canvas.width;
let yPos = 0;
let fallSpeed = 2;
let increaseRate = 1;
let lastUpdateTime = Date.now();

const paddleWidth = 100;
const paddleHeight = 20;
let paddleX = (canvas.width - paddleWidth) / 2;

canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    paddleX = mouseX - paddleWidth / 2;
    if (paddleX < 0) paddleX = 0;
    if (paddleX + paddleWidth > canvas.width) paddleX = canvas.width - paddleWidth;
});

function draw() {
    ctx.fillStyle = '#74CFF6';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (img.complete) {
        ctx.drawImage(img, xPos - 25, yPos - 25, 50, 50);
    }

    ctx.fillStyle = '#000';
    ctx.fillRect(paddleX, canvas.height - paddleHeight - 10, paddleWidth, paddleHeight);

    yPos += fallSpeed;

    if (
        yPos + 25 >= canvas.height - paddleHeight - 10 &&
        xPos >= paddleX &&
        xPos <= paddleX + paddleWidth
    ) {
        yPos = 0;
        xPos = Math.random() * canvas.width;/ Randomize X position
    }

    if (yPos > canvas.height) {
        yPos = 0;
        xPos = Math.random() * canvas.width;
    }


    if (Date.now() - lastUpdateTime >= 10000) {
        fallSpeed += increaseRate;
        lastUpdateTime = Date.now();
    }

    requestAnimationFrame(draw);
}

draw();
