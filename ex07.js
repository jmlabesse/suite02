/*

    Current Time

    Write a function "displayCurrentTime" that displays, each seconds, the current time infinitly;

    If the actual time is 10:30:08

    The script displays:

    10:30:09
    10:30:10
    10:30:11
    10:30:12
    10:30:13
    10:30:14
    ...

    One line each seconds.

    Tips:
    setTimeout

    Write your own tests !

*/

// write your code below this comment
function displayCurrentTime() {
    var currentDate = new Date();
    console.log(formatCurrentTime(currentDate));
}

function formatCurrentTime(currentDate) {
    var h = currentDate.getHours();
    var m = currentDate.getMinutes();
    var s = currentDate.getSeconds();
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    var currentTime = h + ':' + m + ':' + s;
    return currentTime;
}

setInterval(displayCurrentTime, 1000);
