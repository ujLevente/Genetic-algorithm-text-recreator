class Population {

    constructor(populationSize, targetPhrase) {
        this.populationSize = populationSize;
        this.targetPhrase = targetPhrase.split("");
        this.pop = new Array(populationSize);
        this.makeFirstGeneration();
    }

    makeFirstGeneration() {
        for (let i = 0; i < this.populationSize; i++) {
            this.pop[i] = Individual.getRandomIndividual(this.targetPhrase.length);
        }
    }
    
    
}