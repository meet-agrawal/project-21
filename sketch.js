var fixSprite1, fixSprite2, fixSprite3,fixSprite4
var movingSprites
var music

function preload(){
    music=loadSound("music.mp3")
}
 
function setup(){
createCanvas(800,600)

movingSprites=createSprite(random(10,750),300,20,20)
movingSprites.shapeColor="white"
movingSprites.velocityX=3;
movingSprites.velocityY=3;


fixSprite1=createSprite(100,590,180,20)
fixSprite1.shapeColor="red"

fixSprite2=createSprite(300,590,180,20)
fixSprite2.shapeColor="green"

fixSprite3=createSprite(500,590,180,20)
fixSprite3.shapeColor="blue"

fixSprite4=createSprite(700,590,180,20)
fixSprite4.shapeColor="yellow"
}
    
function draw() {
background(rgb(10,10,10))

if(movingSprites.x<0){
    music.stop()
    movingSprites.velocityX=3
}else if(movingSprites.x>800){
    music.stop()
    movingSprites.velocityX=-3

}
//ball.isTouching(wall)
if(movingSprites.isTouching(fixSprite4)){
    music.play()
    movingSprites.shapeColor="yellow"
  movingSprites.bounceoff(fixSprite4)

}

if(movingSprites.isTouching(fixSprite3)){
    music.play()
    movingSprites.shapeColor="blue"
    movingSprites.bounceoff(fixSprite3)
}

if(movingSprites.isTouching(fixSprite2)){
    music.play()
    movingSprites.shapeColor="green"
   movingSprites.bounceoff(fixSprite2)
}

if(movingSprites.isTouching(fixSprite1)){
    music.play()
    movingSprites.shapeColor="red"
    movingSprites.bounceoff(fixSprite1)

}
if(movingSprites.y<0){
music.stop()
movingsprites.velocityY=3
}

drawSprites()
}
  


































