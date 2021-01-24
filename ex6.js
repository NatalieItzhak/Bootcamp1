var input = require('readline-sync');
var number = input.question("Please choose a number larger than 10:");
var numberOfTries=1;

while (number<11)
{
  number = input.question("Please choose a number larger than 10:"); 
  numberOfTries++;
}


console.log("Thank you \nIt took you",numberOfTries,"tries to choose a valid number");
return;
