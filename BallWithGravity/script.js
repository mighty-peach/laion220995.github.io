let sizex = 500;
let sizey = 500;

let m;
let t = 0;

function setup() {
    createCanvas(sizex, sizey);
    m = new Mover();
    background(255);
};

function draw() {
    stroke(0);

    for (let i = 0; i <= width; i += random(17)) {
        line(0, i, width, i);
    }
    for (let j = 0; j <= width; j += random(17)) {
        line(j, 0, j, height);
    }


    let windX = noise(t);
    windX = map(windX, 0, 1, -0.3, 0.3);

    t += .005;

    let gravity = createVector(0, 0.3);
    m.applyForce(gravity);

    let wind = createVector(windX, 0);
    m.applyForce(wind);

    m.run();

    stroke(255)
    windX *= 500
    line(width / 2, 50, windX + width / 2, 50)


}


class Mover {

    constructor() {
        this.acc = createVector(0, 0);
        this.loc = createVector(width / 2, height / 2);
        this.vel = createVector(0, 0);
    }


    run() {
        this.update();
        this.bounce();
        this.display();
    }


    applyForce(force) {
        this.acc.add(force);
    }

    update() {
        this.vel.add(this.acc);
        this.loc.add(this.vel);

        this.acc.mult(0);
    }

    bounce() {
        if (this.loc.x <= 0 || this.loc.x >= width) {
            this.vel.x *= -1;
        }

        if (this.loc.y <= 5 || this.loc.y >= height - 5) {
            this.vel.y *= -1;
        }

    }

    display() {
        rectMode(CENTER);
        rect(this.loc.x, this.loc.y, 10, 10);
    }

}
