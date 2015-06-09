$(document).ready(function($) {
	cuttingPrice = undefined; 
	plankPrice = undefined; 
	var shedLayout; 

	$('#searchform').submit(function (evt) {
		evt.preventDefault();

		$('#priceResult').remove();

		if(this[0].value != ''){
			cuttingPrice = this[0].value;
		}else{
			cuttingPrice = 5;
		}

		if(this[1].value != ''){
			plankPrice = this[1].value;
		}else{
			plankPrice = 1.5;
		}

		if(this[2].value != ''){
			shedLayout = convertInputToArray(this[2].value);
		}else{
			shedLayout = [true, true, true, false, true, true, false, false, true, true, false, true];
		}


		var price = optimisePrice(shedLayout);

		$('#result').append('<p id="priceResult">' + price + '</p>');

	});

	function convertInputToArray (input) {
		var arr = input.split(",");

		for (var i = 0; i < arr.length; i++) {
			if(arr[i] === '1'){
				arr[i] = true;
			}else if(arr[i] === '0'){
				arr[i] = false;				
			}else{
				alert('Your input was bad and you should feel bad!');
			}
		};

		return arr;
	}

	// function optimisePrice (hasCow) {

	// 	var totalPrice = 0;
	// 	var currentGapSize = 0;

	// 	for(var i = 0; i < hasCow.length; i++){
	// 		if(hasCow[i]){ //Not a gap so add plankprice
	// 			//times two since each box is two meters wide
	// 			totalPrice += plankPrice*2;
	// 			continue;
	// 		}else{//Gap found, investigate further
	// 			currentGapSize++;
	// 			if(viableCut(currentGapSize) && hasCow[i+1]){ //Cutting is more efficient for this gap and it's the end of the gap
	// 				totalPrice += cuttingPrice;
	// 				currentGapSize = 0;
	// 				continue;
	// 			}else if(hasCow[i+1]){ //It's the end of a gap and cutting was not efficient here
	// 				totalPrice += plankPrice*2;
	// 			} else{ //not efficient to cut but end of gap not reached yet
	// 				;
	// 			}
	// 		}
	// 	}

	// 	//Don't forget that last cut!
	// 	totalPrice += cuttingPrice;

	// 	return totalPrice;
	// }

	// function viableCut (gapSize) {
	// 	return (gapSize * plankPrice * 2) > cuttingPrice;
	// }


});






