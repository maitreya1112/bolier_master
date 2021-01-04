const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine,world,object,ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var object_properties={
    isStatic:true
  }
  object=Bodies.rectangle(200,390,400,10,object_properties);
  console.log(object);
  World.add(world,object);
  var ball_properties={
    restitution:0.8
  }
  ball=Bodies.circle(200,20,20,ball_properties);
  World.add(world,ball)
  //createSprite(200, 200, 50, 50);
}

function draw() {
  background(0);  
  Engine.update(engine);

  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}