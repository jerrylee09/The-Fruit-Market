$(document).ready(function() {
	var customer = {
		apples: 0,
		oranges: 0,
		bananas: 0,
		grapes: 0,
		totalCash: 100
	};
	$(".price-button").on("click","button",targetBuy);
	// $(".price-button").on("click","button",targetSell);

var fruitPrices = [1,1,1,1];
var fruitTimes = [0,0,0,0];

var apple =	$('#apple-price').text(fruitPrices[0]);
var banana = $('#banana-price').text(fruitPrices[1]);
var orange = $('#orange-price').text(fruitPrices[2]);
var grape =	$('#grape-price').text(fruitPrices[3]);

$(".total-cash").text(customer.totalCash);


function targetBuy(){
	 var myClass = this.className;

	 if (myClass ==="apple-buy"){
	 	customer.apples = customer.apples+1 ;
		customer.totalCash -= fruitPrices[0]; 	 
	 }
	 else if(myClass === "banana-buy"){
	 	customer.bananas += 1;
	 	console.log(customer.bananas);
	 	customer.totalCash -= fruitPrices[1]; 
	 }
	 else if(myClass === "orange-buy"){
	 	customer.oranges += 1;
	 	console.log(customer.oranges);
	 	customer.totalCash -= fruitPrices[2]; 
	 }
	 else if(myClass === "grape-buy"){
	 	customer.grapes += 1;
	 	console.log(customer.grapes);
	 	customer.totalCash -= fruitPrices[3]; 
	 }

};

$
// function targetSell(){



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






setInterval(function(){ 
	priceChange();
	priceSet();

 	apple.text(fruitPrices[0].toFixed(2));
 	banana.text(fruitPrices[1].toFixed(2));
	orange.text(fruitPrices[2].toFixed(2));
	grape.text(fruitPrices[3].toFixed(2));

 }, 3000);

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

});
