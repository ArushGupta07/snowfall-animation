const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var bg;
var kid, kidImage;

function setup() {
  createCanvas(800,400);
   engine= Engine.create();
   world = engine.world;

  kid = new Boy(600,250,150,250);
  snow = new Snow(200, 50, 100,100);

}

function preload(){
   bg = loadImage("snow3.jpg");
   kidImag = loadImage("kid.png");
}

function draw() {
  background(bg);
  
  kid.display();
  snow.display();


  drawSprites();

}