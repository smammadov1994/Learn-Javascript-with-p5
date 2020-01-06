var on = false;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  while (on) {
    ellipse(100, 100, 20, 20);
    background(0, 255, 0);
  }
}
function mousePressed() {
  on = true;
}
