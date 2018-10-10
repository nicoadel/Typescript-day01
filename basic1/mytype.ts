var numArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var getMultiply = function(num1: number, num2:number): number{
	return num1 * num2;
}

var sum: number = getMultiply(numArray[1],numArray[2]);

for (let i = 0; i<numArray.length; i++){

	for(let ii = 0; ii < numArray.length; ii++){

		let sum: number = getMultiply(numArray[i], numArray[ii]);
		document.write(String(sum)+ "</br>");


	}
	document.write("<hr>");
}


