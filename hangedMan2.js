var input = require('readline-sync');var input = require('readline-sync');                              
console.log("(  )                                                                ");
console.log(" | | .-.    .---.  ___ .-.   .--.    ___ .-. .-.     .---.  ___ .-.   ");
console.log(" | |/   \  / .-, \(   )   \ /    \  (   )   '   \   / .-, \(   )   \  ");
console.log(" |  .-. . (__) ; | |  .-. .;  ,-. '  |  .-.  .-. ; (__) ; | |  .-. .  ");
console.log(" | |  | |   .'`  | | |  | || |  | |  | |  | |  | |   .'`  | | |  | |  ");
 console.log(" | |  | |  / .'| | | |  | || |  | |  | |  | |  | |  / .'| | | |  | |  ");
 console.log(" | |  | | | /  | | | |  | || |  | |  | |  | |  | | | /  | | | |  | |  ");
 console.log(" | |  | | ; |  ; | | |  | || '  | |  | |  | |  | | ; |  ; | | |  | |  ");
 console.log(" | |  | | ' `-'  | | |  | |'  `-' |  | |  | |  | | ' `-'  | | |  | |  ");
 console.log("(___)(___)`.__.'_.(___)(___)`.__. | (___)(___)(___)`.__.'_.(___)(___) ");
 console.log("                          ( `-' ;                                   ");
 console.log("                           `.__.                                    ");

var input = require('readline-sync');
var words = ['banana', 'apple', 'watermelon', 'blueberries', 'orange', 'pineapple']
var selectedWordToPlay = words[Math.floor(Math.random() * words.length)];
var remainingAttemps=10; 
var selectWordToShowPlayer= "*".repeat(selectedWordToPlay.length);

console.log("Hint: the word is a fruit");
console.log(selectWordToShowPlayer);


var endOfGame;
var input = require('readline-sync');
while(true){
    playerGuess= GetPlayerGuess();
    selectWordToShowPlayer = TryPlayerGuess(playerGuess,selectedWordToPlay,selectWordToShowPlayer);
    console.log(selectWordToShowPlayer)
    
    endOfGame=CheckEndOfGame(remainingAttemps,selectWordToShowPlayer);
    if (endOfGame!=""){
       console.log(endOfGame);
       break

    }else{
        console.log("You have", remainingAttemps , "left");
    }
}

return;

function GetPlayerGuess(){
    var validResponse=false;
    var message="what is your guess? ";
    input = require('readline-sync');
   
     while(validResponse==false)
     {
        var response= input.question(message);
        if (response.length===1 && response.match(/[a-z]/i)){
            validResponse=true;
        }
        else{
            message="Please enter only single letter: ";
        }
     }

     //user had a valid response. 
     return response.toLocaleLowerCase();  

}

function TryPlayerGuess(playerGuess,selectedWordToPlay,selectWordToShowPlayer)
{
    var foundLetter=false;
    var foundPostions = selectedWordToPlay.replaceAll(playerGuess,"$");

    for (i=0 ;i< selectedWordToPlay.length; i++){
       if (foundPostions.charAt(i)=="$"){
          selectWordToShowPlayer=selectWordToShowPlayer.substring(0, i) +  playerGuess + selectWordToShowPlayer.substring(i+1);
          foundLetter=true;
        }
    }

    if (foundLetter==false)
    {
        remainingAttemps--;
    }
    return selectWordToShowPlayer;
}

function CheckEndOfGame(remainingAttemps,selectWordToShowPlayer ){
//if we return empty string, game should cotinue (since it is NOT end of gamne)
//otherwsie, return message why game ended (since it IS end of game)
    if (remainingAttemps<1){
        return "Guessed wrong..Game Ended! you have no more attempts !";
    }

    if (selectWordToShowPlayer.indexOf("*")<0){
        return "Congrats!! You won! "; 
    }

    return "";
}



