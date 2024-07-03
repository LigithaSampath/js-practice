//array of number, multiply each number with a multiplier and return the transformed array
let num = [2, 4];
let num1 = [3, 6];
let num2 = [];
for (i = 0; i < Math.min(num.length, num1.length); i++) {
  num2[i] = num[i] * num1[i];
}

console.log(num2);

//array of number, multiply each number with a multiplier and return the reverse  transformed array 
let num3 = [2, 4];
let num4 = [3, 6];
let num5 = [];
for (i = 0; i < Math.min(num3.length, num4.length); i++) {
  num5[i] = num3[i] * num4[i];
}
num5.reverse();
console.log(num5);
