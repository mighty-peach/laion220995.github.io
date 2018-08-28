let vehicles = [];
let flowField;
let debug = true;

function setup() {
    createCanvas(1000, 300);
    document.querySelector('canvas').focus();
    vehicles.push(new Vehicle(10, 20));
    flowField = new FlowField(10);
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

    if (!debug) flowField.display();
    flowField.update();

    // Draw vehicle
    vehicles.forEach((vehicle) => {
        vehicle.run(flowField);
        vehicle.follow(flowField);
    });
}

function keyPressed(event) {
    if (event.key === ' ') {
        debug = !debug;
    }
}

function mouseMoved() {
    vehicles.push(new Vehicle(mouseX, mouseY));
}
