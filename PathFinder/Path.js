class Path {
    constructor() {
        this.radius = 20;
        this.start = createVector(0, random(height));
        this.end = createVector(width, random(height));
    }

    display() {
        const startY = this.start.y;
        const endY = this.end.y;
        const r = this.radius;

        stroke(0);
        line(0, startY, width, endY);
        // secondary line
        stroke(100);
        line(0, startY + r, width, endY + r);
        line(0, startY - r, width, endY - r);
    }
}
