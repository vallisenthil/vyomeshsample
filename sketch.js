var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect))
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red"
  }
  else{
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue"
  }

 
  drawSprites();
}

function isTouching(p1,p2)
{
  if (p1.x - p2.x < p1.width/2 + p2.width/2
    && p2.x - p1.x < p1.width/2 + p2.width/2
    && p1.y - p2.y < p1.height/2 + p2.height/2
    && p2.y - p1.y < p1.height/2 + p2.height/2)
     {
  return true;
}
else 
{

  return false;
}
}