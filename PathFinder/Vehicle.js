class Vehicle {
    constructor(x, y) {
        this.loc = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(random(-2, 2), random(-2, 2));
        this.r = 5;
        this.maxSpeed = random(3, 4);
        this.maxForce = 0.1;
    }

    run() {
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
        this.maxForce = 0.1;

        if (desired.x < 0) {
            desired.x = -1 * desired.x;
            this.maxForce = 0.3;
        }

        let speed = this.maxSpeed;
        const dist = p5.Vector.dist(this.loc, target);

        if (dist <= 100 && dist >= 30) {
            speed = map(dist, 0, 100, 0, this.maxSpeed);
        }

        if (speed <= 1.5) {
            speed = this.maxSpeed;
        }

        desired.setMag(speed);

        let steering = p5.Vector.sub(desired, this.vel);
        steering.limit(this.maxForce);

        this.applyForce(steering);
    }

    follow(path) {
        let predict = this.vel.copy();
        let currentLoc = this.loc.copy();
        predict.normalize();
        predict.mult(50);

        let predictPos = currentLoc.add(predict);

        let target = createVector(0, 0);
        let normal = createVector(0, 0);
        let record = 100000000;

        for (let i = 0; i < path.points.length - 1; i++) {
            const start = path.points[i].copy();
            const end = path.points[i + 1].copy();

            let normalVector = this.getNormalPoint(
                predictPos.copy(),
                start.copy(),
                end.copy(),
            );

            if (normalVector.x < start.x || normalVector.x > end.x) {
                // This is something of a hacky solution, but if it's not within the line segment
                // consider the normal to just be the end of the line segment (point b)
                normalVector = end;
            }

            let distance = p5.Vector.dist(predictPos, normalVector);

            if (distance < record) {
                record = distance;
                normal = normalVector;

                let dir = p5.Vector.sub(end, start);
                dir.normalize();
                dir.mult(10);

                target = normalVector.copy().add(dir);
            }
        }

        if (record > path.radius) {
            this.seek(target);
        }

        this.borders(path);
    }

    getNormalPoint(p, a, b) {
        let ap = p.sub(a);
        let ab = b.sub(a);
        ab.normalize();

        const c = ap.dot(ab);
        ab.mult(c);

        a.add(ab);
        return a;
    }

    borders(p) {
        if (this.loc.x > width + this.r) {
            this.loc.x = p.getStart().x - this.r;
            this.loc.y = p.getStart().y + (this.loc.y - p.getEnd().y);
        }
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
