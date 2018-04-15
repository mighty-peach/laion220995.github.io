class Target {
    constructor() {
        this.loc = createVector(random(0, width), random(0, height));
    }

    display() {
        ellipse(this.loc.x, this.loc.y, 10);
    }
}
