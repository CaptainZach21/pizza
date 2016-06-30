var Toppings = ["Pepperoni", 
				"Mushroom", 
				"Sausage", 
				"Bell Pepper", 
				"Kim Chee", 
				"Pineapple", 
				"Spinach", 
				"Garlic", 
				"Kalua Pig", 
				"Olive", 
				"Canadian Bacon", 
				"Bacon"
				];

var Topping_Images = ["../pepperoni.jpg", 
					"../mushroom.jpg", 
					"../sausage.jpg",
					"../bellpepper.png"
					"../kimchi.jpg"
					"../pineapple.jpg"
					"../spinach.jpg"
					"../garlic.gif"
					];

var Crusts = ["thin crust", 
			"flatbread", 
			"thick crust", 
			"traditional crust", 
			"deep dish", 
			"deep, deep dish", 
			"cheese-stuffed crust", 
			"bacon-wrapped crust"
			];

var Cheeses = ["fresh mozzarella", 
			"deli-style mozzarella", 
			"smoked mozzarella", 
			"provolone", 
			"parmigiano teggiano",
			"pecorino romano",
			"smoked gouda",
			"blue",
			"grana padano"
			];


function pickTopping2(){
	var toppingNumber = Math.floor(Math.random()*Toppings.length);
	var toppingNumber2 = Math.floor(Math.random()*Toppings.length);
	var crust = Math.floor(Math.random()*Crusts.length);
	var cheese = Math.floor(Math.random()*Cheeses.length);
	var toppingImage1 = toppingNumber
	var ToppingImage2 = toppingNumber2
	document.getElementById('pizza').innerHTML = "<h1>"+"Your Pizza is a "+Crusts[crust]+" pizza. "+"It is topped with "+Toppings[toppingNumber]+" and "+
	Toppings[toppingNumber2]+" and on a bed of "+Cheeses[cheese]+" cheese."+"</h1>";
	if (toppingNumber == toppingNumber2) {
		var	toppingNumber2 = Math.floor(Math.random()*Toppings.length);
		document.getElementById('pizza').innerHTML = "<h1>"+Toppings[toppingNumber]+" and "+
		Toppings[toppingNumber2]+"</h1>";
	}
	console.log(Toppings[toppingNumber]);
	console.log(toppingNumber);
}
function pickTopping1(){
	var toppingNumber = Math.floor(Math.random()*Toppings.length);
	var crust = Math.floor(Math.random()*Crusts.length);
	var cheese = Math.floor(Math.random()*Cheeses.length);
	var toppingImage1 = toppingNumber
	document.getElementById('pizza').innerHTML = "<h1>"+"Your Pizza is a "+Crusts[crust]+" pizza. "+"It is topped with "+Toppings[toppingNumber]+" and on a bed of "+
	Cheeses[cheese]+" cheese."+"</h1>";
	console.log(Toppings[toppingNumber]);
	console.log(toppingNumber);	
}
function pickTopping3(){
	var toppingNumber = Math.floor(Math.random()*Toppings.length);
	var toppingNumber2 = Math.floor(Math.random()*Toppings.length);
	var toppingNumber3 = Math.floor(Math.random()*Toppings.length);
	var crust = Math.floor(Math.random()*Crusts.length);
	var cheese = Math.floor(Math.random()*Cheeses.length);
	var toppingImage1 = toppingNumber
	var ToppingImage2 = toppingNumber2
	var TopppingImage3 = toppingNumber3
	document.getElementById('pizza').innerHTML = "<h1>"+"Your Pizza is a "+Crusts[crust]+" pizza. "+"It is topped with "+Toppings[toppingNumber]+", "+
	Toppings[toppingNumber2]+" and "+Toppings[toppingNumber3]+" and on a bed of "+
	Cheeses[cheese]+" cheese."+"</h1>";
	console.log(Toppings[toppingNumber]);
	console.log(toppingNumber);
	if (toppingNumber == toppingNumber2) {
		var	toppingNumber2 = Math.floor(Math.random()*Toppings.length);
		document.getElementById('pizza').innerHTML = "<h1>"+Toppings[toppingNumber]+", "+
		Toppings[toppingNumber2]+" and "+Toppings[toppingNumber3]+"</h1>";
	}
	if (toppingNumber == toppingNumber3) {
		var toppingNumber3 = Math.floor(Math.random()*Toppings.length);
		document.getElementById('pizza').innerHTML = "<h1>"+Toppings[toppingNumber]+", "+
		Toppings[toppingNumber2]+" and "+Toppings[toppingNumber3]+"</h1>";
	}
	if (toppingNumber2 == toppingNumber3) {
		var toppingNumber3 = Math.floor(Math.random()*Toppings.length);
		document.getElementById('pizza').innerHTML = "<h1>"+Toppings[toppingNumber]+", "+
		Toppings[toppingNumber2]+" and "+Toppings[toppingNumber3]+"</h1>";
	}
};

		


