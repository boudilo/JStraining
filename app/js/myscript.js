// PhoneForm
function sendForm(e){

	// получаем значение поля key
	var keyBox = document.phone.key;
	var exp = /^\+\d+ ?\(\d+\) ?\d+[ -]?\d+[ -]?\d+/;
	var val = keyBox.value;
	if(exp.test(val)){
		alert("Браво! Номер указан верно.");
	}
	else
		alert("Номер введен некорректно!");
		e.preventDefault();
}

var sendButton = document.phone.send;
sendButton.addEventListener("click", sendForm);

// SelectForm
var sensorsSelect = sensorsSelection.sensor;
 
function changeOption(){
     
    var selection = document.getElementById("sensors");
    var selectedOption = sensorsSelect.options[sensorsSelect.selectedIndex];
    console.log("Вы выбрали: " + selectedOption.text);
}
 
sensorsSelect.addEventListener("change", changeOption);

var square = document.getElementById("cone");
var angle = 0;
function rotate() {
    angle = (angle + 2)%360;
    square.style.transform = "rotate(" + angle + "deg)";
    window.requestAnimationFrame(rotate);
}

setTimeout(rotate,10000);