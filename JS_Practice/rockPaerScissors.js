const choices = ["rock", "paper", "scissors"];
let userWins = 0;
let computerWins = 0;

initGame = () => {
  let cChoice = computerChoice();
  //enter user choice below:vvvvv
  let uChoice = userChoice("PAPER");
  let winner = determineWinner(cChoice, uChoice);
  //   console.log(winner);
};

userChoice = (userInput) => {
  const choice = userInput.toLowerCase();

  switch (choice) {
    case "rock":
      console.log(`User has chosen ${choice}`);
      break;
    case "paper":
      console.log(`User has chosen ${choice}`);
      break;
    case "scissors":
      console.log(`User has chosen ${choice}`);
      break;
    default:
      console.log(`${choice} is not a valid entry...`);
      break;
  }
  return choice;
};

computerChoice = () => {
  const compChoice = Math.floor(Math.random() * choices.length);
  console.log(`computer has chosen ${choices[compChoice]}`);
  return choices[compChoice];
};

determineWinner = (c, u) => {
  //   console.log(c + " " + u);

  if (c === u) {
    console.log("Tie");
  } else if (u === "rock" && c === "paper") {
    console.log("Computer Wins...");
    computerWins++;
  } else if (u === "paper" && c === "scissors") {
    console.log("Computer Wins...");
    computerWins++;
  } else if (u === "scissors" && c === "rock") {
    console.log("Computer wins...");
    computerWins++;
  } else {
    console.log("User wins!!!");
    userWins++;
  }
  console.log(`User:${userWins} || Computer:${computerWins}`);
};

initGame();
