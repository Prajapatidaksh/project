
var bg;
var sleep,brush,gym,est,bath,move;

function preload(){
  bg=loadImage("images/iss.png")
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym1.png","images/gym11.png","images/gym12.png");
  eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png");
  bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png");
  move = loadAnimation("images/move1.png","images/move1.png","images/move2.png","images/move2.png");
}

function setup(){
  createCanvas(600,500);
  astronaut= createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
}

function draw(){
  background(bg);




  edges=createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  } 

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;  
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 180;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;  
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.x = 400,astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;  
  }

  if(keyDown("M")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.x = 200,astronaut.y = 300;
    astronaut.velocityX =2;
    astronaut.velocityY =2;
  }




  drawSprites();
}