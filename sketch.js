const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gameState="onsling"
var bg ,score=0
function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
//getBackground()  
}

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 =new Box(785,330,50,50);
    box2= new Box(835,330,50,50);
    box3 = new Box(785,280,50,50);
    box4 = new Box(835,280,50,50);
    box5 = new Box(785,230,50,50);
    box6 = new Box(835,230,50,50);
    ground = new Ground(500,390,1000,20);
    ball1 = new Ball(230,110,45,45);

    //log6 = new Log(230,180,80, PI/2);
slingshot = new SlingShot(ball1.body,{x:650, y:45});
}

function draw(){
    background("grey");
    Engine.update(engine)
    ground.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   ball1.display();
   slingshot.display();
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    text(mouseX + "," + mouseY, mouseX,mouseY);
    

}

function mouseDragged(){
// if(gameState!=="launched"){
   Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
//}   
}



