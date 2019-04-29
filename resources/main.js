class Main {

    updateDOM() {
        let placeHolderForFittest = document.getElementById("fittest-element");
        placeHolderForFittest.innerText = this.fittestElement.toString();
    }

    setUpEventListener() {
        
        let button = document.getElementById("start-evolve");
        button.addEventListener("click", () => {
            let targetPhrase = document.getElementById("phrase-input").value;
            
            if (targetPhrase) {
                this.population = new Population(150, targetPhrase);
                let callback = setTimeout(this.updateDOM.bind(this.population), 1000);
                this.population.evolve(callback);
            } else {
                alert("No target phrase added");
            }
        });
    }


}

function init() {
    main = new Main();
    main.setUpEventListener();

}

init();
