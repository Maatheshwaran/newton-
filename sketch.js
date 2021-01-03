
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var holder;
var ball1,ball2,ball3,ball4,ball5;
var chainDiameter = 60;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	holder = new Holder(400,100,600,30)
	ball1 = new Ball(200,400);
	ball2 = new Ball (300,400);
	ball3 = new Ball(400,400);
	ball4 = new Ball(500,400);
	ball5 = new Ball(600,400);

	chain1 = new Chain(holder.body,ball1.body,-chainDiameter*3.5,0);
	chain2 = new Chain(holder.body,ball2.body,-chainDiameter*2.0,0);
	chain3 = new Chain(holder.body,ball3.body,0,0);
	chain4 = new Chain(holder.body,ball4.body,chainDiameter*2.0,0);
	chain5 = new Chain(holder.body,ball5.body,chainDiameter*3.5,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  holder.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  //drawSprites();
 
}
function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-12,y:-13});
	}
}


