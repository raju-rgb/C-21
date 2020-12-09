var fixedRect, movingRect;
var box1, box2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1 = createSprite(100,400,50,70);
  box1.shapeColor = "red";
  box1.debug = true;
  box2 = createSprite(1000,400,80,40);
  box2.shapeColor = "red";
  box2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  box1.velocityX = 6;
  box2.velocityX = -6;
}

function draw() {
  background(0);  
  bounceOff(box1,box2);
  bounceOff(movingRect,fixedRect);
  drawSprites();
}