class Target {
    constructor(x, y) {
        this.loc = createVector(x || random(0, width), y || random(0, height));
    }

    display() {
        ellipse(this.loc.x, this.loc.y, 10);
    }
}
