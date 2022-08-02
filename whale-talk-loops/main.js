//WHALE TALK

//DECLARE VARIABLES

const input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];

//CREATE A LOOP THAT ITERATES THROUGH EACH LETTER OF THE INPUT VARIALBLE

for(let i = 0; i < input.length; i++){
    // console.log(`input is ${i}`);
    //DOUBLE E'S AND U'S

    if(input[i] === 'e'){
        resultArray.push(input[i])
    }

    if(input[i] === 'u'){
        resultArray.push(input[i])
    }

    //CREATE NESTED FOR LOOP
    for( let v = 0; v < vowels.length; v++){
        //console.log(`vowel is ${v}`);

        //COMPARE INPUT LETTER TO EVERY LETTER IN THE VOWELS ARRAY
        if(input[i] === vowels[v]){
            console.log(input[i])
        }
    }
}

//PRINT/LOG RESULT ARRAY

//console.log(resultArray)

//DECLARE VARIABLE THAT JOINS OUR RESULT ARRAY INTO A SINGLE STRING AND CAPITALIZES ALL LETTERS

const resultString = resultArray.join('').toUpperCase();

//RUN PROGRAM

console.log(resultString);