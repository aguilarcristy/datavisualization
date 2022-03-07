function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  fill(255, 179, 179);
textSize(20);
textFont('Georgia');
text('Topic Idea for Data Visualization', 55, 50);
  
  // PINK CIRCLE
  fill(255, 179, 179);
  circle(200, 170, 100);
  noStroke();
  
  // Eyes
  fill(145, 132, 132);
  circle(180, 155, 15); // Left
  circle(220, 155, 15); // Right
  
  // Mouth


  
//arc(200, 180, 10, 20, 0, PI + QUARTER_PI, CHORD);
//describe('white open arc with black outline with top right missing');


}