//Create variables here
var dog, dogImg,happyDog,database,foodS,foodStock;
function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,300,50,50);
  dog.addImage(dogImg);
  dog.scale=0.3
  database=firebase.database();
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDog);
}

  drawSprites();
  //add styles here
 textSize(20);
 fill(220);
 stroke("black");
 text("Food Remaining:"+foodS,180,150);
 text("Note: Press UP_ARROW Key to Feed Drago Milk!",30,20)

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
if(x<=0){
  x=0;
}
else{
  x=x-1;
}
database.ref("/").update({
  Food:x
})
}

