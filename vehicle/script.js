let vehicle;
let targets = [];

function setup() {
    createCanvas(1000, 500);

    vehicle = new Vehicle();

    this.createNewTargets();
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

    // Draw target
    stroke(0);


    /** Только для подсветки ближайшей цели */
    const index = vehicle.getNear(targets);

    targets.forEach((target, targetIndex) => {
        if (targetIndex === index) {
            fill(200, 0, 0, 90);
        } else {
            fill(200);
        }
        target.display();
    });

    // Draw vehicle
    vehicle.run(targets[index].loc);

    if (vehicle.grow(targets[index].loc)) {
        if (targets.length == 1) {
            this.createNewTargets();
        }

        targets.splice(index, 1);
    }
}

function createNewTargets() {
    for (let i = 0; i < 1; i++) {
        targets.push(new Target());
    }
}

function mousePressed() {
    targets.push(new Target(mouseX, mouseY));
}
