xPos = 400;
yPos = 0;

function setup(){
    createCanvas(800, 800);
}

function draw() {
    background(220);
    noStroke();
    fill(0, 0, 255);
    circle(xPos, yPos += 5, 100);

    if (yPos > height){
        yPos = 0;
        xPos = random(width);
    }

    if (dist(xPos, yPos, mouseX, 700) <50){
        yPos = 0;
    }
    rectMode(CENTER);
    rect(mouseX, 700, 200, 50);

}