/*

    search Area

    We give you a map, in array like:

    [
        "xxxxxxxxxxx",
        "xxxx...x..x",
        "xxxx...x..x",
        "xxxx...xxxx",
        "xxxxxxx..xx",
        "xx..xxxxxxx",
        "xx..xxxx.xx",
        "x...xxxx..x",
        "xxxxxxx..xx",
        "xx.x.xx..xx",
        "xxxxxxxxxxx"
    ]

    You need to find the biggest square we can draw in the map, by replace '.' in strings.
    The square size and square map can be various, and will be random at correction.

    '.' is for a free space.
    'x' is for walls.
    'o' is for the square resolution/composition.

    We expect that array in return:

    [
        "xxxxxxxxxxx",
        "xxxxooox..x", // here is 
        "xxxxooox..x", // a square
        "xxxxoooxxxx", // with 3x3 dimension
        "xxxxxxx..xx",
        "xx..xxxxxxx", // here is 
        "xx..xxxx.xx", // a square dimension 2x2 but not the biggest
        "x...xxxx..x",
        "xxxxxxx..xx",
        "xx.x.xx..xx",
        "xxxxxxxxxxx"
    ]

    There is only one possibility in this exemple. If there is more than one, take the last.

    Tips:
    Test your own maps !

*/

// write your own code below this comment
const freeSpace = ".";
const replaceChar = "O";

function findSquare(map) {
    var wallChar = findWallChar(map);
    var maxSize = 1;
    var biggestSquares = [];

    for (let line = 0; line < map.length; line++) {
        var currentLine = map[line];

        for (let column = 0; column < currentLine.length; column++) {
            var currentPoint = currentLine[column];

            if (currentPoint === freeSpace) {

                var nextWallPos = currentLine.indexOf(wallChar, column);
                var squareEnd = nextWallPos < 0 ? currentLine.length : nextWallPos;
                var maxSquareSize = squareEnd - column;

                for (let size = maxSquareSize; size >= maxSize; size--) {
                    var oneBigSquare = {
                        startX: column,
                        startY: line,
                        size: size
                    }
                    if (isPureSquare(map, oneBigSquare)) {
                        biggestSquares.push(oneBigSquare);
                        maxSize = size;
                    }
                }
            }
        }
    }
    replaceFreeSpace(map, biggestSquares[biggestSquares.length - 1]);
    return map;
}

function isPureSquare(map, square) {
    if (square.startY + square.size > map.length) {
        return false;
    }
    for (let y = square.startY + 1; y < square.startY + square.size; y++) {
        for (let x = square.startX; x < square.startX + square.size; x++) {
            if (map[y][x] !== freeSpace) {
                return false;
            }
        }
    }
    return true;
}

function replaceFreeSpace(map, square) {
    if (typeof square !== "undefined") {
        for (let y = square.startY; y < square.startY + square.size; y++) {
            map[y] = replaceSubStrAt(map[y], square.startX, square.size);
        }
    }
}

function replaceSubStrAt(string, start, length) {
    return string.substr(0, start) + replaceChar.repeat(length) + string.substr(start + length);
}

function findWallChar(map) {
    for (let line of map) {
        for (let column of line) {
            if (column != '.') {
                return column;
            }
        }
    }
    return ' ';
}

var mapTest1 = [
    "xxxxxxxxxxx",
    "xxxx...x..x",
    "xxxx...x..x",
    "xxxx..xxxxx",
    "xxxxxxx..xx",
    "xx..xxxxxxx",
    "xx..xxxx.xx",
    "x...xxxx..x",
    "xxxxxxx..xx",
    "xx.x.xx..xx",
    "xxxxxxxxxxx"
];

var mapTest2 = [
    "xxxxxxxxxxx",
    "xxxx...x..x",
    "xxxx...x..x",
    "xxxx...xxxx",
    "xxxxxxx..xx",
    "x....xxxxxx",
    "x...xxxx.xx",
    "x...xxxx..x",
    "xxxxxxx..xx",
    "xx.x.xx..xx",
    "xxxxxxxxxxx"
];
var mapTest3 = [
    "xxxxxxxxxxx",
    "xxxxxxxxxxx",
    "..xxxxxxxxx",
    "..xxxxxxxxx",
    "xxxxxxxxxxx",
    "xxxxxxxxxxx",
    "xxxxxxxxxxx",
    "xxxxxxxxxxx",
    "xxxxxxxxxxx",
    "xxxxxxxxxxx"
];

var mapTest4 = [
    "..xxxxxxxxx",
    "..xxxxxxxxx",
    "..xxxxxxxxx",
    "..xxxxxxxxx",
    "xxxxxxxxxxx",
    "xxxxxxxxxxx",
    "xxxxxxxxxxx",
    "xxxxxxxx...",
    "xxxxxxxx...",
    "xxxxxxxx..."
];
var mapTest5 = [
    "...........",
    "...........",
    "...........",
    "...........",
    "...........",
    "...........",
    "...........",
    "...........",
    "...........",
    "..........."
];
var mapTest6 = [
    "xxxxxxxxxxx",
    "xxxxxxxxxxx",
    "xxxxxxxxxxx",
    "xxxxxxxxxxx",
    "xxxxxxxxxxx",
    "xxxxxxxxxxx",
    "xxxxxxxxxxx",
    "xxxxxxxxxxx",
    "xxxxxxxxxxx",
    "xxxxxxxxxxx"
];
var mapTest7 = [
    '##########',
    '#.##.....#',
    '#..#..#.##',
    '#....##..#',
    '###..#.###',
    '#...#....#',
    '#...#....#',
    '#........#',
    '####....##',
    '##########'
]
var mapTest8 = [
    '##########',
    '###......#',
    '#........#',
    '#....#.###',
    '##......##',
    '#.#......#',
    '#..#.#.#.#',
    '#......#.#',
    '#.##.#...#',
    '##########'
]

var mapTest9 = [
    '##########',
    '#.##..##.#',
    '##.......#',
    '#..#.....#',
    '###....#.#',
    '#..#...#.#',
    '#...#....#',
    '#.......##',
    '#.#..#.#.#',
    '##########'
]

console.log(findSquare(mapTest1));
console.log(findSquare(mapTest2));
console.log(findSquare(mapTest3));
console.log(findSquare(mapTest4));
console.log(findSquare(mapTest5));
console.log(findSquare(mapTest6));
console.log(findSquare(mapTest7));
console.log(findSquare(mapTest8));
console.log(findSquare(mapTest9));