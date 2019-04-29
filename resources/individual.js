class Individual {

    static get mutationRate() { return 0.01; }
    static get basicFitnessScore() { return 1; }
    static get possibleCharacters() {
        // might switch it to String.toCharcode 
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
    }

    constructor(numOfGenomes) {
        this.genomes = new Array(numOfGenomes);
    }

    static getRandomIndividual(sizeOfTargerPhrase) {
        let individual = new Individual(sizeOfTargerPhrase);

        for (let i = 0; i < sizeOfTargerPhrase; i++) {
            let randomIndex = Math.floor(Math.random() * Individual.possibleCharacters.length);
            individual.genomes[i] = Individual.possibleCharacters[randomIndex];
        }

        return individual;
    }

    crossOver(partner) {
        let child = new Individual(this.genomes.length);
        for (let i = 0; i < this.genomes.length; i++) {
            let randomChanceToMutate = Math.random() <= Individual.mutationRate;

            if (randomChanceToMutate) {
                this.mutateGenome(i, child);
            } else {
                let randomChoice = Math.round(Math.random());
                child.genomes[i] = randomChoice === 0 ? this.genomes[i] : partner.genomes[i];
            }
        }

        return child;
    }

    mutateGenome(indexOfGenome, childToMutate) {
        let randomIndex = Math.floor(Math.random() * Individual.possibleCharacters.length);
        childToMutate.genomes[indexOfGenome] = Individual.possibleCharacters[randomIndex];
    }

    setFitness(targetPhrase) {
        let score = Individual.basicFitnessScore;
        for (let i = 0; i < this.genomes.length; i++) {
            if (this.genomes[i] === targetPhrase[i]) {
                score++;
            }
        }

        this.fitness = Math.pow(score, 2);
    }

    toString() {
        return this.genomes.join("");
    }
}