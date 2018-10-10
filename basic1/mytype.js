var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var getMultiply = function (num1, num2) {
    return num1 * num2;
};
var sum = getMultiply(numArray[1], numArray[2]);
for (let i = 0; i < numArray.length; i++) {
    for (let ii = 0; ii < numArray.length; ii++) {
        let sum = getMultiply(numArray[i], numArray[ii]);
        document.write(String(sum) + "</br>");
    }
    document.write("<hr>");
}
let map = new Map()
    .set("A", 1)
    .set("B", 2)
    .set("C", 3)
    .set("D", 4)
    .set("E", 5);
document.write("A:" + map.get("A") + "</br>B:" + map.get("B") + "</br>C:" + map.get("C") + "</br>D:" + map.get("D") + "</br>E:" + map.get("E"));
