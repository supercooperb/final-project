var playerX = 100;
var playerY = 100;
var alive = false;

goal = {
  x: 620,
  y: 40,
  w: 40,
  h: 40
};

walls = [{
    x: 45,
    y: 95,
    w: 155,
    h: 40
  },
  {
    x: 105,
    y: 185,
    w: 155,
    h: 40
  },
  {
    x: 45,
    y: 270,
    w: 150,
    h: 35
  },
  {
    x: 100,
    y: 360,
    w: 150,
    h: 35
  },
  {
    x: 40,
    y: 450,
    w: 150,
    h: 35
  },
  {
    x: 100,
    y: 540,
    w: 150,
    h: 40
  },
  {
    x: 240,
    y: 30,
    w: 50,
    h: 550
  },
  {
    x: 450,
    y: 80,
    w: 50,
    h: 580
  },
  {
    x: 330,
    y: 80,
    w: 20,
    h: 620
  },
  {
    x: 390,
    y: 0,
    w: 20,
    h: 595
  },
  {
    x: 535,
    y: 0,
    w: 20,
    h: 595
  },
  {
    x: 590,
    y: 80,
    w: 150,
    h: 50
  },
  {
    x: 550,
    y: 170,
    w: 75,
    h: 50
  },
  {
    x: 590,
    y: 260,
    w: 150,
    h: 100
  },
  {
    x: 550,
    y: 400,
    w: 75,
    h: 195
  },
  {
    x: 0,
    y: 0,
    w: 60,
    h: 700
  },
  {
    x: 0,
    y: 0,
    w: 700,
    h: 40
  },
  {
    x: 0,
    y: 635,
    w: 700,
    h: 100
  },
  {
    x: 660,
    y: 0,
    w: 40,
    h: 700
  },
];

function setup() {
  createCanvas(700, 700);
  noStroke();
}

function draw() {
  fill(255, 255, 255);

  var alive = true;
  var inGoal = false;
  var playerX = mouseX;
  var playerY = mouseY;

  for (i = 0; i < walls.length; i++) {
    if ((walls[i].x - 12 <= playerX) && (playerX - 12 <= walls[i].x + walls[i].w) &&
      (walls[i].y - 12 <= playerY) && (playerY - 12 <= walls[i].y + walls[i].h)) {
      alive = false;
    }
  }

  if ((goal.x <= playerX) && (playerX <= goal.x + goal.w) &&
    (goal.y <= playerY) && (playerY <= goal.y + goal.h)) {
    inGoal = true;
  }

  if (inGoal) {
    background(0, 128, 0);
  } else if (alive) {
    background(100);
  } else {
    background(255, 0, 0);
  }

  for (i = 0; i < walls.length; i++) {
    rect(walls[i].x, walls[i].y, walls[i].w, walls[i].h);
  }

  fill(0, 255, 0);
  rect(goal.x, goal.y, goal.w, goal.h);

  fill(255, 255, 255);
  ellipse(mouseX, mouseY, 25);
}