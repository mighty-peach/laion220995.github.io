class TargetSystem {
    constructor (maxTargets) {
        this.maxTargets = maxTargets;
        this.targets = [];
    }

    run() {
        if (this.targets.length < this.maxTargets) {
            this.update();
        }

        this.display();
    }

    update() {
        for (let i = 0; i < this.maxTargets && this.targets.length !== this.maxTargets; i++) {
            const targetX = random(width / 10, width - (width / 10));
            const targetY = random(height / 10, height - (height / 10));
            const size = random(5, 8);
            const target = new Target(createVector(targetX, targetY), size, 220);
            this.targets.push(target);
        }
    }

    deleteTarget(index) {
        this.targets.splice(index, 1);
    }

    display() {
        this.targets.forEach(target => target.display());
    }
}