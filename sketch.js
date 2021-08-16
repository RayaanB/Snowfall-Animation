const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var snowflakes;
var snow = []

function preload(){
  backgroundImg = loadImage("sprites/snow2.jpg");
}

function setup() {
  createCanvas(1300,600);
  
  snowflake = new Snow(300,100); 
  engine = Engine.create();
  world = engine.world;


}

function draw(){
  background(backgroundImg);  

  if(frameCount %60 === 0){
    snow.push(new Snow(random(100, 1200),random(0,100)))
  }

  for(var i = 0; i < snow.length; i++){
    snow[i].display();
  }
  snowflake.display();

  drawSprites();
  Engine.update(engine)
}