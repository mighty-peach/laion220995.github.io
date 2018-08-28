class Line {

    constructor(size) {
        this.size = size;
        this.points = [];
    }

    init() {
        for (let i = 0; i < this.size; i++) {
            const point = new Point(i, this.size);
            point.init();
            this.points.push(point);
        }
    }

    update() {
        this.points.forEach((point, index) => {
            const isUpdated = point.update();
            if (!isUpdated) {
                this.points.splice(index, 1);
            }
        });
    }

    isDead() {
        return this.points.length === 0;
    }
}