// 1. Get a number from user (a call this parameter numberOfItems)
var input = require('readline-sync');
var numberOfItems =  parseInt(input.question("Please Enter a valid number: "));

// 2. Create an array of numbers, and push there "numberOfItems" times the number of 1-50
var arrRandomNumbers=[];
var randomNumber;

for (i=0; i <numberOfItems; i++) {  
  randomNumber=Math.floor(Math.random() * 50)+1;
  arrRandomNumbers.push(randomNumber);
  //console.log(randomNumber);
}

// 4. Loop over the array again, and find the min and max numbers
var maxNumber = Math.max(...arrRandomNumbers);
var minNumber = Math.min(...arrRandomNumbers)

// 5. Print them
console.log("Max number is: ",maxNumber);
console.log("Min number is: ",minNumber);