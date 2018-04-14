class Target {

    constructor() {
        this.size = 10;
        this.check = false;
        this.location = createVector(random(0, width), random(0, height))
    }

    update(vehicle, size) {
        const s = size / 2;
        if (
            vehicle.x >= this.location.x - s
            && vehicle.x <= this.location.x + s
            && vehicle.y <= this.location.y + s
            && vehicle.y >= this.location.y - s
            ) {
            this.location = createVector(random(0, width), random(0, height))
            this.check = true;
        } else {
            this.check = false;
        }
    }

    eat() {
        return this.check;
    }

    display() {
        ellipse(this.location.x, this.location.y, this.size);
    }

}