import readlineSync from 'readline-sync';

const roundsCount = 3;

const engine = (gameRules, gameCheck) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let i = 1; i <= roundsCount; i += 1) {
    const [getQuestion, correctAnswer] = gameCheck();
    console.log(`Question: ${getQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gameCheck = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const evenGame = () => engine(gameRules, gameCheck);

export default evenGame;