int xInvader = 750;
int yInvader = 100;
int xCannon = 115;
int invaderShape = 1;
int cannonShape = int(random(1, 4));
color cannonColor = color(166, 25, 46);
color invaderColor = color(55, 58, 54);
int misfirePenalty = 0;

void setup(){
  size(800, 200);
  background(214, 210, 196);
}

void draw(){
  background(214, 210, 196);
  
  //player's base
  
  noStroke();
  fill(cannonColor);
  rect(0, 0, xCannon, 200);
  
  //invader
  
  fill(invaderColor);
  
  //change cannon's shape
  
  if (cannonShape == 1){
    ellipse(55, 95, 100, 100);
  }
  
  else if (cannonShape == 2){
    rect(10, 40, 100, 100);
  }
  
  else if (cannonShape == 3){
    stroke(invaderColor);
    strokeWeight(10);
    line(55, 50, 55, 150);
    }
  
  
  if (cannonShape > 3){
    noStroke();
    cannonShape = 1;
  }
  
  
  //invader's movement
  
  xInvader = xInvader - 1;
  
  //change invader's shape
  
  if (invaderShape == 1){
    noStroke();
    ellipse(xInvader, yInvader, 100, 100);
  }
  
  if (invaderShape == 2){
    noStroke();
    rect(xInvader, yInvader, 50, 50);
  }
  
  if (invaderShape == 3){
    stroke(invaderColor);
    strokeWeight(10);
    line(xInvader , yInvader - 50, xInvader, yInvader + 50);
  }
  
  if (invaderShape > 3){
    invaderShape = 1;
  }
  
  //invader reaches base, game over
  
  if (xInvader <= xCannon){
    noStroke();
    fill(cannonColor);
    rect(0, 0, 800, 200);
  }
  
  //missfire penalty
  
  if (misfirePenalty > 0){
    fill(cannonColor);
    noStroke();
    rect(0, 0, xCannon, 200); 
    if (misfirePenalty == 1){
      xCannon = xCannon + 115;
      rect(0, 0, xCannon, 200);
      misfirePenalty = 0;
    } 
  }
}
 

void keyPressed(){
  
  //change cannon's shape when f key is pressed
  
  if(key == 'f' || key == 'F'){
    noStroke();
    fill(invaderColor);
    cannonShape = cannonShape + 1;
  }
  
  //fire the cannon when j key is pressed
  
  if (key == 'j' || key == 'J'){
    if (invaderShape == cannonShape){
      xInvader = 750;
      invaderShape = invaderShape + 1;
    } else{
      misfirePenalty = misfirePenalty + 1;
    }
  }
}