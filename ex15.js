var input = require('readline-sync');

var arr1=["Hello"];
var arr2=["AppeleSeeds","Bootcamp"];

var finalArray = MergeArrays(arr1,arr2)
console.log(finalArray);

function MergeArrays(array1,array2){
   return [].concat(array1,array2);
}