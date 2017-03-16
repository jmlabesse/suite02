
/*

    Bubble sort

    Write a function "bubbleSort".

    The function takes and sorts an array.

    The array contains only positive numbers.

    Exemple:
    [8, 3, 0] -> [0, 3, 8]

    Forbidden functions:
    sort

    Tips:
    use google

    Write your own tests !
    
*/

// write your code below this comment
function bubbleSort(array) {
    var sortedArray = [];

    while (array.length > 0) {
        var ind = minValueIndex(array);
        sortedArray.push(array[ind]);
        array.splice(ind, 1);
    }
    return sortedArray;
}

function minValueIndex(array) {
    var min = array[0];
    var minIndex = 0;
    for (index in array) {
        if (array[index] < min) {
            min = array[index];
            minIndex = index;
        }
    }
    return minIndex;
}

console.log(bubbleSort([8, 3, 0]));
console.log(bubbleSort([8, 3, 0, 1, 7, 4, 6, 12, 0, 5, 5]));
