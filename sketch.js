var bullet, wall;
var speed, weight, thickness;
function setup() {
  createCanvas(1600,400);
 
  speed = random(30,52);
  weight = random(223,321);
  thickness = random(22,83);
  
  bullet = createSprite(40, 200, 35, 9.5);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,200);  
  wall.shapeColor = color(80,80,80);
}


function draw() {
  background(0);  
  bullet.velocityX = speed;

  if (hasCollided(wall,bullet)){
    var damage = 0.5*speed*weight*speed/(thickness*thickness*thickness);
    bullet.velocityX = 0;
    if(damage<10){
      wall.shapeColor = "green";
    }
    if(damage>10){
      wall.shapeColor = "red";
    }

  }


  drawSprites();
}



function hasCollided(wall,bullet){
  var bulletRightEdge = bullet.x + bullet.width;
  var wallLeftEdge = wall.x;
  
  if(bulletRightEdge >= wallLeftEdge){

      return true;

  }
  else{
    return false
  }
  
}