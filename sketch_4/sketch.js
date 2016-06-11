var position = {
	x: 20,
	y: 20
};

var speed;

function setup() {
	createCanvas(750, 750);
	background(0);
	noStroke();
	fill(255);

	//fixed speed
	// speed = {
	// 	x: 4,
	// 	y: 3
	// };

	//random speed;
	speed = {
		x: random(2,10),
		y: random(2,10)
	};
}

function draw() {
	background(0);
	ellipse(position.x, position.y, 40, 40);
	position.x = position.x + speed.x;
	position.y = position.y + speed.y;

	if (position.x <= 20 || position.x > (width - 20)) {
		speed.x = -speed.x;
	}

	if (position.y <= 20 || position.y > (height - 20)) {
		speed.y = -speed.y;
	}

}