class Population {

    constructor(populationSize, targetPhrase) {
        this.populationSize = populationSize;
        this.targetPhrase = targetPhrase.split("");
        this.genePool = new Array(populationSize);
    }
    
    makeFirstGeneration() {
        for (let i = 0; i < this.populationSize; i++) {
            this.genePool[i] = Individual.getRandomIndividual(this.targetPhrase.length);
        }
    }
    
    evolve() {
        this.generationCount = 0;
        this.makeNewGeneration();
        
        let idealFitnessScore = Math.pow(this.targetPhrase.length + Individual.basicFitnessScore, 2);
        while (this.fittestElement.fitness !== idealFitnessScore) {
            this.makeNewGeneration();
        }
        
        console.log(this.fittestElement, this.generationCount, idealFitnessScore);
    }

    makeNewGeneration() {
        if (this.generationCount == 0)
            this.makeFirstGeneration();

        let sum = 0;
        this.fittestElement = this.genePool[0];
        
        for (let individual of this.genePool) {
            
            individual.setFitness(this.targetPhrase);
            sum += individual.fitness;
                
            if (individual.fitness > this.fittestElement.fitness)
                this.fittestElement = individual;
        }
        
        let nextGeneration = new Array(this.genePool.length);
        
        for (let i = 0; i < this.genePool.length; i++) {
            let parent1 = this.pickFromGenePool(sum);
            let parent2 = this.pickFromGenePool(sum);
            
            let child = parent1.crossOver(parent2);
            nextGeneration[i] = child;
        }
        
        this.genePool = nextGeneration;
        this.generationCount++;
    }

    pickFromGenePool(sumOfFittnesses) {
        let random = Math.floor(Math.random() * sumOfFittnesses + 1);
        
        let index = - 1;
        while (random > 0) {
            index++;
            random -= this.genePool[index].fitness;
        }
        
        return this.genePool[index];
    }

}