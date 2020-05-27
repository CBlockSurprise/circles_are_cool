
let t = 0;
let pr = 2;
let r = 50;
let points = [];
let current = {
  x: 0,
  y: 0
}
let ax = 250;
let ay = 250;
let gincrease = false;

function setup() {
  document.getElementById("pr").value = 2;
  document.getElementById("r").value = 100;
  createCanvas(500,500)
}

function draw() {
  noStroke();
  background(0,0,0)
  if (points.length > 255) {
    points.shift();
  }
  points.push(new Point(current.x,current.y))
  document.getElementById("dat").innerHTML = "t: " + t + ",<br/> r: " + r + ", ps: " + pr + "<br/>sin: " + current.y + ", cos: " + current.x;
  if (document.getElementById("sina").checked == true) {
    current.y = Math.sin(t) * r + 250;
  }
  if (document.getElementById("cosa").checked == true) {
    current.x = Math.cos(t) * r + 250;
  }
  if (!gincrease) {
    r = document.getElementById("r").value;
  } else {
    r += 1;
    if (r > 300) {
      gincrease = false;
      r = 100;
    }
  }

  pr = document.getElementById("pr").value;
  Point.DrawAll();
  t++;
}


class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.color = 255;
  }
  draw() {
    fill(this.color)
    //if (this.color != 255) {
      ellipse(this.x,this.y,pr,pr);
//     } else {
//       rect(this.x - (pr*0.9/2), this.y - (pr*0.9/2), pr * 0.9, pr * 0.9);
//     }

    this.color -= 5;
  }
  static DrawAll() {
    for (let i = 0; i < points.length; i++) {
      points[i].draw();
    }
  }
}
