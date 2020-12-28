const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
 var canvas = createCanvas(400,400);

 engine = Engine.create();
 world =engine.world;

 object = Bodies.circle(200,200,20);
 World.add(world.object);

 console.log(object);
}

function draw() {
  background(0); 
  rectMode(CENTER); 
  rect (200,200,50,50);
}