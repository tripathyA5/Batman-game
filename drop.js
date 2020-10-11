class Drop{
    constructor(x,y,width,height){
var options={
    isStatic:false,
    friction:0.1
}
this.body=Bodies.rectangle(x,y,width,height);
this.width=width;
this.height=height;
World.add(world,this.body);
}
display(){
    rectMode(CENTER);
    rectangle(this.position.x,this.position.y,this.width,this.height);
    if(this.rain.position.y>height){
        Matter.Body.setPosition(this.drop,{x:RandomSource(0,400),y:RandomSource(0,400)})
    }
}
}