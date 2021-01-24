const input = require('readline-sync');
const num1 = input.question("enter number: ");
const num2 = input.question("enter another number: ");
const num3 = (parseInt(num1) + parseInt(num2));
if (num3 == 10)
 {
    console.log("makes 10")
}
else
 {
   console.log("nope");
}


