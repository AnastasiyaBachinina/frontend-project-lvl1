import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'What number is missing in the progression?';

const generateProgression = (progressionStart, progressionStep, progressionLength) => {
  const resultMassive = [];
  let currentValue = progressionStart;

  for (let i = 0; i <= progressionLength; i += 1) {
    resultMassive.push(currentValue);
    currentValue += progressionStep;
  }
  return resultMassive;
};

const makeRound = () => {
  const randomProgStart = getRandomNumber(1, 10);
  const randomProgStep = getRandomNumber(2, 5);
  const randomProgLength = getRandomNumber(5, 10);
  const progression = generateProgression(randomProgStart, randomProgStep, randomProgLength);
  const hideRandomIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = `${progression[hideRandomIndex]}`;
  progression[hideRandomIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const progressionGame = () => gameEngine(gameRules, makeRound);

export default progressionGame;
