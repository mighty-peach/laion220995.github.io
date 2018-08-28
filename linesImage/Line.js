class Line {

    constructor(size) {
        this.size = size;
        this.points = [];
    }

    init() {
        for (let i = 1; i < this.size; i++) {
            const point = new Point(i, this.size);
            point.init();
            this.points.push(point);
        }
    }

    update(sourceImage) {
        this.points.forEach((point, index) => {
            const pixel = point.getPixel();
            const color = sourceImage.get(pixel[0], pixel[1]);

            let normal = (color[0] + color[1] + color[2]) / 3;

            const mappedNormal = map(normal, 0, 255, 1, .2);

            const isUpdated = point.update(mappedNormal);

            if (!isUpdated) {
                this.points.splice(index, 1);
            }
        });
    }

    isDead() {
        return this.points.length === 0;
    }
}