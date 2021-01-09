var Engine = Matter.Engine
var World = Matter.World
var Bodies = Matter.Bodies
var Constraint = Matter.Constraint 

var dog1
function preload()
{

}
function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  dog1 = new Dog(350,300,50,50)
}


function draw() { 
  Engine.update(engine)
  background(0) 
  Engine.update(engine);
  dog1.display();
  drawSprites();
  

}



