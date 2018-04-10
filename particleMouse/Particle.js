class Particle {

    constructor (location) {
        this.acceloration = createVector(0, random(0.1, 0.3));
        this.velocity = createVector(random(-1, 1), random(-1, 1));
        this.location = location;
        this.radius = 10;
        this.lifespan = 255;
    }

    run () {
        this.update();
        this.display();
    }

    isDead () {
        if (this.lifespan <= 0) {
            return true;
        }

        return false;
    }

    update () {
        this.velocity.add(this.acceloration);
        this.location.add(this.velocity);

        if (!this.isDead()) {
            this.lifespan -= 3;
        }
    }

    display () {
        noStroke();
        fill(255, this.lifespan);
        ellipse(this.location.x, this.location.y, this.radius);
    }
}