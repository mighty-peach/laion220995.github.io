let vehicleSystem;
let targetSystem;

function setup() {
    createCanvas(1000, 500);
    targetSystem = new TargetSystem(3);
    vehicleSystem = new VehicleSystem(targetSystem, 2, width / 2, height / 2);
    vehicleSystem.create();
}

function draw() {
    createBackground();

    targetSystem.run();
    vehicleSystem.update();
}

function createBackground() {
    background(255);
    fill(200);
    stroke(150);

    // Create border
    line(0, 0, width, 0);
    line(0, 0, 0, height);
    line(0, height - 1, width, height - 1);
    line(width - 1, 0, width - 1, height);

    // Draw target
    stroke(0);
}