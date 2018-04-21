class Path {
    constructor() {
        this.radius = 20;
        this.points = [];
        this.start = createVector(0, random(height));
        this.end = createVector(width, random(height));
    }

    display() {
        stroke(175);
        strokeWeight(this.radius * 2);
        noFill();
        beginShape();
        this.points.forEach((point) => {
            vertex(point.x, point.y);
        });
        endShape();
        // Draw thin line for center of path
        stroke(0);
        strokeWeight(1);
        noFill();
        beginShape();
        this.points.forEach((point) => {
            vertex(point.x, point.y);
        });
        endShape();
    }

    addPoint(x, y) {
        const point = createVector(x, y);
        this.points.push(point);
    }

    getStart() {
        return this.points[0];
    }

    getEnd() {
        return this.points[this.points.length - 1];
    }
}
