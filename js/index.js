var Toppings = ["Pepperoni", "Mushroom", "Sausage", "Bell Pepper", 
"Kim Chee", "Pineapple", "Spinach", "Garlic", "Kalua Pig", "Olive", "Canadian Bacon", "Bacon"];

function pickTopping2(){
	var toppingNumber = Math.floor(Math.random()*Toppings.length);
	var toppingNumber2 = Math.floor(Math.random()*Toppings.length);
	document.getElementById('pizza').innerHTML = "<h1>"+Toppings[toppingNumber]+" and "+
	Toppings[toppingNumber2]+"</h1>";
	if (toppingNumber == toppingNumber2) {
		toppingNumber2;
		document.getElementById('pizza').innerHTML = "<h1>"+Toppings[toppingNumber]+" and "+
		Toppings[toppingNumber2]+"</h1>";
	}
	console.log(Toppings[toppingNumber]);
	console.log(toppingNumber);
}
function pickTopping1(){
	var toppingNumber = Math.floor(Math.random()*Toppings.length);
	document.getElementById('pizza').innerHTML = "<h1>"+Toppings[toppingNumber]+"</h1>";
	console.log(Toppings[toppingNumber]);
	console.log(toppingNumber);	
}
function pickTopping3(){
	var toppingNumber = Math.floor(Math.random()*Toppings.length);
	var toppingNumber2 = Math.floor(Math.random()*Toppings.length);
	var toppingNumber3 = Math.floor(Math.random()*Toppings.length);
	document.getElementById('pizza').innerHTML = "<h1>"+Toppings[toppingNumber]+", "+
	Toppings[toppingNumber2]+" and "+Toppings[toppingNumber3]+"</h1>";
	console.log(Toppings[toppingNumber]);
	console.log(toppingNumber);
}


