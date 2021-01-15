class bob{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,r/2,options);
        World.add(world,this.bodies)
    }
    display(){
      var paperPos = this.body.position
      push();
      translate(paperPos.x,paperPos.y);
      rectMode(CENTER);
      fill(255,0,255)
      ellipse(0,0,r,r);
      pop();
    }
  }