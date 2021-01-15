const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var constraint1,constraint2,constraint3,constraint4,constraint5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
  bobdiameter = 40;
  startbobpositionX = width/2;
  startbobpositionY = height/4 + 500;
  bob1 = new bob(startbobpositionX - bobdiameter * 2, startbobpositionY,bobdiameter);
  bob1 = new bob(startbobpositionX - bobdiameter, startbobpositionY,bobdiameter);
  bob1 = new bob(startbobpositionX, startbobpositionY,bobdiameter);
  bob1 = new bob(startbobpositionX + bobdiameter, startbobpositionY,bobdiameter);
  bob1 = new bob(startbobpositionX + bobdiameter * 2, startbobpositionY,bobdiameter);
  roof = new Roof(width/2,height/4,width/7,20);
  constraint1 = {
    bodyA:bob1.bodyA,
    bodyB:roof.body,
    pointB:{x:-bobdiameter * 2,y:0}
  }
  constraint2 = {
    bodyA:bob1.bodyA,
    bodyB:roof.body,
    pointB:{x:-bobdiameter,y:0}
  }
  constraint3 = {
    bodyA:bob1.bodyA,
    bodyB:roof.body,
    pointB:{x,y:0}
  }
  constraint1 = {
    bodyA:bob1.bodyA,
    bodyB:roof.body,
    pointB:{x:+bobdiameter,y:0}
  }
  constraint1 = {
    bodyA:bob1.bodyA,
    bodyB:roof.body,
    pointB:{x:+bobdiameter * 2,y:0}
  }
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  constraint1.display();
  constraint2.display();
  constraint3.display();
  constraint4.display();
  constraint5.display();
  roof.display();
}



