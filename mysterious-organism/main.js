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
        //mutate function
        mutate(){}
    }

}