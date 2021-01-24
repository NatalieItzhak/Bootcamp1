var input= require('readline-sync');
var answer;
var quizSum=0;
var readlineSync = require('readline-sync');
// Intro to the user 
var question =input.question("Welcome to the Quiz!\nIn order to start, please press enter! ");
//Question 1
var arr_answers1= ["Your followers","Celebrities","People you are following", "Trending profiles"],
answer = readlineSync.keyInSelect(arr_answers1, 'Whose posts appear on the Instagram Feed?')+1;

if (answer==3) {
  quizSum=quizSum+20;
  console.log("Correct! Bravo");
}
else {
  console.log("Wrong answer")
};
console.log("---------------");
console.log("Quiz Score: " + quizSum.toString() );
console.log("---------------");
var question =input.question("press enter to the next question")
//question2
var arr_answers2= ["2016", "2017", "2018", "2015"];
answer = readlineSync.keyInSelect(arr_answers2, 'When did Instagram become 5 years old?')+1;
if (answer==4) {
  quizSum=quizSum+20;
  console.log("Correct! Bravo");
}
else {
  console.log("Wrong answer")
};
console.log("---------------");
console.log("Quiz Score: " + quizSum.toString() );
console.log("---------------");
var question =input.question("press enter to the next question")
//question3
var arr_answers3= ["Double tap", "Single tap", "Pinch using two fingers", "Tap then pinch"];
answer = readlineSync.keyInSelect(arr_answers3,'How do we zoom photos and video?' )+1;
if (answer==3) {
  quizSum=quizSum+20;
  console.log("Correct! Bravo");
}
else {
  console.log("Wrong answer")
};
console.log("---------------");
console.log("Quiz Score: " + quizSum.toString() );
console.log("---------------");
var question =input.question("press enter to the next question")
//question 4
var arr_answers4= ["12 hours", "24 hours", "26 hours", "48 hours"];
answer = readlineSync.keyInSelect(arr_answers4,'How long are Instagram stories up for?' )+1;
if (answer==2) {
  quizSum=quizSum+20;
  console.log("Correct! Bravo");
}
else {
  console.log("Wrong answer")
};
console.log("---------------");
console.log("Quiz Score: " + quizSum.toString() );
console.log("---------------");
var question =input.question("press enter to the next question")
//question 5
var arr_answers5= ["Information", "Activity", "Trend", "Update"];
answer = readlineSync.keyInSelect(arr_answers5,'what is an Hashtag' )+1;
if (answer==3) {
  quizSum=quizSum+20;
  console.log("Correct! Bravo");
}
else {
  console.log("Wrong answer")
};
console.log("---------------");
console.log("Quiz total Score: " + quizSum.toString() );
console.log("---------------");
if (quizSum==20)
{
  (console.log("I guess you don't use social media at all"))
}
if (quizSum==40)
{
  (console.log("You must not get on Instgram much, because these ae very common questions."))
}
if (quizSum==60)
{
  (console.log("You're probably have your own IG account and you are following impressive amount of people"))
}
if (quizSum==80)
{
  (console.log("You're probably spending most of your time on Instagram"))
}
if (quizSum==100)
{
  (console.log("WOW you're probably an Instagram influncer with a lot of followers!"))
}

