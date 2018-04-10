class ParticleSystem {

    constructor(x, y) {
        this.particleArray = [];
        this.x = x;
        this.y = y;
    }

    run() {
        this.particleArray.push(new Particle(createVector(this.x, this.y)));

        this.particleArray.forEach((particle, index) => {

            particle.run();

            if (particle.isDead()) {
                this.particleArray.splice(index, 1);
            }

        });
    }

    applyForce(force, forceName) {
        this.particleArray.forEach((particle, index) => {
            particle.applyForce(force, forceName);
        });
    }
}