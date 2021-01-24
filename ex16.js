var input = require('readline-sync');
var arrayNums = [1, 2, 3, 4];

console.log(ReverseArray(arrayNums));

function ReverseArray(arrayInput){
    
   //Soultion 1: with no using of extra array :
   //return arrayInput.reverse();

   //Soultion 2: with using of extra array :
   // var arrayToRuturn=[];
   // for (i=arrayInput.length-1; i>-1; i--){
   //   arrayToRuturn.push(arrayInput[i]);
   // }
   //return arrayToRuturn;

    //Soultion 3: with no using of extra array :
    var originalArrayLength= arrayInput.length;   

    //add to the same array, push all the array elements, but revreted 
    for (i=originalArrayLength-1; i>-1; i--){
        arrayInput.push(arrayInput[i]);
    }

    for (i=originalArrayLength-1; i>-1; i--){
        arrayInput.shift(); //remove the first element of the array
    }

    return arrayInput;
 }

 