const RANDOM_NUMBER = {
  MIN: 1,
  MAX: 9,
};

const getRandomNumber = () => {
  const randomNumber = MissionUtils.Random.pickNumberInRange(
    RANDOM_NUMBER.MIN,
    RANDOM_NUMBER.MAX,
  );

  return randomNumber;
};

const verifyMoveCars = (cars) => {
  const MIN_NUMBER_OF_MOVE = 4;
  const $cars = Object.values(cars);
  $cars.forEach((e) => {
    const RANDOM_NUMBER = getRandomNumber();
    if (RANDOM_NUMBER >= MIN_NUMBER_OF_MOVE) {
      e.move();
    }
  });

  return $cars;
};

export { getRandomNumber, verifyMoveCars };
