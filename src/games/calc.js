import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const resultOfExpression = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const makeRound = () => {
  const randomNum1 = getRandomNumber(1, 25);
  const randomNum2 = getRandomNumber(1, 25);
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${randomNum1} ${randomOperator} ${randomNum2}`;
  const correctAnswer = `${resultOfExpression(randomNum1, randomOperator, randomNum2)}`;
  return [question, correctAnswer];
};

const calcGame = () => gameEngine(gameRules, makeRound);

export default calcGame;
