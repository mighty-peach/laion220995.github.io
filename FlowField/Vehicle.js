class Vehicle {
    constructor(x, y) {
        this.loc = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.r = 3;
        this.maxSpeed = 2;
        this.maxForce = 0.1;
    }

    run() {
        this.borders();
        this.update();
        this.display();
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.loc.add(this.vel);

        this.acc.mult(0);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    display() {
        const r = this.r;

        const theta = this.vel.heading() + PI / 2;
        push();
        translate(this.loc.x, this.loc.y);
        rotate(theta);
        fill(200);
        triangle(0, -r * 2, -r, r * 2, r, r * 2);
        pop();
    }

    follow(flow) {
        let desired = flow.lookup(this.loc).copy();
        desired.mult(this.maxSpeed);

        let steering = p5.Vector.sub(desired, this.vel);
        steering.limit(this.maxForce);
        this.applyForce(steering);
    }

    borders() {
        const r = this.r;

        if (this.loc.x < -r) this.loc.x = width + r;
        if (this.loc.y < -r) this.loc.y = height + r;
        if (this.loc.x > width + r) this.loc.x = -r;
        if (this.loc.y > height + r) this.loc.y = -r;
    }
}
