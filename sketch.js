/***********************************************************************************
  Code Self Portriat 
  by Courtney Crother
  
  DESCRIPTION 
  This is a self portrait made from p5js coding 

  Notes 
  1. I had a lot of trouble with the hair. I tried to use curveVertex but could not get it 
  right 
  2. its simple but took me a long time

***********************************************************************************/


// Setup code goes here
function setup() {
  createCanvas(700, 700);
 }


// Draw code goes here
function draw() {
  background(0, 0, 128);

//body 
 fill(200, 255, 181);
 rect(200, 500, 300, 300, 20);


//neck 
 fill(253, 217, 181);
 rect(315, 475, 75, 70, 20);

 //head shape
 fill(253, 217, 181);
 ellipse(350, 350, 230, 280);

//lips
 fill(220, 30, 140);
 arc(350, 430, 55, 20, 100, 30);
 
 //eyes
 fill(81, 54, 26);
 ellipse(310, 315, 35, 20);

 fill(81, 54, 26);
 ellipse(400, 315, 35, 20);

 fill(255);
 ellipse(310, 315, 15, 20);

 fill(255);
 ellipse(400, 315, 15, 20);

 fill(0);
 ellipse(310, 315, 1, 20);

 fill(0);
 ellipse(400, 315, 1, 20);

//hair 
strokeWeight(0);
fill(139, 69, 19);
arc(350, 290, 220, 180, PI, TWO_PI);
//left side 
	fill(139, 69, 19);
 	ellipse(250, 280, 55, 55);
 	ellipse(250, 260, 55, 55);
 	ellipse(240, 270, 55, 55);
 	ellipse(230, 280, 55, 55);
 	ellipse(230, 290, 55, 55);
 	ellipse(230, 300, 55, 55);
 	ellipse(230, 310, 55, 55);
 	ellipse(230, 320, 55, 55);
 	ellipse(230, 330, 55, 55);
 	ellipse(230, 340, 55, 55);
 	ellipse(230, 350, 55, 55);
 	ellipse(230, 360, 55, 55);
 	ellipse(230, 370, 55, 55);
 	ellipse(230, 380, 55, 55);
 	ellipse(230, 390, 55, 55);
 	ellipse(230, 400, 55, 55);
 	ellipse(230, 410, 55, 55);
 	ellipse(230, 420, 55, 55);
 	ellipse(220, 430, 55, 55);
 	ellipse(210, 440, 55, 55);
 	ellipse(200, 450, 55, 55);

 	//rightside 

 	ellipse(450, 280, 55, 55);
 	ellipse(450, 280, 55, 55);
 	ellipse(450, 260, 55, 55);
 	ellipse(460, 270, 55, 55);
 	ellipse(460, 280, 55, 55);
 	ellipse(460, 290, 55, 55);
 	ellipse(460, 300, 55, 55);
 	ellipse(460, 310, 55, 55);
 	ellipse(460, 320, 55, 55);
 	ellipse(460, 330, 55, 55);
 	ellipse(460, 340, 55, 55);
 	ellipse(460, 350, 55, 55);
 	ellipse(460, 360, 55, 55);
 	ellipse(460, 370, 55, 55);
 	ellipse(460, 380, 55, 55);
 	ellipse(460, 390, 55, 55);
 	ellipse(460, 400, 55, 55);
 	ellipse(460, 410, 55, 55);
 	ellipse(460, 420, 55, 55);
 	ellipse(470, 430, 55, 55);
 	ellipse(480, 440, 55, 55);
 	ellipse(500, 450, 55, 55);

 	//nose
 strokeWeight(2);
 fill(253, 217, 181);
 beginShape();
 vertex(350, 340);
 vertex(350, 350);
 vertex(350, 360);
 bezierVertex(350, 350, 390, 360, 350, 380);
 endShape();
}




