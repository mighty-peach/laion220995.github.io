class Walker {
    constructor(x, y, width, height, length) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.prevx = x;
        this.prevy = y;
        this.length = length;
    }

    walk() {
        let x = this.x;
        let y = this.y;

        let coords = this.getCoords(x, y);

        x = coords[0];
        y = coords[1];

        this.x = constrain(x, 0, this.width - 1);
        this.y = constrain(y, 0, this.height - 1);
    }

    getCoords(x, y) {
        let x1 = x;
        let y1 = y;

        let choice = floor(random(4));

        if (choice == 0) {
            x += this.length;
        } else if (choice == 1) {
            x -= this.length;
        } else if (choice == 2) {
            y += this.length;
        } else {
            y -= this.length;
        }

        return [x, y];
    }

    getPixels() {
        return [this.x, this.y];
    }

    display() {
        line(this.prevx, this.prevy, this.x, this.y);
        this.prevx = this.x;
        this.prevy = this.y;
    }

}