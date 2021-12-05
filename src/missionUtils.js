const RANDOM_NUMBER = {
  MIN: 1,
  MAX: 9,
};

function getRandomNumber() {
  const randomNumber = MissionUtils.Random.pickNumberInRange(
    RANDOM_NUMBER.MIN,
    RANDOM_NUMBER.MAX,
  );

  return randomNumber;
}

export { getRandomNumber };
