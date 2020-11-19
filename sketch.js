var box1, box2

function setup() {
  createCanvas(800,400);
  box1=createSprite(200,100,100,50)
  box2=createSprite(600,100,75,75)
  box1.shapeColor= "green";
  box2.shapeColor= "green";
  box1.debug=true;
  box2.debug=true;
}

function draw() {
  background(0,0,0); 
  text(box1.x,100,300);
  text(box2.x,200,300)
  drawSprites();
  box2.y=mouseY;
  box2.x=mouseX;
  if(box2.x-box1.x < box1.width/2 + box2.width/2
    && box1.x-box2.x < box1.width/2 + box2.width/2
    &&box2.y-box1.y<box1.height/2 + box2.height/2
    &&box1.y-box2.y<box1.height/2 + box2.height/2){
    box1.shapeColor = "red";
    box2.shapeColor = "red";
  }
  else{
    box1.shapeColor= "green";
    box2.shapeColor= "green";
  }

}