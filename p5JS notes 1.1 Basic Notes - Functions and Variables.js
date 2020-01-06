var col = 0; //setting the var of color to zero and then reassigning a value//
var rand = 0;
var sphereCol = 0;
function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  col = mouseX / 6; //here is where we reassign a value to the col variable by attributing it to the position of the mouse on the x axis on the canvas divided by 6 to make it smoother.//
  background(0, 100, col);
  noStroke();
  sphereCol = map(mouseX, 0, 600, 0, 255); // since the canvas goes from 0-600 on the x axis then we can use the map method to take that range (0-600) and map it to the new range of (0-255) for the color of the sphere by assigning it to the sphereCol var and then using that variable inside the fill function.//
  fill(0, sphereCol, 0);
  ellipse(mouseX, 300, 50, 50);
  rand = random(0, 100); // this function chooses a random number from 0-100 and then assigns it to the variable rand which was initialized at 0 from the beginning. This function tends to generate float numbers so if you strictly need an integer make sure you conver it to one.//
  fill(0, 0, rand);
  rect(300, mouseY, 50, 50);
}
