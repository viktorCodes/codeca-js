/*Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.

You can test your function when you’re ready by passing in the years array or by making your own array of years! */

const sortYears = arr => {
    arr.sort((a,b) => b -a)

    return arr
}