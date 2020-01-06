var on = false;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  if (
    mouseX > 250 &&
    mouseX < 350 &&
    mouseY > 150 &&
    mouseY < 250 &&
    mouseIsPressed
  ) {
    fill(0, 100, 255);
    background(0, 255, 100);
  } // we are stating that the fill of the square and the background color should change only if the mouse pointer is within ALL of those conditional values and the left mouse button is clicked down/held.//
  rectMode(CENTER);
  rect(300, 200, 100, 100);
}
