class Particle {

    constructor(location) {
        this.acceloration = createVector(0, -.1);
        this.velocity = createVector(random(-0.5, 0.5), -2.8);
        this.location = location;
        this.mass = random(35, 45);
        this.radius = this.mass;
        this.lifespan = 110;
    }

    run() {
        this.update();
        this.display();
    }

    isDead() {
        if (this.lifespan <= 0) {
            return true;
        }

        return false;
    }

    applyForce(force, forceName) {
        let resultForce = force;
        if (forceName !== 'gravity') {
            resultForce = p5.Vector.div(force, this.mass);
        }

        this.acceloration.add(resultForce);
    }

    update() {
        this.velocity.add(this.acceloration);
        this.location.add(this.velocity);

        if (!this.isDead()) {
            this.lifespan -= 4;
        }
    }

    display() {
        const color = this.lifespan;

        fill(255, this.lifespan);

        if (this.lifespan >= 110) {
            let r = map(color, 80, 100, 200, 128);
            let g = map(color, 80, 100, 50, 9);
            let b = map(color, 80, 100, 12, 9);
            fill(r, g, b, this.lifespan);
        } else if (this.lifespan < 110 && this.lifespan >= 50) {
            let r = map(color, 50, 79, 242, 200);
            let g = map(color, 50, 79, 125, 50);
            let b = map(color, 50, 79, 9, 12);
            fill(r, g, b, this.lifespan);
        } else if (this.lifespan < 50 && this.lifespan >= 0) {
            let r = map(color, 0, 49, 120, 242);
            let g = map(color, 0, 49, 120, 125);
            let b = map(color, 0, 49, 120, 9);
            fill(r, g, b, this.lifespan);
        }
        noStroke();
        ellipse(this.location.x, this.location.y, this.radius);
    }
}
