let sizex = 500;
let sizey = 300;

let mover;

function setup() {
    createCanvas(sizex, sizey);

    mover = new Mover();
    mover1 = new Mover();
};

function draw() {
    background(0);


    let gravity = createVector(0, .6);
    gravity.mult(mover.mass);
    mover.applyForce(gravity);

    let wind = createVector(.2, 0);
    mover.applyForce(wind);

    let c = 10;
    let friction = mover.vel.copy();
    friction.normalize();
    friction.mult(-c);
    mover.applyForce(friction);

    mover.run();

}


class Mover {

    constructor() {
        this.acc = createVector(0, 0);
        this.loc = createVector(100, 30);
        this.vel = createVector(0, 0);
        this.mass = 5;
        this.r = 40;
    }


    run() {
        this.update();
        this.bounce();
        this.display();
    }


    applyForce(force) {
        let resultForce = p5.Vector.div(force, this.mass);
        this.acc.add(resultForce);
    }

    update() {
        this.vel.add(this.acc);
        this.loc.add(this.vel);

        this.acc.mult(0);
    }

    bounce() {
        if (this.loc.x <= 0 || this.loc.x >= width - this.r / 2) {
            this.vel.x *= -1;
        }

        if (this.loc.y <= 5 || this.loc.y >= height - this.r / 2) {
            this.vel.y *= -1;
        }

        if (this.loc.y >= height - this.r / 2) {
            this.loc.y = height - this.r / 2;
        }

    }

    display() {
        rectMode(CENTER);
        ellipse(this.loc.x, this.loc.y, this.r);
    }

}
