var box,shinchan;

var edges;


function setup() {
  createCanvas(700,700);
  box = createSprite(200,200,30,30);

  shinchan = createSprite(50,50,20,20);
 shinchan.shapeColor = "red"
shinchan.velocityY = 4
shinchan.velocityX = 2

 edges = createEdgeSprites()
}

function draw() 
{
   background(30);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }

   shinchan.bounceOff(edges)



  drawSprites();
}




