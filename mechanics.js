const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'billeder/stordiamant.png';

let score = 0;
let lastSpeedIncreaseTime = Date.now();

const diamondSizes = [
    { size: 30, points: 10, baseSpeed: 3 },
    { size: 50, points: 5, baseSpeed: 2 },
    { size: 70, points: 2, baseSpeed: 1.5 }
];

let diamonds = Array.from({ length: 3 }, () => createDiamond());

const paddle = {
    width: 100,
    height: 20,
    x: (canvas.width - 100) / 2,
};

canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    paddle.x = Math.min(Math.max(event.clientX - rect.left - paddle.width / 2, 0), canvas.width - paddle.width);
});

function createDiamond() {
    let randomType = diamondSizes[Math.floor(Math.random() * diamondSizes.length)];
    return {
        x: Math.random() * (canvas.width - randomType.size),
        y: 0,
        size: randomType.size,
        points: randomType.points,
        speed: randomType.baseSpeed,
        delayTime: Math.random() * 200
    };
}

function drawDiamonds() {
    diamonds.forEach(diamond => {
        if (diamond.delayTime <= 0 && img.complete) {
            ctx.drawImage(img, diamond.x, diamond.y, diamond.size, diamond.size);
        }
    });
}

function drawPaddle() {
    ctx.fillStyle = '#000';
    ctx.fillRect(paddle.x, canvas.height - paddle.height - 10, paddle.width, paddle.height);
}

function updateDiamonds() {
    let currentTime = Date.now();

    // Increase speed every 10 seconds
    if (currentTime - lastSpeedIncreaseTime >= 10000) {
        diamonds.forEach(diamond => diamond.speed += 2);
        lastSpeedIncreaseTime = currentTime;
    }

    diamonds.forEach(diamond => {
        if (diamond.delayTime > 0) {
            diamond.delayTime--;
            return;
        }

        diamond.y += diamond.speed;

        if (diamond.y + diamond.size >= canvas.height - paddle.height - 10 &&
            diamond.x + diamond.size >= paddle.x && diamond.x <= paddle.x + paddle.width) {
            score += diamond.points;
            resetDiamond(diamond);
        } else if (diamond.y > canvas.height) {
            resetDiamond(diamond);
        }
    });
}

function resetDiamond(diamond) {
    let newDiamond = createDiamond();
    newDiamond.speed = diamond.speed; //
    Object.assign(diamond, newDiamond);
}

function drawScore() {
    ctx.fillStyle = '#000';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 30);
}

function draw() {
    ctx.fillStyle = '#74CFF6';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawDiamonds();
    drawPaddle();
    drawScore();
    updateDiamonds();

    requestAnimationFrame(draw);
}

draw();
