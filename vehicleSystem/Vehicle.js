class Vehicle {
    constructor (fill, size, maxSpeed, maxForce, location, minDist = 100) {
        this.fill = fill;
        this.size = size;

        this.location = location.copy();
        this.isGrowed = false;
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.maxSpeed = maxSpeed;
        this.maxForce = maxForce;
        this.minDist = minDist;
    }

    /**
     * @param {Vector2} target - вектор координат цели
     */
    run(target) {
        let targetCopy = target.copy();
        this.seek(targetCopy);
        this.update();
        this.display();
    }

    update() {
        // Умножаем скорость на ускорение
        this.vel.add(this.acc);
        // Изменяем положение vehicle умножив на скорость
        this.location.add(this.vel);

        // Сбрасываем вектор ускорения во избежание бесконечного ускорения
        this.acc.mult(0);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    /**
     * @param {Vector2} target - вектор координат цели
     */
    seek(target) {
        // Вычисляем желаемое направление
        let desired = p5.Vector.sub(target, this.location);
        let speed = this.maxSpeed;
        // Дистанция между целью и vehicle
        const dist = p5.Vector.dist(this.location, target);

        /**
         * Если дистанция меньше minDist - происходит замедление
         */
        if (dist <= this.minDist) {
            speed = map(dist, 0, this.minDist, 0, this.maxSpeed);
        }

        // Устанавливаем магнитуду для желательного направления
        desired.setMag(speed);

        /**
         * Вычисляем новый вектор силы направления как
         * разницу между желаемым и текущим векторами скорости
         *
         * устанавливаем лимит максимальной силы
         */
        let steering = p5.Vector.sub(desired, this.vel);
        steering.limit(this.maxForce);

        this.applyForce(steering);
    }

    /**
     * Вычисляем пересечение vehicle и target
     *
     * @param {Vector2} target - вектор координат цели
     */
    grow(target) {
        if (
            target.x <= this.location.x + this.size &&
            target.x >= this.location.x - this.size &&
            target.y <= this.location.y + this.size &&
            target.y >= this.location.y - this.size
        ) {
            return true;
        }

        return false;
    }

    changeGrowStatus(isGrowed) {
        this.isGrowed = isGrowed;
    }

    display() {
        const size = this.size;

        // Вычисляем угол поворота
        const theta = this.vel.heading() + PI / 2;

        push();
        translate(this.location.x, this.location.y);
        rotate(theta);
        fill(this.fill);
        triangle(0, -size * 2, -size, size * 2, size, size * 2);
        pop();
    }
}