function setup() {
  createCanvas(400, 400);
  background(100);
  
}

function draw() {
  
  noStroke()
  if(key === "r")
  {
      fill(255, 0, 0);
  }
  else if(key === "b")
  {
    fill(0, 0, 255);
  }
  else if(key === "g")
  {
    fill(0, 255, 0);
  }
  else if(key === "c")
  {
    background(100);
  }
  
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 20, 20)
  }
}  