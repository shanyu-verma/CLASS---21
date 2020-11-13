
var fixedRect, movingRect;
var rect1,rect2;
var rect3,rect4;

var gameObj1,gameObj2,gameObj3,gameObj4;


function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor  = "green";
  movingRect = createSprite(200,200,80,30);
  movingRect.shapeColor = "blue";

  rect1 = createSprite(50,600,50,30);
  rect1.shapeColor = "white";
  rect1.velocityX = 3;

  rect2 = createSprite(750,600,50,30);
  rect2.shapeColor = "orange";
  rect2.velocityX = -3;

  rect3 = createSprite(400,300,50,30);
  rect3.shapeColor = "white";
  rect3.velocityY = 3;

  rect4 = createSprite(400,700,50,30);
  rect4.shapeColor = "orange";
  rect4.velocityY = -3;

  gameObj1 = createSprite(100, 100, 50, 50);
  gameObj1.shapeColor  = "green";

  gameObj2 = createSprite(200, 100, 50, 50);
  gameObj2.shapeColor  = "green";

  gameObj3 = createSprite(300, 100, 50, 50);
  gameObj3.shapeColor  = "green";

  gameObj4 = createSprite(400, 100, 50, 50);
  gameObj4.shapeColor  = "green";




}

function draw() {
  background(0);  

 movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  //console.log(movingRect.x - fixedRect.x);
 // console.log(fixedRect.width/2 + movingRect.width/2);

if (isTouching(movingRect,gameObj4)){

  gameObj4.shapeColor  = "red";
    movingRect.shapeColor = "yellow";
}
else if (isTouching(movingRect,gameObj1)){

  gameObj1.shapeColor  = "red";
    movingRect.shapeColor = "yellow";
}
else if (isTouching(movingRect,gameObj2)){

  gameObj2.shapeColor  = "red";
    movingRect.shapeColor = "yellow";
}
else if (isTouching(movingRect,gameObj3)){

  gameObj3.shapeColor  = "red";
    movingRect.shapeColor = "yellow";
}
else{
  gameObj1.shapeColor  = "green";
  gameObj2.shapeColor  = "green";
  gameObj3.shapeColor  = "green";
  gameObj4.shapeColor  = "green";
    movingRect.shapeColor = "blue";
}


bounceOff(rect1,rect2);
bounceOff(rect3,rect4);





  drawSprites();
}









