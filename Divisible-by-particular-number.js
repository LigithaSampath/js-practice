//check given number is divisilbe by a particular or other number using ternary operator 
let num = 25;
let result = (num % 2 == 0) ? "true" : "fasle"
console.log(result);

// check given number is divisible by a particular orther number using function methods
function divisible(num) {
  if (num % 3 == 0) {
    return true;
  } else {
    return false;
  }
}
let res = divisible(3)
console.log(res)
