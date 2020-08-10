var thickness,wall;
var speed,weight,bullet;
var bulletRightEdge, wallLeftEdge;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(30,52);
  thickness = random(22,83);
 
   bullet = createSprite(20, 200, 90, 20);
   bullet.shapeColor = "black";
   bullet.velocityX = speed;
  // console.log(speed);
  wall = createSprite(1200,200,thickness,height/2);
   //wall.shapeColor = color(80,80,80);

}

function draw() {
  background  (255,255,255); 
  function hasCollided(){
    if (bullet.x-wall.x < wall.width/2+bullet.width/2 && wall.x-bullet.x < bullet.width/2+wall.width/2){
      bullet.velocityX = 0;
    }
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
    }
  
if (hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = 0.5 *weight *speed *speed/(thickness *thickness *thickness);
  if (damage>3){
    wall.shapeColor = color(255,0,0,);
  }

  if (damage<3){
    wall.shapeColor = color(0,255,0);
  }
drawSprites();
}
}
  //text(mouseX+","+mouseY, 20,20);
 // text(mouseX+","+mouseY, 20,20)