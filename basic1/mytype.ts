var numArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var getMultiply = function(num1: number, num2:number): number{
	return num1 * num2;
}

//----------------2 normal for loops----------------//
document.write("<h1>2 NORMAL LOOPS </h1>")
for (let i = 0; i<numArray.length; i++){

	for(let ii = 0; ii < numArray.length; ii++){



		let sum: number = getMultiply(numArray[i], numArray[ii]);
		document.write(String(sum)+ "</br>");


	}
	document.write("<hr>");
}


//-----------------FOR OF--------------------//


document.write("<h1> FOR OF </h1>");
for (let value of numArray){
	for (let value2 of numArray){
		let sum: number = getMultiply(value, value2)
		document.write(String(sum)+"</br>");


	}
	document.write("<hr>")

}



let map = new Map()
.set("A",1)
.set("B",2)
.set("C",3)
.set("D",4)
.set("E",5);

for (let [key,value] of map){
	document.write(key+": "+value +"</br>");
}	