//Create variables here
var  dog, happyDog, database, foodS, foodStock, database,firebase database;
function preload()
{
	//load images here
 dogImg = loadImage("images/dogimg.png")
 dog1Img = loadImage("images/dogimg1.png")
}

function setup() {
	database = firebase.database();
  console.log(database)
  createCanvas(500, 500);

  dog = createSprite(250,250,10,10);

  var dogPosition = database.ref('dogImg.png/position');
  dogPosition.on("value", readPosition, showError);

  foodStock = database.ref ('food');
  foodStock.on("value",readStock)
  
}


function draw() {  

  drawSprites(46,139,87);
  //add styles here
  if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  else if(keyDown(RIGHT_ARROW)){
    writePosition(1,0);
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  else if(keyDown(UP_ARROW)){
    writePosition(0,-1);
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  else if(keyDown(DOWN_ARROW)){
    writePosition(0,+1);
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites()

}

function readStock(data){
  food = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

