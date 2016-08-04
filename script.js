$(document).ready(function() {
	var customer = {
		apples: 0,
		oranges: 0,
		bananas: 0,
		grapes: 0,
		totalCash: 10
	};
	$(".price-button").on("click","button.buy",targetBuy);
	$(".price-button").on("click","button.sell",targetSell);

var fruitPrices = [1,1,1,1];
var fruitTimes = [0,0,0,0];

var apple = fruitPrices[0];
var banana = fruitPrices[1];
var orange = fruitPrices[2];
var grape = fruitPrices[3];


var applePrice = $('#apple-price').text(apple);
var bananaPrice = $('#banana-price').text(banana);
var orangePrice = $('#orange-price').text(orange);
var grapePrice = $('#grape-price').text(grape);

$(".total-cash").text(customer.totalCash);

function targetBuy(){
	 var myClass = this.className;
	 console.log(customer.totalCash);
	 $(".total-cash").text(customer.totalCash);

	 if(customer.totalCash <= 0 || customer.totalCash <= fruitPrices[0] || customer.totalCash <= fruitPrices[1] || customer.totalCash <= fruitPrices[2]|| customer.totalCash <= fruitPrices[3]){
	 		console.log(customer.totalCash);
			customer.totalCash = 0;
			console.log("you hit me)");
		}
		else if (myClass === "btn btn-default btn-lg  apple-buy buy"){
	 	customer.apples = customer.apples+1 ;
		customer.totalCash -= fruitPrices[0]; 
		$('#apple-total').text(customer.apples);
		$(".total-cash").text(customer.totalCash);
		
	 	}
	 	else if(myClass === "btn btn-default btn-lg banana-buy buy"){
	 	customer.bananas += 1;
	 	customer.totalCash -= fruitPrices[1];  
	 	$('#banana-total').text(customer.bananas);
	 	$(".total-cash").text(customer.totalCash);
	 	
	 	}
	 	else if(myClass === "btn btn-default btn-lg orange-buy buy"){
	 	customer.oranges += 1;
	 	customer.totalCash -= fruitPrices[2]; 
	 	$('#orange-total').text(customer.oranges);
	 	$(".total-cash").text(customer.totalCash);
	 		 
	 	}
	 	else if(myClass === "btn btn-default btn-lg grape-buy buy"){
	 	customer.grapes += 1;
	 	customer.totalCash -= fruitPrices[3];
	 	$('#grape-total').text(customer.grapes);
	 	$(".total-cash").text(customer.totalCash);
	 	
	 }
};

$
function targetSell(){
	console.log("You clicked");

	var myClass = this.className;
	if(customer.apples === 0 || customer.bananas === 0 || customer.oranges === 0|| customer.grapes === 0){
	 		console.log(customer.totalCash);
			console.log("you hit me)");
		}
		else if (myClass === "btn btn-default btn-lg  apple-buy buy"){
	 	customer.apples = customer.apples-1 ;
		customer.totalCash += fruitPrices[0]; 
		$('#apple-total').text(customer.apples);
		$(".total-cash").text(customer.totalCash);
		console.log("meow");
		
	 	}
	 	else if(myClass === "btn btn-default btn-lg banana-buy buy"){
	 	customer.bananas -= 1;
	 	customer.totalCash += fruitPrices[1];  
	 	$('#banana-total').text(customer.bananas);
	 	$(".total-cash").text(customer.totalCash);
	 	
	 	}
	 	else if(myClass === "btn btn-default btn-lg orange-buy buy"){
	 	customer.oranges -= 1;
	 	customer.totalCash += fruitPrices[2]; 
	 	$('#orange-total').text(customer.oranges);
	 	$(".total-cash").text(customer.totalCash);
	 		 
	 	}
	 	else if(myClass === "btn btn-default btn-lg grape-buy buy"){
	 	customer.grapes -= 1;
	 	customer.totalCash += fruitPrices[3];
	 	$('#grape-total').text(customer.grapes);
	 	$(".total-cash").text(customer.totalCash);
	 	
	 }
};

function priceChange(){
	for (var i = 0; i < fruitTimes.length;i++){
	fruitTimes[i] = (randomNumber(-50,50)/100);
	// (fruitTimes[i].toFixed(2))/1;
	// console.log(fruitTimes);

	}

};

	
function priceSet(){
	for(var i = 0; i < fruitPrices.length; i++){
		fruitPrices[i] += fruitTimes[i];
	};
	console.log(fruitPrices);
};

function timerSet() {
setInterval(function(){ 
	priceChange();
	priceSet();

if(fruitPrices[0] < 0.50) {
	fruitPrices[0] = 0.50;
	} else if(fruitPrices[0] > 9.99) {
	fruitPrices[0] = 9.99;
	}

	if(fruitPrices[1] < 0.50) {
	fruitPrices[1] = 0.50;
	} else if(fruitPrices[1] > 9.99) {
	fruitPrices[1] = 9.99;
	}

	if(fruitPrices[2] < 0.50) {
	fruitPrices[2] = 0.50;
	} else if(fruitPrices[2] > 9.99) {
	fruitPrices[2] = 9.99;
	}

	if(fruitPrices[3] < 0.50) {
	fruitPrices[3] = 0.50;
	} else if(fruitPrices[3] > 9.99) {
	fruitPrices[3] = 9.99;
	}

 	applePrice.text(fruitPrices[0].toFixed(2));
 	bananaPrice.text(fruitPrices[1].toFixed(2));
	orangePrice.text(fruitPrices[2].toFixed(2));
	grapePrice.text(fruitPrices[3].toFixed(2));

 }, 100);
}

//timerSet();


// setInterval(function(){ 

//  }, 300000);


function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

});
