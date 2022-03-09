let name = ['Ingrid Escadilla', 'Alicia Cortes', 'Mariana Lima', 'Maria Fernanda Rico Vargas', 'Lesvy Berlin Osorio', 'Fernanda Castilla Miranda', 'Abigail Guerrero Mondragon', 'Isabel Cabanillas de la Torre '];
let question = ['When will this stop?', 'No more deaths', 'Hold men accountable', 'Protect our women', 'Women are deserving of life', 'Machismo kills', 'No more femicides'];

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
  // random whole number list of moods :DD
  console.log(question.length);

}

function draw() {
}

function mousePressed() {
  mr = int(random(name.length));
  br = int(random(question.length));
  //nombres = name[mr]  + ' ' + question[br] + '.';
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
  rect(width*0.5,height*0.5, 100);
}

function fortBall2() {
  fill(rc, gc, bc);
}

function intText() {
  fill(255);
  textAlign(TOP);
  //this is a lie, you can click anywhere
  text('Women who deserved to live', 130, 30);
}

function fortText() {
  background(0);
  intText();
  fortBall();
  fill(255);
  textAlign(BOTTOM);
  text('Rest in Peace', 160, 315);
  textAlign(BOTTOM);
  text(nombres, 150, 350);
  text(statements, 130, 370);
}
