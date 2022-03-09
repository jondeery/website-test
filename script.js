var images = [];
var imageIndex = 0;
var position = createVector(0, 0);
var velocity = p5.Vector.fromAngle(45);
velocity.mult(5);


function preload() {
  for (var i = 1; i < 8; i++) {
    var image = loadImage('assets/deery' + i + '.svg');
    images.push(image);
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}


function draw() {
  background('#111');
  var image = images[imageIndex];
  var hasCollision = checkBoundaryCollision(image);
  if (hasCollision) {
    imageIndex++;
    if (imageIndex + 1 > images.length) {
      imageIndex = 0;
    }
    image = images[imageIndex];
  }
  position.add(velocity);
  image(image, position.x, position.y);
}


function checkBoundaryCollision(image) {
  var hasCollision = false;
  // left or right collision
  if (position.x < 0 || position.x + image.width > width) {
    velocity.x *= -1;
    hasCollision = true;
  }
  // top or bottom collision
  if (position.y < 0 || position.y + image.height > height) {
    velocity.y *= -1;
    hasCollision = true;
  }
  return hasCollision;
}