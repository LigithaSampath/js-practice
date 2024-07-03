const arr=[5,10,15];
function findsum(arr){
total=0;
for(i=0;i<arr.length;i++){
total +=arr[i];
}
return total;
}
console.log(findsum(arr));