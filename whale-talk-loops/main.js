//WHALE TALK

//DECLARE VARIABLES

const input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];

//CREATE A LOOP THAT ITERATES THROUGH EACH LETTER OF THE INPUT VARIALBLE

for(let i = 0; i < input.length; i++){
    // console.log(`input is ${i}`);

    //CREATE NESTED FOR LOOP
    for( let v = 0; v < vowels.length; v++){
        //console.log(`vowel is ${v}`);

        //COMPARE INPUT LETTER TO EVERY LETTER IN THE VOWELS ARRAY
        if(input[i] === vowels[v]){
            console.log(input[i])
        }
    }
}