var fixbox1,fixbox2,fixbox3,fixbox4;
var movingbox;
var music;


function preload(){
music=loadSound("music.mp3")
}

function setup(){
createCanvas(800,600);

movingbox=createSprite(random(10,750), 300,20,20);
movingbox.shapeColor="white";
movingbox.velocityX=5;
movingbox.velocityY=5;

fixbox1=createSprite(100,590,180,20);
fixbox1.shapeColor="red";

fixbox2=createSprite(300,590,180,20);
fixbox2.shapeColor="green";

fixbox3=createSprite(500,590,180,20);
fixbox3.shapeColor="blue";

fixbox4=createSprite(700,590,180,20);
fixbox4.shapeColor="yellow";

}
function draw(){
background(rgb(10,10,10));

edges=createEdgeSprites();
movingbox.bounceOff(edges);


if(movingbox.isTouching(fixbox1)&&movingbox.bounceOff(fixbox1)){
movingbox.shapeColor="red";
}

 else if(movingbox.isTouching(fixbox2)&&movingbox.bounceOff(fixbox2)){
    movingbox.shapeColor="green";
    }

 else if(movingbox.isTouching(fixbox3)&&movingbox.bounceOff(fixbox3)){
        movingbox.shapeColor="blue";
        }

  else if(movingbox.isTouching(fixbox4)&&movingbox.bounceOff(fixbox4)){
            movingbox.shapeColor="yellow";
            }


/*if (movingbox.x<0){

music.stop()
movingbox.velocityX=3;

}else if (movingbox.x>800){

music.stop()
movingbox.velocityX=-3;

}

if (movingbox.isTouching(fixbox4) ) {

    music.play();
    movingbox.shapeColor="yellow";
bounceOff(movingbox,fixbox4);

}
else if(movingbox.isTouching(fixbox3)){
/*music.play();
movingbox.shapeColor="blue"
bounceOff(movingbox,fixbox3);

}
else if (movingbox.isTouching(fixbox2)){

    music.stop();
    movingbox.shapeColor="green";
    bounceOff(movingbox,fixbox2);
    movingbox.velocityX=0;
    movingbox.velocityY=0;
}
else if (movingbox.isToucing(fixbox1)){

music.stop()
movingbox.shapeColor="red";
bounceOff(movingbox,fixbox1);

}
if (movingbox,y<0){
   music.stop() 
   movingbox.velocityY=3;
}/* */


drawSprites();


}