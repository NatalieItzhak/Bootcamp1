var input = require('readline-sync');
var q= input.question('Enter a short sentence: ')
String = "(?<!\\S)\\p{Alpha}+(?!\\S)";
function longestWord(q) {
    var str = q.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
console.log(longestWord(q));

