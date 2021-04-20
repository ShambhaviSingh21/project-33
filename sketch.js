const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var santa;
var engine, world;

function preload(){
  backgroundImg= loadImage("snow3.jpg");
  santa=loadAnimation("snowfall.jpg");
}

function setup() {
  createCanvas(800,400);
  santa=createSprite(250,650,150,150);
  santa.addAnimation("santa.jpg");
  santa.scale=0.5;

}

function draw() {
  background(backgroundImg); 
  // if(keyDown(LEFT_ARROW)){
  //   santa.addAnimation("santa.jpg");
  // }
  // else if(keyDown(RIGHT_ARROW)){
  //   santa.addAnimation("santa.jpg");
  // }
  // else if(keyDown(UP_ARROW)){
  //   santa.addAnimation("santa.jpg");
  //   santa.scale=santa.scale -0.005;
  // }
  // else if(keyDown(DOWN_ARROW)){
  //   santa.addAnimation("santa.jpg");
  //   santa.scale=santa.scale+0.005;
  // }

   santa.display(); 
  drawSprites();

  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move the santa!",40,40);
}     