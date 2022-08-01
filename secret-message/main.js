//SECRET MESSAGE

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//REMOVE LAST STRING OF ARRAY

secretMessage.pop();
// LOG LENGTH OF ARRAY
//console.log(secretMessage.length());

//ADD STRINGS TO END OF ARRAY

secretMessage.push('to','program');

//CHANGE WORD 'easily' TO 'right'

secretMessage[7] = 'right';
//console.log(secretMessage);

//REMOVE FIRST STRING OF ARRAY

secretMessage.shift();
//console.log(secretMessage);

//ADD STRING TO FIRST INDEX OF ARRAY

secretMessage.unshift('Programming');
console.log(secretMessage);

//REMOVE THE STRINGS ['get', 'right', 'the', 'first', 'time'], AND REPLACE WITH THE SINGLE STRING 'know'.

secretMessage.splice(6, 5, 'know');

//PRINT SECRET MESSAGE

console.log(secretMessage.join(' '));
