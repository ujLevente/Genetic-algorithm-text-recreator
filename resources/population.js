class Population {

    possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";

    constructor(populationSize, targetPhrase) {        
        this.populationSize = populationSize;
        this.targetPhrase = targetPhrase.split("");
        this.pop = new Array(populationSize);
        this.makeFirstPopulation();
    }

    makeFirstPopulation() {
        for (let i = 0; i < this.populationSize; i++) {

            let randomPhrase = new Array(this.targetPhrase.length);
            for (let j = 0; j < this.targetPhrase.length; j++) {
                let randomNum = Math.floor(Math.random() * this.possibleCharacters.length);
                randomPhrase[j] = this.possibleCharacters[randomNum];
            }
            this.pop[i] = randomPhrase;
        }        
    }
    
    
}