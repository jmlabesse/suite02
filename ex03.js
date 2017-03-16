/*

    Two ways currency converter

    1) Write one function "numberToPrice" that convert a number to a price.

        If we got the number 4 in parameter,
        you need to return a string that contain "4,00€";

    2) Write a second function "priceToNumber" that convert a price to a number.

        If we got the string "4,59€" in parameter,
        you need to return a float number that is equal to 4.59;

    3) If we pass an empty string or negative number, return 0 or empty string;

    Is 0 positive or negative ?

    Write your own tests !

*/

// write your code below this comment
function numberToPrice(number) {
    return (number < 0) ? "" : number.toFixed(2).replace(".", ",") + "€";
}

function priceToNumber(price) {
    return (price.length === 0) ? 0 : parseFloat(price.replace(",", "."));
}

console.log(numberToPrice(4));          //should return "4,00€"
console.log(priceToNumber("4,59€"));    //should return 4.59
console.log(numberToPrice(-5));         //should return ""
console.log(priceToNumber(""));         //should return 0