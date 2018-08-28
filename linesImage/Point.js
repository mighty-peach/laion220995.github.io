class Point {

    constructor(y, size) {
        this.x = 1;
        this.y = y;
        this.size = size;
    }

    init() {
        point(this.x, this.y);
    }

    update(speed) {
        if (this.x !== this.size) {
            this.x += speed;
        }
        point(this.x, this.y);

        return this.x !== this.size;
    }

    getPixel() {
        return [this.x, this.y];
    }

}