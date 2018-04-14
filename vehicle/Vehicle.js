class Vehicle {

    constructor() {
        this.size = 20;
        this.maxSpeed = 15;
        this.maxForce = .02;

        this.target;

        this.location = createVector(random(0, width), random(0, height));
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
    }

    run() {
        this.update();
        this.display();
    }

    update() {
        let desired = p5.Vector.sub(this.target, this.location);
        desired.setMag(this.maxSpeed);

        let steering = p5.Vector.sub(desired, this.velocity);
        steering.limit(this.maxForce);

        this.applyForce(steering);
    }

    grow() {
        this.size += 2;
    }

    applyForce(force) {
        this.acceleration.add(force);
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);

        if (this.location.x >= width) {
            this.location.x = 0;
        } else if (this.location.x <= 0) {
            this.location.x = width;
        } else if (this.location.y <= 0) {
            this.location.y = height;
        } else if (this.location.y >= height) {
            this.location.y = 0;
        }

        this.acceleration.mult(0);
    }

    setTarget(target) {
        this.target = target;
    }

    display() {
        stroke(50);
        fill(255);
        ellipseMode(CENTER);
        ellipse(this.location.x, this.location.y, this.size);
    }
}