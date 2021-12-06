const checkInput = (bool) => {
  if (bool) {
    return true;
  }

  return false;
};

const exceptionCarsNameInput = (carsNameInput) => {
  const carsNames = carsNameInput.split(',');
  const INPUT_LENGTH = {
    MAX: 5,
    MIN: 1,
  };
  let boolInput = true;

  if ((carsNameInput.length > INPUT_LENGTH.MAX && !carsNameInput.includes(','))
      || carsNames.includes('')
      || carsNames.length === INPUT_LENGTH.MIN) {
    boolInput = false;
  }

  carsNames.forEach((e) => {
    if (e.length > INPUT_LENGTH.MAX || e === '') {
      boolInput = false;
    }
  });

  return checkInput(boolInput);
};

const exceptionRacingCountInput = (racingCountInput) => {
  const validaitions = [
    racingCountInput !== '',
    Number(racingCountInput) > 0,
  ];

  return checkInput(validaitions.every((validaition) => validaition));
};

export { exceptionCarsNameInput, exceptionRacingCountInput };
