// this function initializes the canvas and is only ran one time//

function setup() {
  createCanvas(400, 300);
  print("setup function!");
}

//this function is to draw things onto the canvas. However, this function executes over and over again. Meaning that when it goes through each item being rendered and reaches the end, it goes back to the beginning and repeats the process forever//

var moveX = 0;
var moveY = 0;
var r = 0;
var g = 0;
var b = 0;

function draw() {
  r = r + 0.2; // these values will change the background because it will add a value to the rgb schema each time draw is rendered.//
  g = g + 0.4;
  b = b + 0.3;
  background(r, g, b);
  stroke(0); //this is the outline//
  rectMode(CENTER); //centers the square
  noStroke(); //no stroke removes the outline from the object. this is because if you set the stroke to 0 it still gives a black background//
  fill(0, 100, b); //this determines the color of the object. Remember that it uses RGB so (_ , _ , _) the max for each color is 255 and the lowest is 0//
  moveX = moveX + 1;
  moveY = moveY + 1;
  rect(moveX, moveY, 20, 20); // mouseX and mouseY will tell the object to follow the location of your mouse.//
}
