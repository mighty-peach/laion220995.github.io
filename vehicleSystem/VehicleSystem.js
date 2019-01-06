class VehicleSystem {
    constructor (targetSystem, vechicleCount, startLocationX, startLocationY) {
        this.targetSystem = targetSystem;
        this.vechicleCount = vechicleCount;
        this.startLocationX = startLocationX + random(width / 3, width / 2);
        this.startLocationY = startLocationY + random(height / 3, height / 2);
        this.startLocation = createVector(this.startLocationX, this.startLocationY);
        this.vechicles = {};
    }

    create() {
        for (let i = 0; i < this.vechicleCount; i++) {
            const size = 2;
            const maxSpeed = 3;
            const maxForce = .07;
            const minDist = 60;
            this.vechicles[i] = new Vehicle(
                200,
                size,
                maxSpeed,
                maxForce,
                this.startLocation,
                minDist,
            );
        }
    }

    update() {
        for (let i = 0; i < Object.keys(this.vechicles).length; i++) {
            const vechicle = this.vechicles[i];
            if (!vechicle.isGrowed) {
                const foundTarget = this.getDesiredDist(vechicle.location, this.targetSystem.targets);
                const targetLocation = this.targetSystem.targets[foundTarget.index].location;
                vechicle.run(targetLocation)

                if (vechicle.grow(targetLocation)) {
                    this.targetSystem.deleteTarget(foundTarget.index)

                    vechicle.changeGrowStatus(true);
                }
            } else {
                vechicle.run(this.startLocation);

                if (vechicle.grow(this.startLocation)) {
                    vechicle.changeGrowStatus(false);
                }
            }
        }

        this.createStartLocaion();
    }

    getDesiredDist(vechicleLocation, targets) {
        const targetDist = targets.reduce((minDist, target, index) => {
            const dist = p5.Vector.dist(vechicleLocation, target.location);
            if (minDist.dist < 0 || minDist.dist > dist) {
                minDist = {
                    dist,
                    index
                }
            }

            return minDist;
        }, { dist: -1, index: -1 });

        return targetDist;
    }

    createStartLocaion() {
        fill([200, 100, 100]);
        ellipse(this.startLocation.x, this.startLocation.y, 5, 5);
    }
}
