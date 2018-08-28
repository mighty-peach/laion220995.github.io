let pointLines = [];
const tickLimit = 20;
let ticker = 0;

function setup() {
    createCanvas(200, 200);

    pointLines.push(new Line(200));
    pointLines[0].init();
}

function draw() {
    background(0);

    fill(255);
    stroke(255);


    pointLines.forEach((pointLine, index) => {
        pointLine.update();

        if (pointLine.isDead()) {
            pointLines.splice(index, 1);
        }
    });

    if (ticker === tickLimit) {
        pointLines[pointLines.length - 1].init();
        ticker = 0;
    } else {
        ticker++;
    }
}
