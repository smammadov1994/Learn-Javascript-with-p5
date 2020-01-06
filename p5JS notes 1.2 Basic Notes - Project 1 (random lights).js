var spot = {
  x: 100,
  y: 100
};
var color = {
  r: 250,
  g: 0,
  b: 0
};

// above are the javascript objects that we created for the color and the spot of each circle//.
function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  spot.x = random(0, width);
  spot.y = random(0, height);
  color.r = random(0, 255);
  color.g = random(0, 255);
  color.b = random(0, 255);

  // above we set each variable to a random value//
  fill(color.r, color.g, color.b, 100);
  noStroke();
  ellipse(spot.x, spot.y, 10, 10);
}
