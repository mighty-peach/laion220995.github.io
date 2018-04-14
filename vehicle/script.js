let vehicle;
let target;

function setup() {
    createCanvas(1000, 500);

    vehicle = new Vehicle();
    target = new Target();
}


function draw() {
    // background(255);

    target.display();

    vehicle.setTarget(target.location);
    target.update(vehicle.location, vehicle.size);

    if (target.eat()) {
        vehicle.grow();
    }

    vehicle.run();
}

