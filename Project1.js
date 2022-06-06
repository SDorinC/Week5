for (var i = 1; i <= 20; i++) {
    console.log(i)
}

for ( var i = 1; i <= 20; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}

var arr = [1, 2, 3, 4, 1, 5, 6, 7, 1];
var sum = 0;
for ( var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

arr.sort();
console.log(arr[arr.length-1]);


var numSum = 0;
for ( var i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
        numSum++;
    }
}
console.log(numSum);

var arr1 = [0, 1, 0, 1];
var arr2 = [1, 0, 1, 0];
var arr3 = [arr1, arr2, arr1, arr2];

for ( var i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}