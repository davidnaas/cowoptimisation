function optimisePrice (hasCow) {

	var totalPrice = 0;
	var currentGapSize = 0;

	for(var i = 0; i < hasCow.length; i++){
		if(hasCow[i]){ //Not a gap so add plankprice
			//times two since each box is two meters wide
			totalPrice += plankPrice*2;
			continue;
		}else{//Gap found, investigate further
			currentGapSize++;
			if(viableCut(currentGapSize) && hasCow[i+1]){ //Cutting is more efficient for this gap and it's the end of the gap
				totalPrice += cuttingPrice;
				currentGapSize = 0;
				continue;
			}else if(hasCow[i+1]){ //It's the end of a gap and cutting was not efficient here
				totalPrice += plankPrice*2;
			} else{ //not efficient to cut but end of gap not reached yet
				;
			}
		}
	}

	//Don't forget that last cut!
	totalPrice += cuttingPrice;

	return totalPrice;
}

function viableCut (gapSize) {
	return (gapSize * plankPrice * 2) > cuttingPrice;
}