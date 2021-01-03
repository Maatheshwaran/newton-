class Chain {
    constructor(bodyA,bodyB,offsetX,offsetY){
        
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
       
        this.chain = Constraint.create(options);
        World.add(world,this.chain);

    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        var rope1 = pointA.x + this.offsetX;
        var rope2 = pointA.y + this.offsetY;
        stroke("white")
        line(rope1,rope2,pointB.x,pointB.y);
    }
}
