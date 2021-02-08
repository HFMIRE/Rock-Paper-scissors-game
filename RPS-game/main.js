const getUserChoice = userInput =>
{
  userInput = userInput.toLowerCase();

 if (
   userInput === 'paper' 
   || userInput === 'scissor'
   || userInput === 'rock'
  )
    { 
      return userInput;
    } else {
     console.log('Error!');
    }
} 
console.log(getUserChoice('paper'));

console.log(getUserChoice('yoy'));

const getComputerChoice = 
  Math.floor(Math.random() * 3);
  
  
   switch (getComputerChoice) {
     case 0: 
     return 'rock';
     case 1: 
     return 'paper';
     case 2: 
     return 'scissor';
 }

console.log(getComputerChoice());