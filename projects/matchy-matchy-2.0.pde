int randNum = 1000;
int gap = 60;
int x[] = new int[randNum];
int y;
int weapon;
int boundary;
int obiliterated = 0; // keeps track of the number of times an invader gets obliterated
int lastDigit;
int headDigits; 
int invaders[] = new int[randNum];
int invaderX = 70;
boolean endGame = false;
int scoring = 5;
int score = 0;

void setup() {
  size(800, 200);
  for(int i = 0; i < randNum; i++){
    invaders[i] = (int)random(0, 10)%10;
  }
   weapon = 0;
   for (int i = 0; i < randNum; i++){
     x[i] =  width-width/9 + invaderX * i;
   }
   y = height/4;
   boundary  = width/7;
 }

void draw() {
  background(214, 210, 196);
  showDangerZone(boundary);
  showNumber(width/25, height/4, weapon);

  if (endGame) {
    fill(214, 210, 196);
    rectMode(CORNER);
    rect(0, 0, width, height);

    int newScore = score;
    if (score == 0) {
      showNumber(width-width/9, y, score);
    } else {
      int tx = width-width/9;
      int count = 0;
      while (newScore > 0) {
        int digit = newScore%10;
        showNumber(tx - count*gap, y, digit);
        count++;
        newScore /=10;
      }
    }


    noLoop();
  } else {
    for (int i = 0; i < randNum; i++) {
      if (invaders[i] != -1) {
        showNumber(x[i], y, invaders[i]);
        x[i]--;
        if (x[i] <= boundary) {
          endGame = true;
        }
      }
    }
  }
}

void keyPressed() {
  if (key == 'f') {
    weapon = (weapon + 1) % 10;
  } else if (key == 'j') {
    int position = -1;
    for (int i = 0; i < randNum; i++) {
      if (weapon == invaders[i] && x[i]<width-width/9) {
        invaders[i]=-1;
        position = i;
        score = score + scoring;
        break;
      }
    }
    if (position != -1) {

      for (int i = position; i > 0; i--) {
        invaders[i] = invaders[i-1];
      }
      invaders[0] = -1;
    }
  }
}

int playerPoints = 0;

int keepScore(){
  while (obiliterated > 0) {
    background(214, 210, 196); 
    playerPoints = (playerPoints + 5) * obiliterated; //every time an invader gets obliterated, the player gets five points
    if (endGame){ // the points return to zero when the game ends
      obiliterated = 0;
    }
  }
  return playerPoints;
}

void showDangerZone(int w){
  rectMode(CORNER);
  stroke(166, 25, 46);
  fill(166, 25, 46);
  rect(0,0,w,height);
}

void showNumber(int x, int y, int n){
    stroke(214, 210, 196);

  fill(55, 58, 54);
  if (n == 0){
    a(x,y);b(x,y);c(x,y);d(x,y);e(x,y);f(x,y);
  } else if (n == 1){
    b(x,y);c(x,y);
  } else if (n == 2){
    a(x,y);b(x,y);g(x,y);e(x,y);d(x,y);
  } else if (n == 3){
    a(x,y);b(x,y);g(x,y);c(x,y);d(x,y);
  } else if (n == 4){
    b(x,y);g(x,y);c(x,y);f(x,y);
  } else if (n == 5){
    a(x,y);f(x,y);g(x,y);c(x,y);d(x,y);
  } else if (n == 6){
    f(x,y);g(x,y);e(x,y);d(x,y);c(x,y);
  } else if (n == 7){
    a(x,y);b(x,y);c(x,y);
  } else if (n == 8){
    a(x,y);b(x,y);c(x,y);d(x,y);e(x,y);f(x,y);g(x,y);
  } else if (n == 9) {
    a(x,y);b(x,y);c(x,y);g(x,y);f(x,y);
  } else {
    e(x,y);g(x,y);c(x,y);
  }
}

void a(int x, int y) {
  beginShape();
  vertex(x+10, y+10);
  vertex(x+20, y+ 0);
  vertex(x+40, y+ 0);
  vertex(x+50, y+10);
  vertex(x+40, y+20);
  vertex(x+20, y+20);
  endShape(CLOSE);
}

void b(int x, int y) {
  beginShape();
  vertex(x+50, y+10);
  vertex(x+60, y+20);
  vertex(x+60, y+40);
  vertex(x+50, y+50);
  vertex(x+40, y+40);
  vertex(x+40, y+20);
  endShape(CLOSE);
}

void c(int x, int y) {
  beginShape();
  vertex(x+50, y+50);
  vertex(x+60, y+60);
  vertex(x+60, y+80);
  vertex(x+50, y+90);
  vertex(x+40, y+80);
  vertex(x+40, y+60);
  endShape(CLOSE);
}

void d(int x, int y) {
  beginShape();
  vertex(x+10, y+ 90);
  vertex(x+20, y+ 80);
  vertex(x+40, y+ 80);
  vertex(x+50, y+ 90);
  vertex(x+40, y+100);
  vertex(x+20, y+100);
  endShape(CLOSE);
}

void e(int x, int y) {
  beginShape();
  vertex(x+10, y+50);
  vertex(x+20, y+60);
  vertex(x+20, y+80);
  vertex(x+10, y+90);
  vertex(x+ 0, y+80);
  vertex(x+ 0, y+60);
  endShape(CLOSE);
}
void f(int x, int y) {
  beginShape();
  vertex(x+10, y+10);
  vertex(x+20, y+20);
  vertex(x+20, y+40);
  vertex(x+10, y+50);
  vertex(x+ 0, y+40);
  vertex(x+ 0, y+20);
  endShape(CLOSE);
}

void g(int x, int y) {
  beginShape();
  vertex(x+20, y+40);
  vertex(x+40, y+40);
  vertex(x+50, y+50);
  vertex(x+40, y+60);
  vertex(x+20, y+60);
  vertex(x+10, y+50);
  endShape(CLOSE);
}

void showShape(int x, int y, int n) {
  int size = 50;
  stroke(55, 58, 54);
  fill(55, 58, 54);
  rectMode(CENTER);
  ellipseMode(CENTER);
  strokeWeight(2);
  if (n == 0) {
    ellipse(x, y, size, size);
  } else if (n == 1) {
    rect(x, y, size, size);
  } else if (n == 2) {
    line(x, y-size/2, x, y +size/2);
  } else if (n == 3) {
    ellipse(x, y, size*2, size);
  } else if (n == 4) {
    rect(x, y, size/3, size/3);
  } else if (n == 5) {
    line(x-size/2, y, x+size/2, y);
  } else if (n == 6) {
    line(x-size/2, y-size/2, x + size/2, y + size/2);
  } else if (n == 7){
    line(x+size/2,y-size/2,x-size/2,y+size/2);
  } else if (n == 8){
    ellipse(x, y, size, size);
  } else if (n == 9){
    ellipse(x, y, size/3, size/3);
  }
}