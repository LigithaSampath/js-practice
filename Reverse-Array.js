//reverse the array
let num = [2, 4];
console.log(num.reverse());

//arrange the given array in ascending order
let num1 = [4, 1, 6];
num1.sort();
console.log(num1);

//reverse the array using sort method
let num2 = [1, 2, 3, 4];
num2.sort(function(a, b) {
  return b - a;
})
console.log(num2);