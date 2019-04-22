class Individual {

    mutationRate = 0.01;
    
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
            let randomNum = Math.floor(Math.random() * Individual.possibleCharacters.length);
            individual.genomes[i] = Individual.possibleCharacters[randomNum];
        }

        return individual;
    }


}