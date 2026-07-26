new p5(function (p) {

    p.setup = function () {
        p.createCanvas(400, 400);
    };

    p.draw = function () {
        p.background(220);

        p.circle(
            p.mouseX,
            p.mouseY,
            40
        );
    };

}, "sketch1");