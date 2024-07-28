let n = 3;
for (var i = n; i >= 1; i--) {
  let pattern = '';
  for (var j = 1; j <= i; j++) {
    pattern += j + '' ;
  }
  console.log(pattern);

}