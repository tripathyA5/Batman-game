class Umbrella{
    constructor(x,y,width,height){
var options={
    isStatic:true
}
this.body=Bodies.rectangle(x,y,width,height);
this.width=width;
this.height=height;
World.add(world,this.body);
}
display(){
    rectMode(CENTER);
    rectangle(this.position.x,this.position.y,this.width,this.height);
}
}