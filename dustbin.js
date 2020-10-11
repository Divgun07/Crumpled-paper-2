class dustbin {
    constructor() {
      var options = {
          isStatic:true
         
      }
      this.image=loadImage("dustbingreen.png")
      this.body1 = Bodies.rectangle(600, 520, 20, 100, options);
      this.body2 = Bodies.rectangle(700, 520,20, 100, options);
      this.body3 = Bodies.rectangle(650, 560,0, 0, options);
      this.width = width;
      this.height = height;
     
      
      World.add(world, this.body1);
      World.add(world, this.body2);
      World.add(world, this.body3);
    }
    display(){
      
      var pos=this.body1.position;
      var angle = this.body1.angle;
      push();
      translate(pos.x,pos.y);
      rotate (angle);
      //rectMode(CENTER);
      //fill("blue");
      //rect(0,0,20,100);
     pop();

     var pos=this.body2.position;
     var angle = this.body2.angle;
     push();
     translate(pos.x,pos.y);
     rotate (angle);
     //rectMode(CENTER);
     //fill("blue");
     //rect(0,0,20,100);
    pop();

    var pos=this.body3.position;
    var angle = this.body3.angle;
    push();
    translate(pos.x,pos.y);
    rotate (angle);
    imageMode(CENTER);
    //fill("blue");
   image(this.image,0,0,100,100);
   pop();
    }
  };
  