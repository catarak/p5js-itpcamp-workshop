function setup() { 
	createCanvas(500, 500);
} 

function draw() { 
	background(0);

  //comment and uncomment each of these sections

  // // draw one circle
  // fill(0, 0, 255);
  // ellipse(20, 20, 40, 40);

  // //draw a bunch of circles, the hard way
  // fill(0, 0, 255);
  // ellipse(0, 20, 40, 40);
  // fill(25, 0, 255);
  // ellipse(50, 20, 40, 40);
  // fill(51, 0, 255);
  // ellipse(100, 20, 40, 40);
  // fill(76, 0, 255);
  // ellipse(150, 20, 40, 40);
  // fill(102, 0, 255);
  // ellipse(200, 20, 40, 40);
  // //... and so on

  // //draw a row of circles, the easy way
  for (var x = 0; x <= width; x = x + 50) {
    // // creates a row of gradient circles
    // fill(100, x, 255);
    // ellipse(x, 20, 40, 40);

    // // we need to think about ranges for numbers! 
    // // a RGB color value is from 0-255
    // // use map to change the range of a variable!
    // var xNorm = map(x, 0, width, 0, 255);
    // fill(100, xNorm, 255);
    // ellipse(x, 20, 40, 40);

    // // You can nest for loops for multiple dimensions...
       for (var y = 0; y <= height; y+=50) {
         var xNorm = map(x, 0, width, 0, 255);
         var yNorm = map(y, 0, height, 0, 255);
          fill(yNorm, xNorm, 127);
         ellipse(x, y, 40, 40);
       }

  }
}