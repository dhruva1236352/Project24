const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var plane;
var rubber1;
var rubber2;
var rubber3;
var rubber4;
var rubber5;
var rubber6;
var rubber7;
var rubber8;
var rubber9;
var iron1;
var iron2;
var iron3;
var rock1;
var rock2;
var rock3;
var rock4;
var rock5;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)    
    hammer = new Hammer(10,100);

    rubber1=new Rubber(650,300,PI/2)
    rubber2=new Rubber(651,300,PI/2)
    rubber3=new Rubber(652,300,PI/2)
    rubber4=new Rubber(653,300,PI/2)
    rubber5=new Rubber(654,300,PI/2)
    rubber6=new Rubber(655,300,PI/2)
    rubber7=new Rubber(656,300,PI/2)
    rubber8=new Rubber(657,300,PI/2)
    rubber9=new Rubber(658,300,PI/2)

    iron1=new Iron(900,350,50,40)
    iron2= new Iron(1000,350,100,40)
    iron3=new Iron(1125,350,100,150)

    rock1=new Rock(100,300,90,70)
    rock2=new Rock(200,300,80,120)
    rock3=new Rock(300,300,85,100)
    rock4=new Rock(400,300,65,60)
    rock5=new Rock(500,300,45,80)

}

function draw(){

    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();

    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    rubber9.display();

 iron1.display();
 iron2.display();
 iron3.display();

 rock1.display();
 rock2.display();
 rock3.display();
 rock4.display();
 rock5.display();

}