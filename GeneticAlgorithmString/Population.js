class Population {
    constructor(target, maxPop, mutationRate) {
        this.target = target;
        this.length = target.length;
        this.maxPop = maxPop;
        this.mutationRate = mutationRate;
        this.matingPool = [];
        this.population = [];
        this.generations = 0;
        this.best = '';
        this.finished = false;
        this.perfectScore = 1;

        this.createPopulation();
        this.calculateFitness();
    }

    /**
     * Create population
     */
    createPopulation() {
        for (let i = 0; i < this.maxPop; i++) {
            this.population.push(new DNA(this.length));
        }
    }

    /**
     * Calculate fitness of population
     */
    calculateFitness() {
        for (let i = 0; i < this.population.length; i++) {
            this.population[i].calculateFitness(this.target);
        }
    }

    /**
     * Create mating poll
     */
    naturalSelection() {
        this.matingPool = [];

        let maxFitness = 0;
        for (let i = 0; i < this.population.length; i++) {
            if (this.population[i].fitness > maxFitness) {
                maxFitness = this.population[i].fitness;
            }
        }

        for (let i = 0; i < this.population.length; i++) {
            let fitness = map(this.population[i].fitness, 0, maxFitness, 0, 1);
            let n = floor(fitness * 100);
            if (!n && n !== 0) {
                n = 1;
            }
            for (let j = 0; j < n; j++) {
                this.matingPool.push(this.population[i]);
            }
        }
    }

    /**
     * Generate new population
     */
    generate() {
        for (let i = 0; i < this.population.length; i++) {
            let a = floor(random(this.matingPool.length));
            let b = floor(random(this.matingPool.length));

            let partnerA = this.matingPool[a];
            let partnerB = this.matingPool[b];

            let child = partnerA.crossover(partnerB);
            child.mutate(this.mutationRate);
            this.population[i] = child;
        }
        this.generations++;
    }

    evaluate() {
        let worldrecord = 0.0;
        let index = 0;
        for (let i = 0; i < this.population.length; i++) {
            if (this.population[i].fitness > worldrecord) {
                index = i;
                worldrecord = this.population[i].fitness;
            }
        }

        this.best = this.population[index].getPhrase();
        if (worldrecord === this.perfectScore) {
            this.finished = true;
        }
    }

    isFinished() {
        return this.finished;
    }

    getBest() {
        return this.best;
    }

    getGenerations() {
        return this.generations;
    }

    getAverageFitness() {
        let total = 0;
        for (let i = 0; i < this.population.length; i++) {
            total += this.population[i].fitness;
        }
        return total / this.population.length;
    }

    allPhrases() {
        let everything = '';

        let displayLimit = min(this.population.length, 50);

        for (let i = 0; i < displayLimit; i++) {
            everything += this.population[i].getPhrase() + '<br>';
        }

        return everything;
    }
}
