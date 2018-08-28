class Point {

    constructor(y, size) {
        this.x = 0;
        this.y = y;
        this.size = size;
    }

    init() {
        point(this.x, this.y);
    }

    update() {
        if (this.x !== this.size) {
            this.x++;
        }
        point(this.x, this.y);

        return this.x !== this.size;
    }

}