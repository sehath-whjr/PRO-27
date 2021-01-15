class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:offsetX,y:offsety}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position
        var anchorX = pointB.x + offsetX;
        var anchorY = pointB.y + offsetY;
        line(pointA.x,pointA.y,anchorX,anchorY);
    }
}