let pointLines = [];
let image;
let ticker = 1;
const tickLimit = 20;

function preload(){
    sourceImage = loadImage('./img.jpg');
}

function setup() {
    createCanvas(200, 200);
    pixelDensity(1);
    sourceImage.loadPixels();
    loadPixels();

    pointLines.push(new Line(200));
    pointLines[0].init();
    fill(255);
    stroke(255);
}

function draw() {
    background(0);


    pointLines.forEach((pointLine, index) => {
        pointLine.update(sourceImage);

        if (pointLine.isDead()) {
            pointLines.splice(index, 1);
        }
    });

    if (ticker % tickLimit === 0) {
        pointLines[pointLines.length - 1].init();
    }

    ticker++;
}
