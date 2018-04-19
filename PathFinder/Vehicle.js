class Vehicle {
    constructor() {
        this.loc = createVector(width / 2, height / 2);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, -1);
        this.r = 6;
        this.maxSpeed = 4;
        this.maxForce = 0.1;
    }

    run() {
        // this.seek();
        this.update();
        this.display();
    }

    update() {
        this.checkPredict();

        this.vel.add(this.acc);
        this.loc.add(this.vel);

        this.acc.mult(0);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    seek(target) {
        let desired = p5.Vector.sub(target, this.loc);
        let speed = this.maxSpeed;
        const dist = p5.Vector.dist(this.loc, target);

        if (dist <= 100) {
            speed = map(dist, 0, 100, 0, this.maxSpeed);
        }

        desired.setMag(speed);

        let steering = p5.Vector.sub(desired, this.vel);
        steering.limit(this.maxForce);

        this.applyForce(steering);
    }

    checkPredict() {
        let predict = this.vel.copy();
        let currentLoc = this.loc.copy();
        predict.normalize();
        predict.mult(50);

        let predictPos = currentLoc.add(predict);
        line(this.loc.x, this.loc.y, predictPos.x, predictPos.y);
        ellipse(predictPos.x, predictPos.y, 5, 5);
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
}
