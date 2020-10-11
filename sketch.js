const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var maxDrops=100;
function preload(){
    
}

function setup(){
    engine = Engine.create();
    createCanvas(500,1000);
    umbrella = new Umbrella(250,750,50,125);
    drop = new Drop(50,250,25,25);
    
}

function draw(){
    Engine.update(engine);
    for(var i=0;i<maxDrops;i++){
        maxDrops.push(new createDrop(random(0,400),random(0,400)));
    }
    drawSprites();
}   

