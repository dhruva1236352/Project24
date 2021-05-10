class Iron{
    constructor(x,y,width,height){

  var options={
  'friction':0.04,
  'restitution':0.001,  
  'density':30
  };
this.body=Bodies.rectangle(x,y,width,height,options);
this.x=x;
this.y=y;
this.width=width;
this.height=height;
World.add(world,this.body);
 }

 display(){
    var ironpos=this.body.position;
    
push();
translate(ironpos.x,ironpos.y);
rectMode(CENTER);
strokeWeight(2);
stroke("black");
fill("grey");
rect(0,0,this.width,this.height);
pop();

 }

}