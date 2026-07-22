export default function sketch(p) {

  let randNum = 1000;
  let gap = 60;
  let x = new Array(randNum);
  let y;

  let weapon;
  let boundary;

  let obiliterated = 0; // keeps track of the number of times an invader gets obliterated
  let lastDigit;
  let headDigits;

  let invaders = new Array(randNum);

  let invaderX = 70;
  let endGame = false;

  let scoring = 5;
  let score = 0;


  p.setup = () => {

    p.createCanvas(800, 200);

    for (let i = 0; i < randNum; i++) {
      invaders[i] = Math.floor(Math.random() * 10) % 10;
    }


    weapon = 0;


    for (let i = 0; i < randNum; i++) {

      x[i] = p.width - p.width / 9 + invaderX * i;

    }


    y = p.height / 4;

    boundary = p.width / 7;

  };



  p.draw = () => {

    p.background(214, 210, 196);


    showDangerZone(boundary);

    showNumber(
      p.width / 25,
      p.height / 4,
      weapon
    );



    if (endGame) {


      p.fill(214, 210, 196);

      p.rectMode(p.CORNER);

      p.rect(
        0,
        0,
        p.width,
        p.height
      );


      let newScore = score;


      if (score === 0) {


        showNumber(
          p.width - p.width / 9,
          y,
          score
        );


      } else {


        let tx = p.width - p.width / 9;

        let count = 0;


        while (newScore > 0) {


          let digit = newScore % 10;


          showNumber(
            tx - count * gap,
            y,
            digit
          );


          count++;

          newScore = Math.floor(newScore / 10);

        }

      }


      p.noLoop();



    } else {


      for (let i = 0; i < randNum; i++) {


        if (invaders[i] !== -1) {


          showNumber(
            x[i],
            y,
            invaders[i]
          );


          x[i]--;


          if (x[i] <= boundary) {

            endGame = true;

          }


        }

      }


    }


  };



  p.keyPressed = () => {


    if (p.key === 'f') {


      weapon = (weapon + 1) % 10;


    } else if (p.key === 'j') {


      let position = -1;



      for (let i = 0; i < randNum; i++) {


        if (
          weapon === invaders[i] &&
          x[i] < p.width - p.width / 9
        ) {


          invaders[i] = -1;

          position = i;

          score = score + scoring;

          break;

        }

      }



      if (position !== -1) {


        for (let i = position; i > 0; i--) {


          invaders[i] = invaders[i - 1];


        }


        invaders[0] = -1;


      }


    }


  }
    let playerPoints = 0;


  function keepScore(){

    while (obiliterated > 0) {

      p.background(214,210,196);

      playerPoints =
        (playerPoints + 5) * obiliterated;


      if(endGame){

        obiliterated = 0;

      }

    }

    return playerPoints;

  }



  function showDangerZone(w){

    p.rectMode(p.CORNER);

    p.stroke(166,25,46);

    p.fill(166,25,46);

    p.rect(
      0,
      0,
      w,
      p.height
    );

  }




  function showNumber(x, y, n){


    p.stroke(214,210,196);

    p.fill(55,58,54);



    if (n === 0){

      a(x,y);
      b(x,y);
      c(x,y);
      d(x,y);
      e(x,y);
      f(x,y);


    } else if (n === 1){

      b(x,y);
      c(x,y);


    } else if (n === 2){

      a(x,y);
      b(x,y);
      g(x,y);
      e(x,y);
      d(x,y);


    } else if (n === 3){

      a(x,y);
      b(x,y);
      g(x,y);
      c(x,y);
      d(x,y);


    } else if (n === 4){

      b(x,y);
      g(x,y);
      c(x,y);
      f(x,y);


    } else if (n === 5){

      a(x,y);
      f(x,y);
      g(x,y);
      c(x,y);
      d(x,y);


    } else if (n === 6){

      f(x,y);
      g(x,y);
      e(x,y);
      d(x,y);
      c(x,y);


    } else if (n === 7){

      a(x,y);
      b(x,y);
      c(x,y);


    } else if (n === 8){

      a(x,y);
      b(x,y);
      c(x,y);
      d(x,y);
      e(x,y);
      f(x,y);
      g(x,y);


    } else if (n === 9){

      a(x,y);
      b(x,y);
      c(x,y);
      g(x,y);
      f(x,y);


    } else {

      e(x,y);
      g(x,y);
      c(x,y);

    }

  }





  function a(x,y){

    p.beginShape();

    p.vertex(x+10,y+10);
    p.vertex(x+20,y+0);
    p.vertex(x+40,y+0);
    p.vertex(x+50,y+10);
    p.vertex(x+40,y+20);
    p.vertex(x+20,y+20);

    p.endShape(p.CLOSE);

  }





  function b(x,y){

    p.beginShape();

    p.vertex(x+50,y+10);
    p.vertex(x+60,y+20);
    p.vertex(x+60,y+40);
    p.vertex(x+50,y+50);
    p.vertex(x+40,y+40);
    p.vertex(x+40,y+20);

    p.endShape(p.CLOSE);

  }





  function c(x,y){

    p.beginShape();

    p.vertex(x+50,y+50);
    p.vertex(x+60,y+60);
    p.vertex(x+60,y+80);
    p.vertex(x+50,y+90);
    p.vertex(x+40,y+80);
    p.vertex(x+40,y+60);

    p.endShape(p.CLOSE);

  }





  function d(x,y){

    p.beginShape();

    p.vertex(x+10,y+90);
    p.vertex(x+20,y+80);
    p.vertex(x+40,y+80);
    p.vertex(x+50,y+90);
    p.vertex(x+40,y+100);
    p.vertex(x+20,y+100);

    p.endShape(p.CLOSE);

  }





  function e(x,y){

    p.beginShape();

    p.vertex(x+10,y+50);
    p.vertex(x+20,y+60);
    p.vertex(x+20,y+80);
    p.vertex(x+10,y+90);
    p.vertex(x+0,y+80);
    p.vertex(x+0,y+60);

    p.endShape(p.CLOSE);

  }





  function f(x,y){

    p.beginShape();

    p.vertex(x+10,y+10);
    p.vertex(x+20,y+20);
    p.vertex(x+20,y+40);
    p.vertex(x+10,y+50);
    p.vertex(x+0,y+40);
    p.vertex(x+0,y+20);

    p.endShape(p.CLOSE);

  }





  function g(x,y){

    p.beginShape();

    p.vertex(x+20,y+40);
    p.vertex(x+40,y+40);
    p.vertex(x+50,y+50);
    p.vertex(x+40,y+60);
    p.vertex(x+20,y+60);
    p.vertex(x+10,y+50);

    p.endShape(p.CLOSE);

  }
    function showShape(x, y, n) {

    let size = 50;

    p.stroke(55, 58, 54);

    p.fill(55, 58, 54);

    p.rectMode(p.CENTER);

    p.ellipseMode(p.CENTER);

    p.strokeWeight(2);



    if (n === 0) {

      p.ellipse(
        x,
        y,
        size,
        size
      );


    } else if (n === 1) {

      p.rect(
        x,
        y,
        size,
        size
      );


    } else if (n === 2) {

      p.line(
        x,
        y - size / 2,
        x,
        y + size / 2
      );


    } else if (n === 3) {

      p.ellipse(
        x,
        y,
        size * 2,
        size
      );


    } else if (n === 4) {

      p.rect(
        x,
        y,
        size / 3,
        size / 3
      );


    } else if (n === 5) {

      p.line(
        x - size / 2,
        y,
        x + size / 2,
        y
      );


    } else if (n === 6) {

      p.line(
        x - size / 2,
        y - size / 2,
        x + size / 2,
        y + size / 2
      );


    } else if (n === 7) {

      p.line(
        x + size / 2,
        y - size / 2,
        x - size / 2,
        y + size / 2
      );


    } else if (n === 8) {

      p.ellipse(
        x,
        y,
        size,
        size
      );


    } else if (n === 9) {

      p.ellipse(
        x,
        y,
        size / 3,
        size / 3
      );

    }

  }


}