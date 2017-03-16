/*

    Smallest Multiple

    2520 is the smallest number that can be divided by each of the numbers
    from 1 to 10 without any remainder.

    What is the smallest positive number that is
    evenly divisible by all of the numbers from 1 to 20?

    Write a function "smallestMultipleFor" that solves this problem.

    Write your own tests !
    
*/

// write your code below this comment
function multiplyValues(array) {
    var result=1;
    for (let value of array) {
        result *= value;
    }
    return result;
}

function smallestMultipleFor(limitNumber) {

    var smallest = 1;
    var valuesToMultiply = [];

    for (let number = 2; number <= limitNumber; number++) {
        var numberDiv = number;
        for (let nb of valuesToMultiply) {
            if (numberDiv % nb === 0 && numberDiv!==1) {
                numberDiv = numberDiv / nb;
            }
        }
        valuesToMultiply.push(numberDiv);
    }

    return multiplyValues(valuesToMultiply);
}

console.log(smallestMultipleFor(10));   //should return 2520
console.log(smallestMultipleFor(20));   