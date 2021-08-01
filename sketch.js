var Runner,run
var path,pathes
var leftground,rightground
function preload(){
  //pre-load images
  run=loadAnimation("Runner-1.png","Runner-2.png")
path=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here

pathes=createSprite(200,200)
pathes.addImage(path)
pathes.velocityY=2
leftground=createSprite(15,200,20,400)
rightground=createSprite(385,200,20,400)
Runner=createSprite(200,200,)
Runner.addAnimation("running",run)
Runner.scale=0.1
leftground.visible=false
rightground.visible=false
}

function draw() {
  background("black");
  if (pathes.y > 450){
    pathes.y = 200;
  }
  Runner.x=mouseX
  Runner.collide(leftground)
  Runner.collide(rightground)
  
drawSprites();
}
