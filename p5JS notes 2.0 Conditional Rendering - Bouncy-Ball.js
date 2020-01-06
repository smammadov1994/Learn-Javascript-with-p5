// this topic covers conditional rendering to create a sphere that will jump back and forth from the edges of the canvas.//

var positionX = 0; // this var outlines the initial position of the sphere on the x axis that is set to 0;
var speed = 10; // this var will determine the speed at which it moves along the x axis and the direction depending on the condition.//

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(positionX, positionX / 6, 0);
  fill(100, positionX, positionX / 3);
  noStroke();
  ellipse(positionX, 100, 50, 50);
  //below is the conditional rendering. We are telling it to move positively to the right in the x direction because the position x of the sphere is set to the var positionX which increments by 10 as long as positionX is less than the width of the screen.//
  if (positionX > width) {
    speed = -10;
  }
  //If positionX is greater than then width of the screen then the speed value is set to -10 which tells the sphere to move in the left direction. If the sphere goes too far left beyond the value of x=0 then we have an else if statement that reassigns the speed var back to positive 10 and the ball begins to move right once more.//
  else if (positionX < 0) {
    speed = 10;
  }
  positionX += speed;
}
