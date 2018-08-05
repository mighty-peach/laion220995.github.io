let particleSystem;
let slider;

function setup() {
    slider = createSlider(-0.03, 0.02, -0.01, 0.001);
    slider.position(20, 40);
    slider.style('width', '80px');

    createCanvas(600, 500);
    particleSystem = new ParticleSystem(width / 2, 380);
}


function draw() {
    background(0);

    let value = slider.value();
    let gravity = createVector(0, -1 * value);

    particleSystem.applyForce(gravity, 'gravity');

    particleSystem.run();
}
