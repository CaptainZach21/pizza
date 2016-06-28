var Toppings = ["Pepperoni", "Mushroom", "Sausage", "Bell Pepper", 
"Kim Chee", "Pineapple", "Spinach", "Garlic", "Kalua Pig", "Olive"];

function pickTopping(){
	var toppingNumber = Math.floor(Math.random()*Toppings.length);
	var toppingNumber2 = Math.floor(Math.random()*Toppings.length);
	document.getElementById('pizza').innerHTML = "<h1>"+Toppings[toppingNumber]+" and "+
	Toppings[toppingNumber2]+"</h1>";
	console.log(Toppings[toppingNumber]);
	console.log(toppingNumber);
}

