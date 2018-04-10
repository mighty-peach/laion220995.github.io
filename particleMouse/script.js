let particleSystem;

function setup() {
    createCanvas(600, 500);
    particleSystem = new ParticleSystem();
}


function draw() {
    background(0);

    particleSystem.run();
}
