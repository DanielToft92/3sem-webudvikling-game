const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function drawBackground() {
    ctx.fillStyle = '#74CFF6';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
drawBackground();


