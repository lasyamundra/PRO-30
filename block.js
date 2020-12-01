class Block
{  constructor(x, y, width, height) 
  {
        var options = {
            'restitution':0.8,
            'friction':0.0,
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
  }
      display()
      {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill (255,192,203);
        //rotate(angle);
        rect(0,0,this.width, this.height);
        pop();
      }
}
