// Get the pizza size price and add it to the running Total
// then pass that running total to the next function so 
// the next function will add a particular total to the running total and so on...
//
// Keep doing this until you get all items added to the running total.
//
// Just remember that the syntax will be text1 = text1 + something + "<br>";
// So you take the orginal value and concetenate to something new and end it with
// an HTML line break so our code will write the next thing one line below instead
// of overwriting the previous print out.
function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	
	var text2 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var meatsTotal = 0;
	var meatsArray = document.getElementsByClassName("meats");
	for (var q = 0; q < meatsArray.length; q++) {
		if (sizeArray[q].checked) {
			var selectedMeats = meatsArray[q].value;
			text2 = text1+selectedMeats+"<br>";
		}
	}
	if (selectedMeats === "Pepperoni") {
		meatsTotal = 1;
	} else if (selectedMeats === "Sausage") {
		meatsTotal = 1;
	} else if (selectedMeats === "Canadian Bacon") {
		meatsTotal = 1;
	} else if (selectedMeats === "Ground Beef") {
		meatsTotal = 1;
	} else if (selectedMeats === "Anchovy") {
		meatsTotal = 1;
	} else if (selectedMeats === "Chicken") {
		meatsTotal = 1;
	}
	
	var text3 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var veggiesTotal = 0;
	var veggiesArray = document.getElementsByClassName("veggies");
	for (var w = 0; w < veggiesArray.length; w++) {
		if (sizeArray[w].checked) {
			var selectedVeggies = veggiesArray[w].value;
			text3 = text1+text2+selectedVeggies+"<br>";
		}
	}
	if (selectedVeggies === "Tomatoes") {
		veggiesTotal = 1;
	} else if (selectedVeggies === "Onions") {
		veggiesTotal = 1;
	} else if (selectedVeggies === "Olives") {
		veggiesTotal = 1;
	} else if (selectedVeggies === "Green Peppers") {
		veggiesTotal = 1;
	} else if (selectedVeggies === "Mushrooms") {
		veggiesTotal = 1;
	} else if (selectedVeggies === "Pineapple") {
		veggiesTotal = 1;}
	 else if (selectedVeggies === "Spinach") {
		veggiesTotal = 1;
	} else if (selectedVeggies === "Jalapeno") {
		veggiesTotal = 1;
	}
	
	var text4 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var e = 0; e < cheeseArray.length; e++) {
		if (sizeArray[e].checked) {
			var selectedCheese = cheeseArray[e].value;
			text2 = text1+text2+text3+selectedCheese+"<br>";
		}
	}
	if (selectedCheese === "Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "No Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 2;
	
	var text5 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sauceTotal = 0;
	var sauceArray = document.getElementsByClassName("sauce");
	for (var r = 0; r < sauceArray.length; r++) {
		if (sizeArray[r].checked) {
			var selectedSauce = sauceArray[r].value;
			text5 = text1+text2+text3+text4+selectedSauce+"<br>";
		}
	}
	if (selectedSauce === "Marinara Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "White Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "BBQ Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "No Sauce") {
		sauceTotal = 0; {
	}
	
	var text6 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var t = 0; t < crustArray.length; t++) {
		if (sizeArray[t].checked) {
			var selectedCrust = crustArray[t].value;
			text5 = text1+text2+text3+text4+text5+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === "Plain Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Garlic Butter Crust") {
		crustTotal = 2;
	} else if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 2;
	} else if (selectedCrust === "Spicy Crust") {
		crustTotal = 2; 
	} else if (selectedCrust === "House Special Crust") {
		crustTotal = 2; {
	}
	
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1); // All three of these variables will be passed on to each function
};	

// With both the meat and veggie functions each item in the array will be
// 1 dollar but the first is going to be free so we can count the total
// of items in their array and subtract 1 to get the total item cost
//
// Now we can add the item cost to our running total to get the new
// running total and then pass this new running total to the next function
// Just keep up this process until we've added all items to the running total
function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
}