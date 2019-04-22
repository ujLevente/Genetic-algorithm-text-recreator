class Individual {

    mutationRate = 0.01;
    
    constructor(numOfGenomes) {
        this.genomes = new Array(numOfGenomes);
    }
    
    static get possibleCharacters() {
        // might switch it to String.toCharcode 
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "; 
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
            let randomChoice = Math.round(Math.random());
            child.genomes[i] = randomChoice === 0 ? this.genomes[i] : partner.genomes[i];
        }
        this.mutate(child);
        
        return child;
    }

    mutate(childToMutate) {

        for (let i = 0; i < childToMutate.genomes.length; i++) {
            let randomChance = Math.random() <= this.mutationRate;
            
            if (randomChance) {
                let randomIndex = Math.floor(Math.random() * Individual.possibleCharacters.length);
                childToMutate[i] = Individual.possibleCharacters[randomIndex];
            }
        }
    }

    setFittness(targetPhrase) {
        let score = 0;
        for (let i = 0; i < this.genomes.length; i++) {
            if (this.genomes[i] === targetPhrase[i]) {
                score++;
            }
        }

        this.fitness = Math.pow(score, 2);
    }
}