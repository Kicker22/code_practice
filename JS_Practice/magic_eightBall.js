let userName = "Matt";

let intro = (userName === " ") ? 'Hello!' : `Hello ${userName}!`;
console.log(intro)

let userQuestion = "Will I ever have one million dollars?"

console.log(`You asked.... ${userQuestion}`)

let randomNumber = Math.floor(Math.random() *8);

const eightBall = randomNumber;

switch(eightBall) 
{
  case 1:
  console.log('Signs point to no...');
  break;  
  case 2: 
  console.log('Do not count on it');
  break;  
  case 3: 
  console.log('My sources say no');
  break;  
  case 4: 
  console.log('Signs point to yes');
  break;  
  case 5: 
  console.log('It is decidedly so');
  break;  
  case 6: 
  console.log("it's in your favor");
  break;  
  case 7: 
  console.log('Hell nah...');
  case 8:  
  break;
  default:
    console.log('Reply hazy try again');

}