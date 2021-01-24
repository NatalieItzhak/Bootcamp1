var input = require('readline-sync');

console.log("_______      ___      .___  ___.  _______      ______    _______    ____    __    ____  ___      .______      ");
console.log("/  _____|    /   \     |   \/   | |   ____|    /  __  \  |   ____|   \   \  /  \  /   / /   \     |   _  \     ");
console.log("|  |  __     /  ^  \    |  \  /  | |  |__      |  |  |  | |  |__       \   \/    \/   / /  ^  \    |  |_)  |    ");
console.log("|  | |_ |   /  /_\  \   |  |\/|  | |   __|     |  |  |  | |   __|       \            / /  /_\  \   |      /     ");
console.log("|  |__| |  /  _____  \  |  |  |  | |  |____    |  `--'  | |  |           \    /\    / /  _____  \  |  |\  \----.");
console.log("\______| /__/     \__\ |__|  |__| |_______|    \______/  |__|            \__/  \__/ /__/     \__\ | _| `._____|");
                                                                                                               
var playerName= input.question ("What is your name? ");
var currentBalance=50;
console.log ("Hello "  + playerName +  ", You currently have 50 dollars");
var input = require('readline-sync');
var readlineSync;
var options;
var playerResponse;


//1. Do a loop until there is an exit point 
//(exit point= when the player loose his money, or decide to quit the game)
while (true){

    //2. Inside the loop, ask user to enter a valid amout of money to bet on (from $1 to his current balance)
    var betAmount =parseInt(input.question("Place your bet for the next round: "));

    //3. If user enter non valid amout, quit game
    if (betAmount<1 || betAmount> currentBalance || Number.isNaN(betAmount)){
      console.log("Game Over! Your bet is not valid!");
      return;
    }
    
    //4. Run a game, and check he won 
    var playerCard= (Math.floor(Math.random() * 12)+1);
    var computersCard= (Math.floor(Math.random() * 12)+1);
   
    //Check if user won or lost, calc the new balance of the user
    while (playerCard==computersCard){
    // keep "playing" until there is no draw (if draw, play again without showing it to the user)     
        var playerCard= (Math.floor(Math.random() * 12)+1);
        var computersCard= (Math.floor(Math.random() * 12)+1);  
    }

    console.log("Your card is: " + playerCard);
    console.log("My card is: "   + computersCard);  

    if (playerCard <=computersCard) {
         //player lost
         currentBalance-= betAmount;
        //If the new balance is lower then 1, quit game, and let player know he lost
        if (currentBalance<1){
            console.log("You lost this round and all of your money is gone, bye bye!");
            return;
        }
        else{
        //player lost, but he still has money    
            console.log("You lost this round! Your current balance is: ", currentBalance);
            //if if we want to keep playing, or quit 
            readlineSync = require('readline-sync');
            options = ["Play another round", "Quit and take your money",];
            playerResponse = readlineSync.keyInSelect(options, 'choose option');
            //If user decide to quit, print the player a message with his current winning balance
            if (playerResponse!=0)
            {//Player chose to quit
                console.log("Congrats! you earned :", currentBalance , " dollars! Use your money wisely ");
                return;
            }

        }

         
     }else{
        //play won
        currentBalance+= betAmount;
        console.log("You won this round! Your current balance is: ", currentBalance);

        //if if we want to keep playing, or quit 
        readlineSync = require('readline-sync');
        options = ["Play another round", "Quit and take your money",];
        playerResponse = readlineSync.keyInSelect(options, 'choose option');
        //If user decide to quit, print the player a message with his current winning balance
        if (playerResponse!=0)
        {//Player chose to quit
            console.log("Congrats! you earned :", currentBalance , " dollars! Use your money wisely ");
            return;
        }
     
     }

}















 












// if ( betAmount<1  || betAmount>50)
// {
//     console.log("Valid out of rang");
//     throw ('BYEBYE');
// }

// if (betAmount=>1 && betAmount<=50)
// {
//     var playerCard= (Math.floor(Math.random() * 12)+1);
//     var computersCard= (Math.floor(Math.random() * 12)+1);
//     console.log("Your card is: " +PlayersCard);
//     console.log("My card is: " +ComputersCard);


//     if (PlayersCard <=ComputersCard) {
//         console.log("You lost this round " )
//     }
//     else
//     {
        
//     }

//     if (PlayersCard>ComputersCard)
//     {
//         (console.log("you Won this round"))
//     }


//     if (PlayersCard==ComputersCard)
//     {
//         (console.log("you lost this round"))
//     }
// if (PlayersCard<ComputersCard)
// (
//     (console.log("you lost this round"))
// )
// }

//  else
// {
// console.log("Not a number");
//     throw ('BYEBYE')
// };
