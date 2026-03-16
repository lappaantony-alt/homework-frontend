let ready =confirm("Are you ready to play?");
while (!ready) {
  alert("The game will only start when you are ready.")
  ready =confirm("Are you ready to play?");
}

let wins = 0;

while (wins < 3) {

  const target = Math.floor(Math.random() * 10);
  let guess = null;

  while (guess !== target) {
   guess = parseInt(prompt("Guess the number between 0 and 9"), 10);

    if (guess > target) {
      alert("The number is lower than your guess");
    }

    if (guess < target) {
      alert("The number is higher than your guess");
    }
  }

  alert("Correct guess!");

  wins++;
  if (wins < 3) {
    alert("You've won " + wins + " round(s)! Get ready for the next round.");
  }
}

alert("Congratulations! You've won the game with 3 wins!");
