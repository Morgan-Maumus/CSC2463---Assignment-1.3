function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(0,0,0);
  
  const y = color(255, 255, 0);
  fill(y);
  arc(100, 100, 150, 150, -2.5, PI - QUARTER_PI, PIE);
  
  const r = color(255, 0, 0);
  fill(r);
  circle(300, 100, 150);
  noStroke();
  rect(225, 100, 150, 75);
  
  const w = color(255, 255, 255);
  fill(w);
  noStroke();
  circle(270, 90, 40);
  circle(330, 90, 40);
  
  const b = color(0, 0, 255);
  fill(b);
  noStroke();
  circle(270, 90, 20);
  circle(330, 90, 20);
}