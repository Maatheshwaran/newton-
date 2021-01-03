class Ball {
    constructor(x,y) {
      var options = {
          restitution: 1,
          friction:0,
          density:0.5,
          isStatic:false
      }
      this.body = Bodies.circle(x,y,30,options);
      this.radius = 50;
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
      push()
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill("pink");
      ellipse(0,0, this.radius,this.radius);
      pop()
    }
  };