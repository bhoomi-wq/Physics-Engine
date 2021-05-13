const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;
var ball1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true

    }

   object= Bodies.rectangle(200,390,400,20,object_options);
    World.add(world,object);

   //ball with physics
   var ball_options ={
       restitution: 1.0
   }
   ball= Bodies.circle(200,200,30,ball_options);
   World.add(world,ball);
   
   var ball1_options ={
    restitution: 1.0
}
   ball1= Bodies.circle(100,200,20,ball1_options);
   World.add(world,ball1)

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,30,30);

    ellipseMode(RADIUS);
    ellipse(ball1.position.x,ball1.position.y,20,20);
}
