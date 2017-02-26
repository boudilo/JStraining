// Callback
function stringbuilder() {
    var string = "";
    for (var i = 0; i < arguments.length; i++) {
        string = string + arguments[i] + " ";
    }

    return (function (replaser) {
        while (string.indexOf(" ") != -1) {
            string = string.trim().replace(" ", replaser);
        }
        return string;
    })("!!!")
}

var fn1 = stringbuilder("sanya", "artik", "maks", "vadik", "dimasik");
console.log(fn1);

// RegExp
var potentialNumber = "+375(29)0-0-0";
var exp = /^\+\d+ ?\(\d+\) ?\d+[ -]?\d+[ -]?\d+/;
var result = exp.test(potentialNumber);
console.log(result);

// requestAnimationFrame
/*var square = document.getElementById("rect");
var angle = 0;
function rotate() {
    angle = (angle + 2)%360;
    square.style.transform = "rotate(" + angle + "deg)";
    window.requestAnimationFrame(rotate);
}
var id = window.requestAnimationFrame(rotate);
console.log(id);*/

var start = null;
var element = document.getElementById('rect');
element.style.position = 'absolute';
var angle = 0;

function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    element.style.left = Math.min(progress / 10, 1000) + 'px';

    angle = (angle + 3) % 360;
    element.style.transform = "rotate(" + angle + "deg)";

    if (progress < 10000) {
        window.requestAnimationFrame(step);
    }
}

window.requestAnimationFrame(step);