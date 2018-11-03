let userName = '';
// user's name

console.log(`Welcome aboard ${userName}!`);

let userQuestion = '';
console.log(`You asked: ${userQuestion}`);
// user's question

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

if (randomNumber === 0) {
  eightBall = 'It is certain'
} else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {  
  eightBall = 'Reply hazy try again';
}  else if (randomNumber === 3) {
  eightBall = 'hmmm.. not quite sure about that'
} else if (randomNumber === 4) {
  eightBall = 'just wait on it!';
} else if (randomNumber === 5) {
  eightBall = 'hell yea';
} else if (randomNumber === 6) {
  eightBall = 'right';
} else if (randomNumber === 7) {
  eightBall = 'soon';
} else if (randomNumber === 8) {
  eightBall = 'My sources say no';
} else {
  console.log('unknown error');
}

console.log(`Magic Eight Ball's answer: ${eightBall}`);
