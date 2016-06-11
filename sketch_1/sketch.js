function setup() {
	createCanvas(500, 500);
	background(0);
}

function draw() {
	fill(255);
	//noStroke(); //removes the stroke and creates an erasing effect
	ellipse(mouseX, mouseY, 20, 20);
	// quad(mouseX-15, mouseY-10, mouseX+10, mouseY-10,  // draw a square or quadrilateral instead
 //         mouseX+15, mouseY+10, mouseX-10, mouseY+10);
  // triangle(mouseX-15, mouseY-10, mouseX+10, mouseY-10, // or a triangle
  //        mouseX+15, mouseY+10);
}

function keyPressed() {
	print(keyCode);
	if (keyCode === 67) { //c
		background(0); //clear the drawing
	}
	else if (keyCode === 68) { //d
		background(127);
	}
}