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

// PhoneForm
function sendForm(e){

	// получаем значение поля key
	var keyBox = document.search.key;
	var exp = /^\+\d+ ?\(\d+\) ?\d+[ -]?\d+[ -]?\d+/;
	var val = keyBox.value;
	if(exp.test(val)){
		alert("Браво! Номер указан верно.");
	}
	else
		alert("Номер введен некорректно!");
		e.preventDefault();
}

var sendButton = document.search.send;
sendButton.addEventListener("click", sendForm);

// SelectForm
var sensor = sensorsSelection.sensor.options[1];
var sensorParams = {
	index: sensor.index,
	text: sensor.text,
	value: sensor.value,
}
sensor = sensorsSelection.parentNode;
for (var key in sensorParams) {
	var writer = document.createElement("p");
	writer.textContent = sensorParams[key];
	sensor.appendChild(writer);
}

console.log(sensor.nodeName);

// requestAnimationFrame
/*var square = document.getElementById("rect");
var angle = 0;
function rotate() {
	angle = (angle + 1)%360;
	square.style.transform = "rotate(" + angle + "deg)";
	window.requestAnimationFrame(rotate);
}
var id = window.requestAnimationFrame(rotate);
console.log(id);*/

/*var start = null;
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

window.requestAnimationFrame(step);*/