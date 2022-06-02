import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return calculateGCD(num2, num1 % num2);
};

const makeRound = () => {
  const randomNum1 = getRandomNumber(1, 100);
  const randomNum2 = getRandomNumber(1, 100);
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = `${calculateGCD(randomNum1, randomNum2)}`;
  return [question, correctAnswer];
};

const gcdGame = () => gameEngine(gameRules, makeRound);

export default gcdGame;
