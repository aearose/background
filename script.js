var css = document.querySelector("h3");
var cssHex = document.querySelector("hexValue");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

body.addEventListener("onload",setGradient());


function setGradient(){
	body.style.background = 
		"linear-gradient(to right, "
		+color1.value
		+", "
		+color2.value
		+")";

		css.textContent = body.style.background + ";";

		hexValue.textContent = " Hex Values = " + color1.value + " & " + color2.value ;
}


function setGradient2(){
	body.style.background = 
		"linear-gradient(to right, "
		+"#"+color3
		+", "
		+"#"+color4
		+")";

		css.textContent = body.style.background + ";";
		hexValue.textContent = " Hex Values = " + color3 + " & " + color4 ;
}


function colorgen() { 
	
		color3=Math.floor(Math.random()*16777215).toString(16); 
		color4=Math.floor(Math.random()*16777215).toString(16); 
		console.log(color3,color4);
		setGradient2();
		}





color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
