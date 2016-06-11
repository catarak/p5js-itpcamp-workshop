function setup() {
	createCanvas(720, 720);
	noFill();
	background(255);
	strokeWeight(2);
	stroke(0, 25);
}

function draw() {
	// // this is how translate works
	// push();
	// 	translate(width/2, height/2);
	// 	fill(255, 0, 0);
	// 	ellipse(0, 0, 40, 40);
	// 	translate(width/4, height/4);
	// 	fill(0, 255, 0);
	// 	ellipse(0, 0, 40, 40);
	// pop();
	// translate(width/4, height/4);
	// fill(0, 0, 255);
	// ellipse(0, 0, 40, 40);

	// // creating a shape out of vertices
	// translate(width/2, height/2);
	// beginShape();
	// vertex(20, 20);
	// vertex(0, 40);
	// vertex(-20, 20);
	// vertex(-40, 0);
	// vertex(-20, -20);
	// vertex(0, -40);
	// vertex(20, -20);
	// vertex(40, 0);
	// vertex(20, 20);
	// endShape();

	// //draw an n-sided polygon... y'all remember how?
	// //think back, way back, to high school geometry
	// background(255);
	// translate(width/2, height/2);
	// var numSides = int(map(mouseY, 0, height, 2, 10));
	// var radius = width/4;
	// var anglePerSide = TWO_PI/numSides;
	// beginShape();
	// 	for (var sideIndex = 0; sideIndex <= numSides; sideIndex += 1) {
	// 		var x = cos(anglePerSide*sideIndex) * radius;
	// 		var y = sin(anglePerSide*sideIndex) * radius;
	// 		vertex(x, y);
	// 	}
	// endShape();

	// //map radius to mouseX
	// background(255);
	// translate(width/2, height/2);
	// var numSides = int(map(mouseY, 0, height, 2, 10));
	// var radius = mouseX-width/2;
	// var anglePerSide = TWO_PI/numSides;
	// beginShape();
	// 	for (var sideIndex = 0; sideIndex <= numSides; sideIndex += 1) {
	// 		var x = cos(anglePerSide*sideIndex) * radius;
	// 		var y = sin(anglePerSide*sideIndex) * radius;
	// 		vertex(x, y);
	// 	}
	// endShape();

	// //don't clear the background!, only draw when mouse pressed
	// if (mouseIsPressed) {
	// 	translate(width/2, height/2);
	// 	var numSides = int(map(mouseY, 0, height, 2, 10));
	// 	var radius = mouseX-width/2;
	// 	var anglePerSide = TWO_PI/numSides;
	// 	beginShape();
	// 		for (var sideIndex = 0; sideIndex <= numSides; sideIndex += 1) {
	// 			var x = cos(anglePerSide*sideIndex) * radius;
	// 			var y = sin(anglePerSide*sideIndex) * radius;
	// 			vertex(x, y);
	// 		}
	// 	endShape();
	// }


}

function keyPressed() {
	if (keyCode === 67) { // c
		background(255);
	}
}