function exampleAsync2(a, b, callback) {
  setTimeout(function () {
    var sum = a + b;
    callback(sum);
  }, 2000);
}
function exampleAsync(a, b, callback) {
  setTimeout(function () {
    var sum = a + b;
    callback(sum);
  }, 1000);
}
console.time("fun1");
console.time("fun2");
console.log('line 15')
exampleAsync2(1, 4, (sum) => {
  console.log('line 17',sum);
  console.timeEnd("fun2");
});
console.log('line 21')
exampleAsync(1, 4, (sum) => {
  console.log('line 22',sum);
  console.timeEnd("fun1");
});
console.log('line 25')
// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];
var pos = myNumbers.filter((x) => x >= 0);
// console.log(pos);
// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x <= 0);
// Display Result
console.log(posNumbers);
// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
