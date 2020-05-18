class Block extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rotate(angle);
        strokeWeight(3);
        fill("pink");
        rect(0,0,this.width,this.height);
        pop()
            console.log(this.body.speed);
            if (this.body.speed<3){
             super.display
    }


      
      }
        }
       else {
         push()
         World.remove(world,this.body);
         tint (255,this.visibility);
         this.visibility = this.visibility-5;
         image(this.image,this.body.position.x,this.body.position.y,50,50);
         pop()
       }
    

