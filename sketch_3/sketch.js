var position = 20;
var speed = 3; // 1 pixel/frame

function setup() {
	createCanvas(750, 750);
	background(0);
	noStroke();
	fill(255);
}

function draw() {
	background(0);
	ellipse(position, 100, 40, 40);
	position = position + speed;

	//keep circle on screen
	// if (position > (width-20) || position < 20) {
	// 	speed = -speed;
	// }
}

//keep circle from going off the edge
//animate x and y

//animate with random walk