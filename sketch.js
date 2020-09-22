
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime
var  invisibleGround
var score



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 200);
  
   monkey = createSprite(50,165,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  invisibleGround = createSprite(200,200,400,10);
  invisibleGround.visible = false;
  
   
  
   FoodGroup = createGroup();
  
  
  obstacleGroup = createGroup();
 
  
}


function draw() {
background("lightgreen");
  survivaltime=Math.ceil(frameCount/frameRate(80==0))
   text("Survival Time: "+ survivaltime, 400,20);
  score=0
  text("score : "+ score,200,20);
  
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
       
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  
  spawnFood();
  
  
    spawnobstacle();
  monkey.collide(invisibleGround);
  
   if(monkey.isTouching(obstacleGroup)){
        //monkey.velocityY = -12;
     score=score-1
     
   }
     
      if(monkey.isTouching(FoodGroup)){
      score = score+1;
       
              
        
  
   }
  
  drawSprites();
  
}


function spawnFood() {
  if (frameCount % 80 === 0) {
    var Food = createSprite(600,120,40,10);
   Food.y = Math.round(random(120,50));
    Food.addImage(bananaImage);
    Food.scale = 0.1;
    Food.velocityX = -3;
    Food.lifetime = 200;
    FoodGroup.add(Food);
  }
  
}


function spawnobstacle() {
   if (frameCount % 80 === 0) {
    var obstacle = createSprite(600,180,40,10);
  
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
  
}





