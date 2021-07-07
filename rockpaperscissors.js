/*Project: Rock, Paper, Scissors
Developer: Daija Gibbs
Date: 7/10/2020*/

//takes user input as param and makes it lowercase
const getUserChoice = userInput => 
{
  userInput = userInput.toLowerCase();
  if (userInput === 'rock'||userInput === 'paper'|| userInput ==='scissors'|| userInput ==='bomb')
  {
    return userInput;
  } 
  else return 'Error getting user input';
}

//takes no params, generates a number from 0-2 and assigns either rock paper or scissors to each number
const getComputerChoice= () =>
{
 let randomNumber = Math.floor(Math.random() * 3);
 switch (randomNumber)
 {
   case 0:
   return 'rock';
   case 1:
   return 'paper';
   case 2:
   return 'scissors';
   default: console.log('huh?');
 }
}

//checks for winner based on userChoice first
const determineWinner = (userChoice, computerChoice) =>
{
 //TIE
 if (userChoice === computerChoice) {return 'Its a tie!';}
 //ROCK LOSES AGAINST PAPER/ROCK ONLY BEATS SCISSORS
 if (userChoice === 'rock')
 {
   if (computerChoice === 'paper') {return 'Computer wins.';}
   else return 'User wins.';
 }
 //PAPER ONLY BEATS ROCK
 else if (userChoice == 'paper')
 {
   if (computerChoice === 'rock') { return 'User wins.'}
   else return 'Computer wins.';
 }
 //SCISSORS ONLY BEATS PAPER
 else if (userChoice === 'scissors')
 {
   if (computerChoice === 'paper') {return 'User wins.;'}
   else return 'Computer wins.';
 }  
 else if (userChoice === 'bomb') {return 'User wins.'}
}

//runs choices for user and computer and runs determineWinner fucntion
const playGame = () =>
{
  let userChoice = getUserChoice('bomb');
  console.log(`User Choice is ${userChoice}.`);
  let computerChoice = getComputerChoice();
  console.log(`Computer Choice is ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
}

//MAIN//
//combines all the helper functions and runs whole game
playGame();
