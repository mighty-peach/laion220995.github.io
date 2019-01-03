class Target {
    constructor (location, size, fill) {
        this.location = location;
        this.size = size;
        this.fill = fill;
    }

    display () {
        fill(this.fill);
        ellipse(this.location.x, this.location.y, this.size, this.size)
    }
}