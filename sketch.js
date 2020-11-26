var r1,r2;

function setup(){
  createCanvas(1200,800);
  r1 = createSprite(200,200,50,80);
  r2 = createSprite(400,200,80,30);
  r1.shapeColor = "purple";
  r2.shapeColor = "purple";
}

function draw(){
  background("cyan");
  console.log(r1.x-r2.x);
  r1.x = World.mouseX;
  r1.y = World.mouseY;
  if(r1.x - r2.x < r2.width/2 + r1.width/2 ){
    r1.shapeColor = "yellow";
    r2.shapeColor = "yellow";
  }
  else{
    r1.shapeColor = "purple";
    r2.shapeColor = "purple";
  }
  
   drawSprites();
}