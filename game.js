let xPos = 400, yPos = 0, fallSpeed = 4, increaseRate = 2;
let lastUpdateTime = Date.now();

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function draw() {
    ctx.fillStyle = 'rgb(220, 220, 220)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(xPos, yPos, 50, 0, Math.PI * 2);
    ctx.fill();

    yPos += fallSpeed;
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
