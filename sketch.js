var PLAY=1
var END=0
var gameState=PLAY;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600, 600)

  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1

  ground=createSprite(400,315,900,10)
  ground.velocityX=-4;
  ground.x=ground.width/2
  console.log(ground.x)  
  
  
  score=0;
  
}


function draw() {

    background("white");
  
  score = score + Math.round(getFrameRate()/60);
  
  text("survival time "+ score,300,50)

      if (ground.x < 0){
      ground.x = ground.width/2;
    }
monkey.collide(ground);
  
      if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }

      monkey.velocityY = monkey.velocityY + 0.8
  
  if(obstacleGroup.isTouching(monkey)){
    
text(gameover,300,300)    
    
  }
  
  
  
  

  food(); 
  obstacle();
  
  
  drawSprites();
  
}

function food() {
  
  if (frameCount % 60 === 0){
   var banana = createSprite(600,165,10,40);
   banana.velocityX = -6
   
    //generate random obstacles
    var rand = Math.round(random(120,200));
    
    foodGroup.add(food)
  }
  
  
  
}


function obstacle() {
  
  if (frameCount % 100 === 0){
    
    var obstacle = createSprite(300,300,10,40);
     obstacle.velocityX=-3;
    obstacle.liftime=200

    obstacle.addImage=("obstacleImage")
    
    obstacleGroup.add(obstacle)
  }
  
  
  
}

