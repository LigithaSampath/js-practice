// Reverse the string using "split(),reverse(),join()"
let name = "hello ligi";
//name.split() // h,e,l,l,o, ,l,i,g,i
//reverse() i,g,i,l, ,o,l,l,o,h
//join('') igil olleh 
console.log(name.split('').reverse().join(''))

// reverse the string using for loop
let nam = "ligithasampath";
let name1 = ''
for (i = nam.length - 1; i >= 0; i--) {
  name1 += nam[i];
}
console.log(name1)

// reverse the string using CharAt
let name2 = "Maggie";
let name3 = ''
for (i = name2.length - 1; i >= 0; i--) {
  name3 += name2.charAt(i);
}
console.log(name3)
