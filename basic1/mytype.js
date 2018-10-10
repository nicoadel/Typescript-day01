var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var getMultiply = function (num1, num2) {
    return num1 * num2;
};
var sum = getMultiply(numArray[1], numArray[2]);
for (var i = 0; i < numArray.length; i++) {
    for (var ii = 0; ii < numArray.length; ii++) {
        var sum_1 = getMultiply(numArray[i], numArray[ii]);
        document.write(String(sum_1) + "</br>");
    }
    document.write("<hr>");
}
