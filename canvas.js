var canvas = document.getElementById("slate");
var context = canvas.getContext("2d");

var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");

var shape = "circle";

var draw = function(e){
    if (shape == "circle"){
	context.beginPath();
	context.arc(e.clientX, e.clientY, 20, 0, 2*Math.PI);
	context.fill();
    }
    else{
	context.beginPath();
	context.rect(e.clientX, e.clientY, 35, 35);
	context.fill();
    }
}

canvas.addEventListener("click", draw);

var change = function(e){
    if (shape == "circle")
	shape = "rect";
    else
	shape = "circle";
}

toggle.addEventListener("click", change);

var clearCanvas = function(e){
    context.clearRect(0, 0, 500, 500);
}

clear.addEventListener("click", clearCanvas);
