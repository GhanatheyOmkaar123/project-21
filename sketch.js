var fixedRect,movingRect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(200, 200, 50, 80);
 movingRect = createSprite(400,200,80,30);
 fixedRect.shapeColor = "green";
 movingRect.shapeColor = "green";
 rect1 = createSprite(600,600,20,20);
 rect1.velocityX = -5;
 rect2 = createSprite(200,600,20,20);
 rect2.velocityX = 5;
}

function draw() {
  background(0); 
movingRect.y = World.mouseY;
movingRect.x = World.mouseX;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="yellow";
  }else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object2.width/2 && object2.x-object1.x<object2.width/2+object1.width/2
  &&object1.y-object2.y<object2.height/2+object1.height/2 && object2.y-object1.y<object2.height/2+object1.height/2){
return true;
  }else{
return false;
  }

}
