class Roof {
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
      var paperPos = this.body.position
      push();
      translate(paperPos.x,paperPos.y);
      rectMode(CENTER);
      fill(128,128,128);
      rect(0,0,width,height);
      pop();
    }
}