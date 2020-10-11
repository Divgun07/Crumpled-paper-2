class paper {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.image=loadImage("paper.png");
      this.body = Bodies.circle(x, y, 40, options);
      this.radius = 40;
     
      
      World.add(world, this.body);
    }
    display(){
      push();
      var pos=this.body.position;
      imageMode(CENTER);
      //fill("white");
    image(this.image,pos.x,pos.y,40,40);
     pop();
    }
  };
  