export default function sketch(p) {

  let xInvader = 750;

  let yInvader = 100;

  let xCannon = 115;

  let invaderShape = 1;

  let cannonShape;

  let cannonColor;

  let invaderColor;

  let misfirePenalty = 0;


  p.setup = function(){

    p.createCanvas(800, 200);

    cannonShape = Math.floor(p.random(1, 4));

    cannonColor = p.color(166, 25, 46);

    invaderColor = p.color(55, 58, 54);

    p.background(214, 210, 196);

  };


  p.draw = function(){

    p.background(214, 210, 196);


    //player's base

    p.noStroke();

    p.fill(cannonColor);

    p.rect(0, 0, xCannon, 200);



    //invader

    p.fill(invaderColor);



    //change cannon's shape

    if (cannonShape == 1){

      p.ellipse(55, 95, 100, 100);

    }


    else if (cannonShape == 2){

      p.rect(10, 40, 100, 100);

    }


    else if (cannonShape == 3){

      p.stroke(invaderColor);

      p.strokeWeight(10);

      p.line(55, 50, 55, 150);

    }



    if (cannonShape > 3){

      p.noStroke();

      cannonShape = 1;

    }




    //invader's movement

    xInvader = xInvader - 1;




    //change invader's shape

    if (invaderShape == 1){

      p.noStroke();

      p.ellipse(xInvader, yInvader, 100, 100);

    }



    if (invaderShape == 2){

      p.noStroke();

      p.rect(xInvader, yInvader, 50, 50);

    }



    if (invaderShape == 3){

      p.stroke(invaderColor);

      p.strokeWeight(10);

      p.line(
        xInvader,
        yInvader - 50,
        xInvader,
        yInvader + 50
      );

    }



    if (invaderShape > 3){

      invaderShape = 1;

    }




    //invader reaches base, game over

    if (xInvader <= xCannon){

      p.noStroke();

      p.fill(cannonColor);

      p.rect(0, 0, 800, 200);

    }




    //missfire penalty

    if (misfirePenalty > 0){

      p.fill(cannonColor);

      p.noStroke();

      p.rect(0, 0, xCannon, 200);



      if (misfirePenalty == 1){

        xCannon = xCannon + 115;

        p.rect(0, 0, xCannon, 200);

        misfirePenalty = 0;

      }

    }

  };




  p.keyPressed = function(){


    //change cannon's shape when f key is pressed

    if(p.key == 'f' || p.key == 'F'){

      p.noStroke();

      p.fill(invaderColor);

      cannonShape = cannonShape + 1;

    }




    //fire the cannon when j key is pressed

    if (p.key == 'j' || p.key == 'J'){


      if (invaderShape == cannonShape){

        xInvader = 750;

        invaderShape = invaderShape + 1;

      } 

      else {

        misfirePenalty = misfirePenalty + 1;

      }

    }

  };

}