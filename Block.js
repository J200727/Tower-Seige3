class Block{
  constructor(x, y, width, height) {
    this.tint=255
    this.img=loadImage("Untitled.png")
      var options = {

          restitution :0.4,
          friction :0.0,
          //isStatic:true
        
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var setPosition= this.body.position;
      if(setPosition.y>320){
        this.tint-=5
        
      }
      this.score()
      push();
      translate(setPosition.x, setPosition.y);
      rotate(angle);
      rectMode(CENTER);
     // rect(0,0,this.width, this.height);
     tint(255,this.tint)
     image(this.img,0,0,this.width,this.height);
      pop();
    }
    score(){
      if(this.tint==0){
        score+=1
      }
    }
} 
