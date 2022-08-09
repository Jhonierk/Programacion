function ArrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
}
    return summ / ArrayLen;
}
var myArray = [5,15,22,25,30,52,5,1,0];
var a = ArrayAvg(myArray);
console.log(a)
