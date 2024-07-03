let arr=[45,4,98,656,233];
function findIfExist(arr, value)
{
for(i=0;i<arr.length;i++){
if(arr[i] === value)
{
return true;
}

}
return false;
}
console.log(findIfExist(arr, 96));