function sumList (list) {
  var sum = 0;
  for (var i in list) {
    sum += parseInt(list[i]);
  }
  return sum;
}

var argv = process.argv;
var sum = sumList(argv.slice(2, argv.length));

console.log(sum);
