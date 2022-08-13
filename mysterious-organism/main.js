//RETURNS A RANDOM DNA BASE

const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)]
}

//RETURNS A RANDOM SINGLE STRAND OF DNA CONTAINING 15 BASES

const mockUpStrand = () => {
    const newStrand = [];
    for(let i = 0; i < 15; i++){
        newStrand.push(returnRandBase())
    }
    return newStrand
}

//CREATE FACTORY

const pAequorFactory = (specimanNum, dna) => {

    return{
        specimanNum,
        dna,
        //mutate dna function
        mutate(){
            const randIndex = (Math.floor(Math.random() * this.dna.length));
            let newBase = returnRandBase();
            while(this.dna[randIndex] === newBase) {
                newBase = returnRandBase();
            }
            this.dna[randIndex] = newBase;
            return this.dna;
        },
        //compare Dna function
        compareDNA(otherOrg) {

            const similarities = this.dna.reduce((acc, curr, idx, arr) => {
                if(arr[idx] === otherOrg.dna[idx]) {
                    return acc + 1;
                } else {
                    return acc;
                }
            }, 0);
            const percentOfDNAshared = (similarities / this.dna.length) * 100;
            const percentageTo2Deci = percentOfDNAshared.toFixed(2);
            console.log(`${this.specimanNum} and ${otherOrg.specimanNum} have ${percentageTo2Deci}% DNA in common.`);
        },
        //will likely survive

        willLikelySurvive () {
            const cOrG = this.dna.filter(el => el === "C" || el === "G");
            return cOrG.length / this.dna.length >= 0.6;

        },
    }

};

//surviving specimen

const survivingSpecimen = [];
let idCounter = 1;

while(survivingSpecimen.length < 30) {
    let newOrg = pAequorFactory(idCounter, mockUpStrand());
    if(newOrg.willLikelySurvive()){
        survivingSpecimen.push(newOrg);
    }
    idCounter++;
}

