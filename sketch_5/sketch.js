//future upgrades -- collision detection!

var circles = new Array(30);
var CIRCLE_RADIUS = 10;

function setup() {
	createCanvas(750, 750);
	background(0);
	noStroke();

	createCircles();
}

function draw() {
	background(0);
	drawCircles();
}

function createCircles() {
	for (var index = 0; index < circles.length; index = index + 1) {
		circles[index] = {
			position: {
				x: random(CIRCLE_RADIUS, width - CIRCLE_RADIUS),
				y: random(CIRCLE_RADIUS, height - CIRCLE_RADIUS)
			},
			speed: {
				x: random(2, 10),
				y: random(2, 10)
			}
		}
	}
}

function drawCircles() {
	for (var index = 0; index < circles.length; index = index + 1) {
		circles[index].position.x += circles[index].speed.x;
		circles[index].position.y += circles[index].speed.y;

		if (circles[index].position.x - CIRCLE_RADIUS <= 0 
				||  circles[index].position.x + CIRCLE_RADIUS > width ) {
			circles[index].speed.x *= -1;
		}

		if (circles[index].position.y - CIRCLE_RADIUS <= 0 
				||  circles[index].position.y + CIRCLE_RADIUS > height ) {
			circles[index].speed.y *= -1;
		}

		ellipse(circles[index].position.x, circles[index].position.y, 
						CIRCLE_RADIUS, CIRCLE_RADIUS);
	}
}