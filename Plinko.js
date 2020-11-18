class Plinko{
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution:0.4
        }
        this.radius = 10;
    this.body = Matter.Bodies.circle(x,y,this.radius,options);
    World.add(world, this.body);
    }
  display(){
    var pos =this.body.position;
    ellipseMode(RADIUS);
    fill("white");
    ellipse(pos.x, pos.y, this.radius, this.radius);
  }
}