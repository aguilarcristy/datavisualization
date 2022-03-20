let value = 0; // Clouds Key

let name = [
  "Ingrid Escadilla",
  "Alicia Cortes",
  "Mariana Lima",
  "Maria Fernanda Rico Vargas",
  "Lesvy Berlin Osorio",
  "Fernanda Castilla Miranda",
  "Abigail Guerrero Mondragon",
  "Isabel Cabanillas de la Torre",
];
let question = [
  "When will this stop?",
  "No more deaths",
  "Hold men accountable",
  "Protect our women",
  "Women are deserving of life",
  "Machismo kills",
  "No more femicides",
];

let mr;
let gr;
let br;
let sr;

let rc = 20;
let gc = 100;
let bc = 250;


let nombres;
let statements;

function setup() {
  createCanvas(400, 400);
  background(255, 0, 128);
  frameRate(60);
  intText();
  fortBall();
  console.log(name[int(random(name.length))]);
  console.log(question.length);


}

function draw() {
  drawVenus();
 // drawBottomDecor();

 // Clouds

  fill(value);

  circle(400, 400, 100);
  circle(355, 400, 60);
  circle(330, 400, 35);
  circle(310, 400, 20);
  circle(295, 400, 12);
  noStroke();


  // Left Cloud
  circle(0, 400, 100);
  circle(45, 400, 60);
  circle(70, 400, 35);
  circle(90, 400, 20);
  circle(105, 400, 12);
  noStroke();


}

function mousePressed() {
  mr = int(random(name.length));
  br = int(random(question.length));
  nombres = name[mr];
  statements = question[mr];
  rc = random(255);
  bc = random(255);
  fortText();
  console.log(nombres);
  console.log(statements);
}

function fortBall() {
  fill(rc, gc, bc);
  //ellipse(width*0.5,height*0.5, 100);
  noStroke();
  fill(255, 122, 169);
  rect(100, 150, 200, 20);
  rect(190, 50, 20, 250);
}

function fortRect() {
  fill(rc, gc, bc);
  rect(width * 0.5, height * 0.5, 100);
}

function fortBall2() {
  fill(rc, gc, bc);
}

function intText() {
  fill(255);
  textAlign(TOP);
  text("Women who deserved to live", 130, 30);
}

function fortText() {
  background(0);
  intText();
  fortBall();
  fill(255);
  textAlign(BOTTOM);
  text("Rest in Peace", 160, 315);
  textAlign(BOTTOM);
  text(nombres, 150, 350);
  text(statements, 130, 370);
}

function drawVenus() {
  // Venus Left
  push();
  fill("pink");
  circle(40, 40, 50);

  //fill(255, 0, 128);
  fill(0);
  circle(40, 40, 35);

  fill("pink");
  rect(20, 80, 40, 9);
  rect(35, 58, 10, 45);

  // Venus Right

  fill("pink");
  circle(360, 40, 50);

 // fill(255, 0, 128);
  fill(0);
  circle(360, 40, 35);

  fill("pink");
  rect(340, 80, 40, 9);
  rect(355, 58, 10, 45);
  pop();
}

function keyPressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

//function drawBottomDecor() {


  fill(255, 122, 169);
  // Right Cloud
  circle(400, 400, 100);
  circle(355, 400, 60);
  circle(330, 400, 35);
  circle(310, 400, 20);
  circle(295, 400, 12);


  // Left Cloud
  circle(0, 400, 100);
  circle(45, 400, 60);
  circle(70, 400, 35);
  circle(90, 400, 20);
  circle(105, 400, 12);
