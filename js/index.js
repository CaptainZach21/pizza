var Toppings = ["Pepperoni",
				"Mushrooms", 
				"Sausage", 
				"Bell Peppers", 
				"Kim Chee", 
				"Pineapple", 
				"Spinach", 
				"Garlic", 
				"Kalua Pig", 
				"Olives", 
				"Canadian Bacon", 
				"Bacon"
				];

var Topping_Images = ["<img  class= 'img' src= assets/pepperoni.jpg>", 
					"<img class= 'img' src= assets/mushroom.jpg>", 
					"<img class= 'img' src= assets/sausage.jpg>",
					"<img class= 'img' src= assets/bellpepper.png>",
					"<img class= 'img' src= assets/kimchi.jpg>",
					"<img class= 'img' src= assets/pineapple.jpg>",
					"<img class= 'img' src= assets/spinach.jpeg>",
					"<img class= 'img' src= assets/garlic.gif>",
					"<img class= 'img' src= assets/kaluapig.jpeg>",
					"<img class= 'img' src= assets/olives.jpeg>",
					"<img class= 'img' src= assets/canadianBacon.jpeg>",
					"<img class= 'img' src= assets/bacon.jpeg>"
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
			"parmigiano reggiano",
			"pecorino romano",
			"smoked gouda",
			"blue",
			"grana padano"
			];
var Cheese_Images = ["<img class= 'img' src= assets/freshMozzarella.jpeg>",
					"<img class= 'img' src= assets/deliMozzarella.jpeg>",
					"<img class= 'img' src= assets/smokedMozzarella.jpeg>",
					"<img class= 'img' src= assets/provolone.jpeg>",
					"<img class= 'img' src= assets/parmesean.jpeg>",
					"<img class= 'img' src= assets/pecorino.jpeg>",
					"<img class= 'img' src= assets/smokedgouda.gif>",
					"<img class= 'img' src= assets/blue.jpeg>",
					"<img class= 'img' src= assets/granaPadano.jpeg>"
];


function pickTopping2(){
	var toppingNumber = Math.floor(Math.random()*Toppings.length);
	var toppingNumber2 = Math.floor(Math.random()*Toppings.length);
	var crust = Math.floor(Math.random()*Crusts.length);
	var cheese = Math.floor(Math.random()*Cheeses.length);
	var toppingImage1 = toppingNumber
	var ToppingImage2 = toppingNumber2
	var CheeseImage = cheese
	document.getElementById('pizza').innerHTML = "<h1>"+"Your Pizza is a "+Crusts[crust]+" pizza. "+"It is topped with "+Toppings[toppingNumber]+Topping_Images[toppingImage1]+" and "+
	Toppings[toppingNumber2]+Topping_Images[ToppingImage2]+" and on a bed of "+Cheeses[cheese]+Cheese_Images[CheeseImage]+" cheese."+"</h1>";
	if (toppingNumber == toppingNumber2) {
		var	toppingNumber2 = Math.floor(Math.random()*Toppings.length);
		var ToppingImage2 = toppingNumber2
		document.getElementById('pizza').innerHTML = "<h1>"+"Your Pizza is a "+Crusts[crust]+" pizza. "+"It is topped with "+Toppings[toppingNumber]+Topping_Images[toppingImage1]+" and "+
		Toppings[toppingNumber2]+Topping_Images[ToppingImage2]+" and on a bed of "+Cheeses[cheese]+Cheese_Images[CheeseImage]+" cheese."+"</h1>";
	}
	console.log(Toppings[toppingNumber]);
	console.log(toppingNumber);
	changeButton();
}
function pickTopping1(){
	var toppingNumber = Math.floor(Math.random()*Toppings.length);
	var crust = Math.floor(Math.random()*Crusts.length);
	var cheese = Math.floor(Math.random()*Cheeses.length);
	var toppingImage1 = toppingNumber
	var CheeseImage = cheese
	document.getElementById('pizza').innerHTML = "<h1>"+"Your Pizza is a "+Crusts[crust]+" pizza. "+"It is topped with "+Toppings[toppingNumber]+Topping_Images[toppingImage1]+" and on a bed of "+
	Cheeses[cheese]+Cheese_Images[CheeseImage]+" cheese."+"</h1>";
	console.log(Toppings[toppingNumber]);
	console.log(toppingNumber);	
	changeButton();
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
	var CheeseImage = cheese
	document.getElementById('pizza').innerHTML = "<h1>"+"Your Pizza is a "+Crusts[crust]+" pizza. "+"It is topped with "+Toppings[toppingNumber]+Topping_Images[toppingImage1]+", "+
	Toppings[toppingNumber2]+Topping_Images[ToppingImage2]+" and "+Toppings[toppingNumber3]+Topping_Images[TopppingImage3]+" and on a bed of "+
	Cheeses[cheese]+Cheese_Images[CheeseImage]+" cheese."+"</h1>";
	console.log(Toppings[toppingNumber]);
	console.log(toppingNumber);
	if (toppingNumber == toppingNumber2) {
		var	toppingNumber2 = Math.floor(Math.random()*Toppings.length);
		var ToppingImage2 = toppingNumber2
		document.getElementById('pizza').innerHTML = "<h1>"+"Your Pizza is a "+Crusts[crust]+" pizza. "+"It is topped with "+Toppings[toppingNumber]+Topping_Images[toppingImage1]+", "+
		Toppings[toppingNumber2]+Topping_Images[ToppingImage2]+" and "+Toppings[toppingNumber3]+Topping_Images[TopppingImage3]+" and on a bed of "+
		Cheeses[cheese]+" cheese."+"</h1>";
	}
	if (toppingNumber == toppingNumber3) {
		var toppingNumber3 = Math.floor(Math.random()*Toppings.length);
		var TopppingImage3 = toppingNumber3
		document.getElementById('pizza').innerHTML = "<h1>"+"Your Pizza is a "+Crusts[crust]+" pizza. "+"It is topped with "+Toppings[toppingNumber]+Topping_Images[toppingImage1]+", "+
		Toppings[toppingNumber2]+Topping_Images[ToppingImage2]+" and "+Toppings[toppingNumber3]+Topping_Images[TopppingImage3]+" and on a bed of "+
		Cheeses[cheese]+" cheese."+"</h1>";
	}
	if (toppingNumber2 == toppingNumber3) {
		var toppingNumber3 = Math.floor(Math.random()*Toppings.length);
		var TopppingImage3 = toppingNumber3
		document.getElementById('pizza').innerHTML = "<h1>"+"Your Pizza is a "+Crusts[crust]+" pizza. "+"It is topped with "+Toppings[toppingNumber]+Topping_Images[toppingImage1]+", "+
		Toppings[toppingNumber2]+Topping_Images[ToppingImage2]+" and "+Toppings[toppingNumber3]+Topping_Images[TopppingImage3]+" and on a bed of "+
		Cheeses[cheese]+" cheese."+"</h1>";
	}
	changeButton();
};
function changeButton(){
	document.getElementById('button1').innerHTML = "<b>Don't like this pizza? <br> Click here to generate a new pizza with one topping!</b>"
	document.getElementById('button2').innerHTML = "<b>Don't like this pizza? <br> Click here to generate a new pizza with two toppings!</b>"
	document.getElementById('button3').innerHTML = "<b>Don't like this pizza? <br> Click here to generate a new pizza with three toppings!</b>"
}
		


