class FlowField {
    constructor(res) {
        this.res = res;
        this.cols = width / res;
        this.rows = height / res;
        this.field = [];
        this.zoff = 0.0;

        this.init();
    }

    init() {
        noiseSeed(random(10000));

        let xoff = 0;

        for (let i = 0; i < this.cols; i++) {
            let yoff = 0;
            this.field.push([]);

            for (let j = 0; j < this.rows; j++) {
                let theta = map(noise(xoff, yoff), 0, 1, 0, TWO_PI);
                this.field[i][j] = createVector(cos(theta), sin(theta));
                yoff += 0.1;
            }

            xoff += 0.1;
        }
    }

    display() {
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                this.drawVector(
                    this.field[i][j],
                    i * this.res,
                    j * this.res,
                    this.res - 1,
                );
            }
        }
    }

    update() {
        let xoff = 0;
        for (let i = 0; i < this.cols; i++) {
            let yoff = 0;
            for (let j = 0; j < this.rows; j++) {
                let theta = map(noise(xoff, yoff, this.zoff), 0, 1, 0, TWO_PI);
                // Make a vector from an angle
                this.field[i][j] = p5.Vector.fromAngle(theta);
                yoff += 0.1;
            }
            xoff += 0.1;
        }
        // Animate by changing 3rd dimension of noise every frame
        this.zoff += 0.01;
    }

    lookup(lookup) {
        let l = lookup.copy();
        let col = Math.round(constrain(l.x / this.res, 0, this.cols - 1));
        let row = Math.round(constrain(l.y / this.res, 0, this.rows - 1));

        return this.field[col][row];
    }

    drawVector(v, x, y, scayl) {
        push();
        const arrowsize = 4;
        translate(x, y);
        stroke(0, 100);
        rotate(v.heading());
        const len = v.mag() * scayl;
        line(0, 0, len, 0);
        pop();
    }
}
