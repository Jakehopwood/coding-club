new p5(function (p) {

  let x = 50;
  let speed = 3;

  p.setup = function () {
    p.createCanvas(300, 200);
  };

  p.draw = function () {
    p.background(30);

    x += speed;

    if (x > p.width || x < 0) {
      speed *= -1;
    }

    p.fill(255);
    p.circle(x, 100, 40);
  };

}, "sketch2");