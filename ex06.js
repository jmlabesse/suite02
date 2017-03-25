
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

    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j + 1] < array[j]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

console.log(bubbleSort([8, 3, 0]));
console.log(bubbleSort([8, 3, 0, 1, 7, 4, 6, 12, 0, 5, 5]));
