class Vehicle {
    constructor() {
        this.loc = createVector(width / 2, height / 2);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.r = 6;
        this.maxSpeed = 6;
        this.maxForce = 0.3;
    }

    run(target) {
        this.seek(target);
        this.update();
        this.display();
    }

    update() {
        this.vel.add(this.acc);
        this.loc.add(this.vel);

        this.acc.mult(0);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    seek(target) {
        let desired = p5.Vector.sub(target, this.loc);
        desired.setMag(this.maxSpeed);

        let steering = p5.Vector.sub(desired, this.vel);
        steering.limit(this.maxForce);

        this.applyForce(steering);
    }

    display() {
        const r = this.r;

        const theta = this.vel.heading() + PI / 2;
        push();
        translate(this.loc.x, this.loc.y);
        rotate(theta);
        triangle(0, -r * 2, -r, r * 2, r, r * 2);
        pop();
    }
}
