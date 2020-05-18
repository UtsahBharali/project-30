class Hexagon {
    constructor(x,y,radius){
        polygon= Bodies.circle(50,200,200);
        this.radius = radius;
        World.add(world, polygon);
    }


display(){

    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("yellow");
    imageMODE(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y)
    ellipseMode(RADIUS);
    hexagon(0, 0, this.radius); 
    pop();
}
}
