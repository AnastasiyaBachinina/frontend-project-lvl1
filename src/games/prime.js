import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};

const makeRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = `${randomNumber}`;
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const primeGame = () => gameEngine(gameRules, makeRound);
export default primeGame;
