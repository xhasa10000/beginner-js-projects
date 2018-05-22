class Snake {
  constructor() {
    this.pos = createVector( 0,0 );
    this.speedX = SCL;
    this.speedY = 0;
    this.total = 0;
    this.tail = [];
  }
  
    moveDir(xDir, yDir){
      this.xSpeed = xDir * SCL;
      this.ySpeed = yDir * SCL;
      
    }
    
    eatsFood(foodPos){ 
      var d = dist(this.pos.x, this.pos.y, foodPos.x, foodPos.y);
      if (d < 1) {
        this.total++;
        return true;
      } else {
        return false;
      }
    }

    losesTail(){
    }

    update(){
      const tempX = this.pos.x + this.xSpeed;
      const tempY = this.pos.y + this.ySpeed;
      this.pos.x = constrain(tempX, 0, width - scl);
      this.pos.y = constrain(tempY, 0, height - scl);
      if (this.total > 0) {
        this.tail[ this.total - 1 ] = this.pos.copy();
      }
    }

    show(){
      fill(255);
      rect(this.pos.x, this.pos.y, SCL, SCL);
    }
  
}
