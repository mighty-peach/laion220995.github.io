class DNA {
    constructor(length) {
        this.length = length;
        this.fitness = 0;
        this.genes = [];

        this.createDNA();
    }

    createDNA() {
        for (let i = 0; i < this.length; i++) {
            this.genes.push(this.newChar());
        }
    }

    newChar() {
        let char = floor(random(63, 122));
        if (char === 63) {
            char = 32;
        } else if (char === 64) {
            char = 46;
        }

        return String.fromCharCode(char);
    }

    calculateFitness(target) {
        let score = 0;
        for (let i = 0; i < this.genes.length; i++) {
            if (target[i] === this.genes[i]) {
                score++;
            }
        }
        this.fitness = score / target.length;
    }

    crossover(partner) {
        let child = new DNA(this.genes.length);

        let midpoint = floor(random(this.genes.length));

        for (let i = 0; i < this.genes.length; i++) {
            if (i > midpoint) child.genes[i] = this.genes[i];
            else child.genes[i] = partner.genes[i];
        }
        return child;
    }

    mutate(mutationRate) {
        for (let i = 0; i < this.genes.length; i++) {
            let rate = random(1);
            if (rate < mutationRate) {
                this.genes[i] = this.newChar();
            }
        }
    }

    getPhrase() {
        return this.genes.join('');
    }
}
