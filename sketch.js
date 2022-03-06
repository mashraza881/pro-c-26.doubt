var dish;

function Preload(){

dish=loadAnimation("images/dish.png")

}

function setup() {

  createCanvas(400,400)
  dish= createSprite(200,200,200,200);
  dish.addAnimation("dishimg",dishAnimation)
}
 

function draw(){
 
  background('red');

  drawSprites();
}

