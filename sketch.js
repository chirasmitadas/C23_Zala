const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var boxy, boxy1;
var boxes =[];

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

  // boxy = new Box(200,100,50,50);
   //boxy1 = new Box(240,50,100,50);

   ground = new Ground(200, 390,400,20);

}

function mousePressed(){
    boxes.push(new Box(mouseX, mouseY,20,20));
}

function draw(){
    background(0);
    Engine.update(engine);
   
    //boxy.display();
   // boxy1.display();

   for(var i =0; i<boxes.length;i++){
       boxes[i].display();
   }

    ground.display();
   
}