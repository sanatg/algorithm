var cat
var mouse
function setup() {
  createCanvas(800,400);
  cat = createSprite(400, 200, 50, 50);
  mouses = createSprite(200,200,20,20)
}

function draw() {
  background(255,255,255);  
  mouses.x = mouseX
  mouses.y = mouseY
  if(mouses.x-cat.x<mouses.width/2+cat.width/2
    &&cat.x-mouses.x<mouses.width/2+cat.width/2
    &&mouses.y-cat.y<mouses.height/2+cat.height/2
    &&cat.y-mouses.y<mouses.height/2+cat.height/2){
mouses.shapeColor = "red"
  }
  drawSprites();
}