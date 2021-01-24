var input = require('readline-sync');
var numberOfPeople= parseInt(input.question("How many people are you going with?"));
var recommnadedResturant="";

if (isNaN(numberOfPeople) ) {
    console.log("Invalid value for number of people");
    throw ('stop execution');
}

if (numberOfPeople >10)
{
    console.log("Sorry, we can not recommnaded you a resturat for more than 10 people");
    throw ('stop execution');
}

 var kosher=input.question("Should it be Kosher? (answer yes/no) ");
 if (!(kosher == "no" || kosher == "yes" ))
 {
    console.log("Invalid value for kosher");
    throw ('stop execution');
 }

if (kosher == "yes")
{
    var kashrutLemehadrin =input.question("should it be Kashrut Lemehadrin? (answer: yes/no) ")

    if (!(kashrutLemehadrin == "no" || kashrutLemehadrin == "yes" ))
    {
       console.log("Invalid value for kashrutLemehadrin");
       throw ('stop execution');
    }
} 

var readlineSync = require('readline-sync');
var food = ["italian", "american", "asian"];
var index= readlineSync.keyInSelect(food, 'What kind of food do you want?');

 if (index== 0) {

    if (kosher=="yes" && kashrutLemehadrin=="yes")
    {
        recommnadedResturant="DosalachPizza";
    }

    if (numberOfPeople> 2)
    {
        recommnadedResturant="PaparoniPizza";
    }
    else{
        recommnadedResturant="datefor2Italianfood";
    }
   
}

 if (index== 1) {
    if (kosher=="yes")
    {
       
        recommnadedResturant="HamburgerOfShabat";

        if (kashrutLemehadrin=="yes")
        {
            recommnadedResturant="RabiHamburger";
        }
        
    }   
 }

 if (index== 2) {
    if (numberOfPeople>5)
    {
        if (kosher=="no")
        {
            recommnadedResturant="ThaiHouse";
        }
    }
    else
    {
        if (kosher=="yes")
        {
            recommnadedResturant="PathaiOriginalFood";
        }
    
    }
 };

if (recommnadedResturant=="")
{
    console.log("No recommanded resturant found for you, sorry!")
}
else{
    console.log("Our system recommends this resturant: ",recommnadedResturant )
} 
