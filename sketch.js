
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var rect1,rect2,rect3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,650,800,10);
	paper = new Paper(100,180,20);
	//Create the Bodies Here.
	rect1 = new dustbin(600,635,200,20);
	rect2 = new dustbin(490,595,20,100);
	rect3 = new dustbin(710,595,20,100);

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  ground.display();
  paper.display();
  rect1.display();
  rect2.display();
  rect3.display();
  drawSprites();
 
}
function keyPressed(){
	console.log("hiiii");
		if(keyCode === DOWN_ARROW){		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-70}) }
	}


