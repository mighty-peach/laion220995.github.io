class ParticleSystem {

    constructor() {
        this.particleArray = [];
    }

    run() {
        this.particleArray.push(new Particle(createVector(mouseX, mouseY)));

        this.particleArray.forEach((particle, index) => {

            particle.run();

            if (particle.isDead()) {
                this.particleArray.splice(index, 1);
            }

        });
    }
}