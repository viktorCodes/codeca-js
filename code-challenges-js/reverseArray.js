/*
Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

const sentence = ['sense.','make', 'all', 'will', 'This'];
 
reverseArray(sentence); 
// Should return ['This', 'will', 'all', 'make', 'sense.']; */


const reverseArray = arr => {
    let reversed = [];

    for (let i = arr.length - 1; i >= 0; i--){
        reversed.push(arr[i]);
    }
    return reversed
}