let size = 600;
let x;
let y;
let walkers = [];

let cat;
let col;

function preload(){
    cat = loadImage('/assets/cat.jpg');
}

function setup() {
    createCanvas(size, size - 200);
    background(255);
    rect(0, 0, width - 1, height - 1);
    x = width / 2;
    y = height / 2;
    for (let i = 0; i < 50; i++) {
        walkers.push(new Walker(x, y, width, height, 2));
    }
};

function draw() {

    walkers.forEach((walker) => {
        loadPixels();
        let pixel = walker.getPixels();
        col = color(cat.get(pixel[0], pixel[1]));
        stroke(col);
        walker.walk();
        walker.display();
    });
}
