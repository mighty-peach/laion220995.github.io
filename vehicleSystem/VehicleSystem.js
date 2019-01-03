class VehicleSystem {
    constructor (targetSystem, vechicleCount, startLocationX, startLocationY) {
        this.targetSystem = targetSystem;
        this.vechicleCount = vechicleCount;
        this.startLocationX = startLocationX;
        this.startLocationY = startLocationY;
        this.vechicles = {};
    }

    create() {
        for (let i = 0; i < this.vechicleCount; i++) {
            const locationX = this.startLocationX + random(-1 * width / 3, width / 3);
            const locationY = this.startLocationY + random(-1 * height / 3, height / 3);
            const size = random(2, 4);
            const maxSpeed = random(2, 3);
            const maxForce = random(.03, .05);
            const minDist = random(80, 100);
            this.vechicles[i] = new Vehicle(
                200,
                size,
                maxSpeed,
                maxForce,
                createVector(locationX, locationY),
                minDist,
            );
        }
    }

    update() {
        for (let i = 0; i < Object.keys(this.vechicles).length; i++) {
            const foundTarget = this.getDesiredDist(this.vechicles[i].location, this.targetSystem.targets);
            const targetLocation = this.targetSystem.targets[foundTarget.index].location;
            this.vechicles[i].run(targetLocation)

            if (this.vechicles[i].grow(targetLocation)) {
                this.targetSystem.deleteTarget(foundTarget.index)
            }
        }
    }

    getDesiredDist(vechicleLocation, targets) {
        return targets.reduce((minDist, target, index) => {
            const dist = p5.Vector.dist(vechicleLocation, target.location);
            if (minDist.dist < 0 || minDist.dist > dist) {
                minDist = {
                    dist,
                    index
                }
            }

            return minDist;
        }, { dist: -1, index: -1 });
    }
}
