var input = require('readline-sync');
var num = input.question("Please enter the vaild number");
var i;
function factorialize(num) {
    if (num === 0 || num === 1)
      console.log(i);
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    console.log (num);
  }
  factorialize(num);


