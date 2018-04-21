let population = [];

let target;
let maxPopulation;
let mutationRate;

function setup() {
    target = 'to be or not to be.';
    maxPopulation = 1000;
    mutationRate = 0.01;

    this.createDOM();

    population = new Population(target, maxPopulation, mutationRate);
}
function draw() {
    population.naturalSelection();
    population.generate();
    population.calculateFitness();
    population.evaluate();

    if (population.isFinished()) {
        noLoop();
    }

    this.displayInfo();
}

function createDOM() {
    bestPhrase = createP('Best phrase:');
    bestPhrase.position(10, 10);
    bestPhrase.class('best');

    allPhrases = createP('All phrases:');
    allPhrases.position(600, 10);
    allPhrases.class('all');

    stats = createP('Stats');
    stats.position(10, 200);
    stats.class('stats');
}

function displayInfo() {
    let answer = population.getBest();

    bestPhrase.html('Best phrase:<br>' + answer);

    let statstext =
        'total generations:     ' + population.getGenerations() + '<br>';
    statstext +=
        'average fitness:       ' + nf(population.getAverageFitness()) + '<br>';
    statstext += 'total population:      ' + maxPopulation + '<br>';
    statstext += 'mutation rate:         ' + floor(mutationRate * 100) + '%';

    stats.html(statstext);

    allPhrases.html('All phrases:<br>' + population.allPhrases());
}
