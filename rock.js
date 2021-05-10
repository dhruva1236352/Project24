class Rock{
    constructor(x,y,width,height){

  var options={
  'friction':0.4,
  'restitution':0.3,  
  'density':20
  };
this.body=Bodies.rectangle(x,y,width,height,options);
this.x=x;
this.y=y;
this.width=width;
this.height=height;
World.add(world,this.body);
 }

 display(){
    var rockpos=this.body.position;
    
push();
translate(rockpos.x,rockpos.y);
rectMode(CENTER);
strokeWeight(3);
stroke("orange");
fill("brown");
rect(0,0,this.width,this.height);
pop();

 }

}