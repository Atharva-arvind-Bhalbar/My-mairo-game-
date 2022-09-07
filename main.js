function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
}

function draw() {
	game()
}

function setup()
{
	canvas = createCanvas(1240 , 336)
	canvas.parent('canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800 , 400);
	video.parent('game_console');
}

function gotPoses(results)
{
	console.log(results);
	noseX = results[0].poses.nose.x;
	nosey = results[0].poses.nose.y;
}

function game()
{
	
}







