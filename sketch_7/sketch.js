var img;

function preload() {
	img = loadImage('PRINCE.jpg');
}

function setup() {
	createCanvas(img.width, img.height+200);
	image(img, 0, 100);
}

function draw() {
	var x1 = floor(random(0, width));
	var y1 = -100; //relative to position of img
	var x2 = round(x1 + random(-7, 7));
	var y2 = round(random(-16, 16)); //relative to canvas

	var sliceWidth = floor(random(2, 4));
	var sliceHeight = height;
	copy(img, x1, y1, sliceWidth, sliceHeight, x2, y2, sliceWidth, sliceHeight);
}