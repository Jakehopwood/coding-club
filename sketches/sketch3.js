new p5(function (p) {

  let x_offset = 20;
  let y_offset = 40;
  let step;

  p.setup = function () {
    p.createCanvas(400, 400); // gallery-friendly size
    p.frameRate(20);
  };

  p.draw = function () {

    p.background(255, 0, 120);

    p.stroke(
      p.random(220, 255),
      p.random(120, 200),
      p.random(180, 255)
    );

    p.strokeWeight(p.random(2, 5));

    step = p.random(10, 50);

    // vertical lines
    for (let x = x_offset; x < p.width - x_offset; x += step) {

      let y1 = p.random(0, p.height);
      let y2 = p.random(0, p.height);

      p.line(x, y1, x, y2);
      p.circle(x, y1, 5);
      p.circle(x, y2, 5);
    }

    // horizontal lines
    for (let y = y_offset; y < p.height - y_offset; y += step) {

      let z1 = p.random(0, p.width);
      let q2 = p.random(0, p.width);

      p.line(z1, y, q2, y);
      p.circle(z1, y, 5);
      p.circle(q2, y, 5);
    }

    p.noLoop(); // generates one artwork per refresh
  };

}, "sketch3");