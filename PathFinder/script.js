let vehicles = [];
let path;

function setup() {
    createCanvas(1000, 500);

    for (let i = 0; i < 1; i++) {
        vehicles.push(new Vehicle(width / 2, height / 2));
    }

    this.newPath();
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
    strokeWeight(1);
    stroke(0);

    // Draw vehicle
    vehicles.forEach((vehicle) => {
        vehicle.run();
        vehicle.follow(path);
    });
}

function mousePressed() {
    vehicles.push(new Vehicle(mouseX, mouseY));
}

function newPath() {
    path = new Path();
    path.addPoint(-20, height / 2);
    path.addPoint(random(0, width / 2), random(0, height));
    path.addPoint(random(width / 2, width), random(0, height));
    path.addPoint(width + 20, height / 2);
}
