$(document).ready(function($) {
	cuttingPrice = undefined; 
	plankPrice = undefined; 
	var shedLayout; 

	$('#searchform').submit(function (evt) {
		evt.preventDefault();

		$('#priceResult').remove();

		if(this[0].value != ''){
			cuttingPrice = parseFloat(this[0].value);
		}else{
			cuttingPrice = 5;
		}

		if(this[1].value != ''){
			plankPrice = parseFloat(this[1].value);
		}else{
			plankPrice = 1.5;
		}

		if(cuttingPrice < 0 || plankPrice < 0){
			alert('Your input was bad and you should feel bad!');
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

});






