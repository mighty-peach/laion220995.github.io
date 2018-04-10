let particleSystem;

function setup() {
    createCanvas(600, 500);
    particleSystem = new ParticleSystem(width / 2, 380);
}


function draw() {
    background(0);

    // let gravity = createVector(0, 0.01);

    // particleSystem.applyForce(gravity, 'gravity');

    particleSystem.run();
}
