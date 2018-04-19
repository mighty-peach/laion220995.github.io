let vehicle;
let path;

function setup() {
    createCanvas(1000, 500);

    vehicle = new Vehicle();
    path = new Path();
}

function draw() {
    background(255);
    fill(200);
    stroke(150);

    // Create border
    line(0, 0, width, 0);
    line(0, 0, 0, height);
    line(0, height - 1, width, height - 1);
    line(width - 1, 0, width - 1, height);

    path.display();

    // Draw target
    stroke(0);

    // Draw vehicle
    vehicle.run();
}
