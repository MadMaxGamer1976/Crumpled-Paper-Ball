
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var ball;

var ground;

var left,right;

function setup() {
	createCanvas(1600,700);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		restitution : 0.3,
		isStatic : false,
		friction : 0,
		density : 1.2
	};

	//Create the Bodies Here.

	ball = new Bodies.circle(250,250,15,ball_options);
	World.add(world,ball);

	ground = new Ground(width/2,670,width,20);

	left = new Ground(1100,600,20,120);

	right = new Ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background(0);

  ellipse(ball.position.x,ball.position.y,15);

  ground.display();

  left.display();
  right.display();
  
  Engine.update(engine);

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x : 0,y : 0},{x : 47,y : -47});
	}
}