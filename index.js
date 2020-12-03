var readlineSync=require("readline-sync");
var chalk=require("chalk")
var userName=readlineSync.question( chalk.red("What's your name?"));
var score=0;
console.log("Welcome " + chalk.cyan(userName) + " Do you know Bhavya? ");
console.log( chalk.yellowBright("Lets Play A Friendship Quiz!!"))
function play(question,answer)
{
  var userQuestion= readlineSync.question(question);
  if(userQuestion==answer)
  {
    console.log(chalk.green('you are right'));
   
  }
  else
  {
    console.log(chalk.red('you are wrong!!'));
  }
     score=score+1;
    console.log("The result is= " + chalk.blue(score));
    console.log(chalk.yellowBright("---*----*-----*--*---*---"));
}
var question=[{ question:"Where does she live?"+"\n"+"a: Jaipur b: Mumbai c: Sriganganagar"+"\n", answer:"c"},
{ question:"Her favourite hobby is?"+"\n"+"a: Art And Craft b: Singing c: Playing Badminton"+"\n", answer:"a"},
{ question:"Her favourite movie?"+"\n"+"a:Kung Fu Panda b: Minnions c: Bhag Milkha Bhag"+"\n",
answer:"b"},
{question:"What's her favourite school subject?"+"\n"+"a: English b: Hindi c: Computer d: Maths"+"\n", answer:"c"}
];
for( var i=0;i<question.length;i++)
{
  var currentQuestion=question[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log( chalk.bold.rgb(10, 100, 200)("YESS,YOU SCORED= "+chalk.whiteBright(score)));
