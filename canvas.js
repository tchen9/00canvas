var canvas = document.getElementById("slate");
var context = canvas.getContext("2d");

var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");

var shape = "circle";

var firstCircle = 0;

var draw = function(e){
    if (shape == "circle"){
	if (firstCircle == 0){
	    context.beginPath();
	    context.arc(e.offsetX, e.offsetY, 20, 0, 2*Math.PI);
	    context.fill();
	    firstCircle = 1;
	}
	else{
	    context.lineTo(e.offsetX, e.offsetY);
	    context.stroke();
	    context.beginPath();
	    context.arc(e.offsetX, e.offsetY, 20, 0, 2*Math.PI);
	    context.fill();
	    context.stroke();
	}	
    }
    else{
	context.beginPath();
	context.rect(e.offsetX, e.offsetY, 35, 35);
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
