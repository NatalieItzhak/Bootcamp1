var input = require('readline-sync');
var str = input.question('Enter a string: ').toLowerCase();
str = str.replace(/[a-z]/gi, function(char) {
  char = String.fromCharCode(char.charCodeAt(0));
  if (char=='{' || char=='[') char = 'a';
  if (/[aeiuoy]/.test(char)) char = char.toUpperCase();
  return char;
});

console.log(str);
 
