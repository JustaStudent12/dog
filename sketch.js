var dog,food,hapDog,foodS,dogI;
var database;

function preload()
{
  hapDog=loadImage("images/dogImg1.png");
  
  dogI=loadImage("images/dogImg.png")
  
}

function setup() {
 
  database=firebase.database();

  createCanvas(500,500);

  createCanvas(500,500);
  dog = createSprite(250,400,10,10);
  dog.addImage(dogI)

  food=database.ref('food');
  food.on("value",readStock);
}


function draw() {  
   background(46, 139, 87);

   if(keyDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(hapDog);
}
  drawSprites();
  textSize(15);
  fill(45,23,64);
  stroke("brown");
  text("Press the UP_ARROW key to feed WhitehatJr Code Milk!",55,10);
  dog.addImage(dogI);
}

function readStock(data){
  foodS=data.val(); 
}
function writeStock(x){
  if (x<=0) {
    x=0;
  } else {
    x=x-1;
  }
 database.ref("/").update({
   'food':x
  })
 
}

